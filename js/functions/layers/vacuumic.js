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



function reset_vacuumic(force=false, higher_reset=false, autobuyer_induced=false) {
    if (!force && !can_vacuumic()) return;
    if (!force && !autobuyer_induced && me.settings['prestige_confirmation_vacuumic']) {
        let result = confirm("Are you sure you want to perform a Vacuumic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_vacuum_energy = prestige_earn_vacuum_energy();
    if (!force && me.time_vacuumic - me.time_passed < 1e-9) me.achievements['96'].award();

    // achievement 115: Temperature is no longer reduced on Vacuumic
    if (!me.achievements['115'].complete) me.temperature_energy = me.temperature_energy.div(me.space.add(1).pow(0.2));

    // Challenge 4: all resources are capped
    // achievement 108: Vacuum Energy is not affected by resource limit
    me.vacuum_energy = me.vacuum_energy.add(earned_vacuum_energy).round();
    if (!me.achievements['108'].complete) me.vacuum_energy = me.vacuum_energy.min(me.challenge_strength_4);
    me.space = big(0);

    me.stars = big(0);
    me.inflation = big(0);

    me.dimensions["protons"].reset();
    me.dimensions["electrons"].reset();
    me.dimensions["bosons"].reset();

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("neutronic_")) {
            me.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("vacuumic_")) {
            me.dimensions[key].amt = new BigNumber(me.dimensions[key].amt_bought);
        }
    }

    // Vacuumic Challenge 6: Vacuumic upgrades and Space Theorems are reset
    if (me.challenges['v6'].inC()) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("v")) {
                // achievement 88: keep all automation upgrades
                if (me.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
                me.upgrades[key].reset();
            }
        }
        me.space_theorems = big(0);
    }

    // d102: neutronic upgrades are not reset
    if (higher_reset || !me.upgrades['d102'].is_active()) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("n0")) {
                me.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(me.upgrades)) {
        if (key.includes("n") && !key.includes("n0")) {
            me.upgrades[key].reset();
        }
    }

    // Automation shop reset
    if (!me.upgrades['AUTO1_3'].is_active()) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("AUTO1")) {
                me.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(me.challenges)) {
        if (key.includes("n")) {
            if (me.challenges[key].in_challenge) me.challenges[key].exit(false);
        }
    }

    reset_neutronic(true, true);

    if (!force) me.vacuumic_resets += 1;

    me.neutrons = big(0);
    // v11: start with Neutrons
    if (me.upgrades['v11'].is_active()) me.neutrons = me.upgrades["v11"].get_effect();

    if (!force) me.fastest_vacuumic = Math.min(me.fastest_vacuumic, me.time_vacuumic);

    me.time_vacuumic = 0;

    if (!force) game_loop();
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