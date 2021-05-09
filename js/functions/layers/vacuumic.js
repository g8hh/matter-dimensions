function prestige_earn_vacuum_energy() {
    if (player.matter.lt(1e10) && player.space.lt(1e-9)) return big(0);

    let base_ve = player.space.pow(0.5);
    // blue waves boost VE
    base_ve = base_ve.mult(wave_effect('blue'));

    return base_ve.roundup().max(0);
}
function can_vacuumic() {
    return prestige_earn_vacuum_energy().gt(0);
}
function vacuumic_hint() {
    return big(1e10);
}
function vacuumic_hint_next(amt) {
    let resource_need = big(amt).add(1);
    // blue waves boost VE
    resource_need = resource_need.div(wave_effect('blue'));

    return resource_need.subtract(1).pow(2);
}



function reset_vacuumic(force=false, higher_reset=false, autobuyer_induced=false, count_as_reset_num=1) {
    if (!force && !can_vacuumic()) return;
    if (!force && !autobuyer_induced && player.settings['prestige_confirmation_vacuumic']) {
        let result = confirm("Are you sure you want to perform a Vacuumic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_vacuum_energy = prestige_earn_vacuum_energy();
    if (!force && player.time_vacuumic - player.time_passed < 1e-9) player.achievements['96'].award();

    // achievement 115: Temperature is no longer reduced on Vacuumic
    if (!player.achievements['115'].complete) player.temperature_energy = player.temperature_energy.div(player.space.add(1).pow(0.2));

    // Challenge 4: all resources are capped
    // achievement 108: Vacuum Energy is not affected by resource limit
    player.vacuum_energy = player.vacuum_energy.add(earned_vacuum_energy).round();
    if (!player.achievements['108'].complete) player.vacuum_energy = player.vacuum_energy.min(player.challenge_strength_4);
    player.space = big(0);

    player.stars = big(0);
    player.inflation = big(0);

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("neutronic_")) {
            player.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("vacuumic_")) {
            player.dimensions[key].amt = new BigNumber(player.dimensions[key].amt_bought);
        }
    }

    // Vacuumic Challenge 6: Vacuumic upgrades and Space Theorems are reset
    if (player.challenges['v6'].inC()) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("v")) {
                // achievement 88: keep all automation upgrades
                if (player.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
                player.upgrades[key].reset();
            }
        }
        player.space_theorems = big(0);
    }

    // d102: neutronic upgrades are not reset
    // Neutronic Meta-Challenge reward: Neutonic upgrades and particles are never reset
    if (!player.challenges['n0'].completed && (higher_reset || !player.upgrades['d102'].is_active())) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("n0")) {
                player.upgrades[key].reset();
            }
        }
    }

    // d122: neutronic particles and their upgrades are not reset
    // Neutronic Meta-Challenge reward: Neutonic upgrades and particles are never reset
    if (!player.challenges['n0'].completed && (higher_reset || !player.upgrades['d122'].is_active())) {
        player.dimensions["protons"].reset();
        player.dimensions["electrons"].reset();
        player.dimensions["bosons"].reset();

        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("n") && !key.includes("n0")) {
                player.upgrades[key].reset();
            }
        }
    }

    // Automation shop reset
    if (!player.upgrades['AUTO1_3'].is_active()) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("AUTO1")) {
                player.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(player.challenges)) {
        if (key.includes("n")) {
            if (player.challenges[key].in_challenge) player.challenges[key].exit(false);
        }
    }

    if (higher_reset && player.unlocked_st_autobuyers && player.settings["enable_vtree_autobuyer_on_higher_reset"]) player.activated_st_autobuyers = true;

    let reset_multiplier = 1;
    // evolution b03: multiply resets below Biological
    if (player.evolutions['b03'].is_active()) reset_multiplier *= player.evolutions['b03'].get_effect().toInt();

    reset_neutronic(true, true, false, reset_multiplier * count_as_reset_num);

    if (!force || higher_reset) player.vacuumic_resets += count_as_reset_num;

    player.neutrons = big(0);
    // v11: start with Neutrons
    if (player.upgrades['v11'].is_active()) player.neutrons = player.upgrades["v11"].get_effect();

    if (!force) player.fastest_vacuumic = Math.min(player.fastest_vacuumic, player.time_vacuumic);

    player.time_vacuumic = 0;

    if (!force) game_loop(false);
}



function power_inflation_matter() {
    return player.inflation.add(1).pow(4);
}
function power_inflation_photonic() {
    let base_pow = player.inflation.add(1);
    // Vacuumic Challenge 5 reward: those three boosts are ^1.5
    if (player.challenges['v5'].completed) base_pow = base_pow.pow(1.5);
    return base_pow;
}
function power_inflation_gravitonic() {
    let base_pow = player.inflation.add(1).pow(0.1);
    // Vacuumic Challenge 5 reward: those three boosts are ^1.5
    if (player.challenges['v5'].completed) base_pow = base_pow.pow(1.5);
    return base_pow;
}
function power_inflation_neutronic() {
    let base_pow = player.inflation.add(1).pow(0.075);
    // Vacuumic Challenge 5 reward: those three boosts are ^1.5
    if (player.challenges['v5'].completed) base_pow = base_pow.pow(1.5);
    return base_pow;
}
function power_inflation_vacuumic() {
    let base_pow = player.inflation.add(1).log(10).pow(3).add(1);
    return base_pow;
}