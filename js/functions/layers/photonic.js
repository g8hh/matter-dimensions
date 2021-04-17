function prestige_earn_photons() {
    var formula_exponent = new BigNumber(0.2);
    // p22: improve photon gain
    formula_exponent = player.upgrades['p22'].get_effect();

    var base_photons = player.energy.pow(formula_exponent);
    // achievement 15: x3.14 photons
    if (player.achievements['15'].complete) base_photons = base_photons.mult(3.14);
    // p23: gain more photons over time
    if (player.upgrades['p23'].is_active()) base_photons = base_photons.mult(player.upgrades['p23'].get_effect());
    // n23: gain more photons
    if (player.upgrades['n23'].is_active()) base_photons = base_photons.mult(player.upgrades['n23'].get_effect());
    // g34: gain more photons
    if (player.upgrades['g34'].is_active()) base_photons = base_photons.mult(player.upgrades['g34'].get_effect());
    // v131: gain 13 times more photons
    base_photons = base_photons.mult(player.upgrades['v131'].get_effect());
    // Temperature Milestone 2: photons gain is increased
    if (player.milestones['temperature_2'].is_active()) base_photons = base_photons.mult(player.milestones['temperature_2'].get_effect());
    // reactions provide boost to photons
    base_photons = base_photons.mult(reaction_points_effect_photons());
    // p53: Infrared Waves boost Photon gain
    base_photons = base_photons.mult(player.upgrades['p53'].get_effect());
    // Vacuumic Challenge 4 reward: Photon gain is multiplied by 4
    if (player.challenges['v4'].completed) base_photons = base_photons.mult(4);
    // evolution b02: Photon gain is multiplied
    if (player.evolutions['b02'].is_active()) base_photons = base_photons.mult(player.evolutions['b02'].get_secondary_effect());
    // challenge d7: Photon gain is multiplied
    if (!player.challenges['d0'].inC() && (player.challenges['d7'].inC() || player.challenges['d7'].completed)) base_photons = base_photons.mult(player.challenges['d7'].get_effect());

    // Vacuumic Challenge 4: Photon gain is raised to the power of 0.25
    if (player.challenges['v4'].inC()) base_photons = base_photons.pow(0.25);

    return base_photons.max(1).rounddown();
}
function can_photonic() {
    // Photonic Challenge 8: Photonic resets are unavailable
    if (player.challenges['p8'].inC()) return false;
    if (player.time_passed == 0) return false;
    return player.matter.lt(1e-9) || player.antimatter.lt(1e-9) || !big(1).gt(player.energy);
}
function photonic_hint() {
    return big(1);
}
function photonic_hint_next(amt) {
    let resource_need = big(amt).add(1);

    // Vacuumic Challenge 4: Photon gain is raised to the power of 0.25
    if (player.challenges['v4'].inC()) resource_need = resource_need.pow(4);
    // achievement 15: x3.14 photons
    if (player.achievements['15'].complete) resource_need = resource_need.div(3.14);
    // p23: gain more photons over time
    if (player.upgrades['p23'].is_active()) resource_need = resource_need.div(player.upgrades['p23'].get_effect());
    // n23: gain more photons
    if (player.upgrades['n23'].is_active()) resource_need = resource_need.div(player.upgrades['n23'].get_effect());
    // g34: gain more photons
    if (player.upgrades['g34'].is_active()) resource_need = resource_need.div(player.upgrades['g34'].get_effect());
    // v131: gain 13 times more photons
    resource_need = resource_need.div(player.upgrades['v131'].get_effect());
    // Temperature Milestone 2: photons gain is increased
    if (player.milestones['temperature_2'].is_active()) resource_need = resource_need.div(player.milestones['temperature_2'].get_effect());
    // reactions provide boost to photons
    resource_need = resource_need.div(reaction_points_effect_photons(player));
    // p53: Infrared Waves boost Photon gain
    resource_need = resource_need.div(player.upgrades['p53'].get_effect());
    // Vacuumic Challenge 4 reward: Photon gain is multiplied by 4
    if (player.challenges['v4'].completed) resource_need = resource_need.div(4);
    // evolution b02: Photon gain is multiplied
    if (player.evolutions['b02'].is_active()) resource_need = resource_need.div(player.evolutions['b02'].get_secondary_effect());
    // challenge d7: Photon gain is multiplied
    if (!player.challenges['d0'].inC() && (player.challenges['d7'].inC() || player.challenges['d7'].completed)) resource_need = resource_need.div(player.challenges['d7'].get_effect());

    let formula_exponent = new BigNumber(0.2);
    // p22: improve photon gain
    formula_exponent = player.upgrades['p22'].get_effect();

    return resource_need.pow(big(1).div(formula_exponent)).max(1);
}



function reset_photonic(force=false, higher_reset=false, autobuyer_induced=false, count_as_reset_num=1) {
    if (!force && !can_photonic()) return;
    if (!force && !autobuyer_induced && player.settings['prestige_confirmation_photonic']) {
        let result = confirm("Are you sure you want to perform a Photonic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_photons = prestige_earn_photons();
    if (!force && earned_photons.gt(1)) player.achievements['15'].award();
    if (!force && player.time_photonic < 200) player.achievements['27'].award();
    if (!force && earned_photons.gt(100)) player.achievements['35'].award();
    if (!force && earned_photons.gt(1e8)) player.achievements['66'].award();

    let photonic_resets = big(1);
    // v171: gain more resets based on earned Photons
    if (player.upgrades['v171'].is_active()) photonic_resets = photonic_resets.mult(player.upgrades['v171'].get_effect());

    // Challenge 4: all resources are capped
    player.photons = player.photons.add(earned_photons).round().min(player.challenge_strength_4);

    if (!force) player.max_photons_at_once = player.max_photons_at_once.max(earned_photons);

    player.matter = new BigNumber(1);
    player.antimatter = new BigNumber(1);
    player.energy = new BigNumber(0);
    player.light = new BigNumber(0);

    // p54: start with 1e9 matter
    if (player.upgrades['p54'].enabled) player.matter = player.upgrades['p54'].get_effect();

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("matter_")) {
            player.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("photonic_")) {
            // p43: Photonic Dimension amounts are not reset upon Photonic
            if (player.upgrades['p43'].is_active()) player.dimensions[key].amt = player.dimensions[key].amt.max(player.dimensions[key].amt_bought);
            else player.dimensions[key].amt = new BigNumber(player.dimensions[key].amt_bought);
        }
    }

    // Photonic Challenge 6: Photonic resets all Photonic upgrades
    // Photonic Meta-Challenge reward: Photonic upgrades are never reset
    if (!player.challenges['p0'].completed && player.challenges['p6'].inC()) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("p")) {
                player.upgrades[key].reset();
            }
        }
    }

    player.upgrades["TICKSPEED"].reset();

    // n14, n24, n34: powers persist through Photonic
    if (!player.upgrades['n14'].is_active()) player.proton_power = big(0);
    if (!player.upgrades['n24'].is_active()) player.electron_power = big(0);
    if (!player.upgrades['n34'].is_active()) player.boson_power = big(0);

    if (!force || higher_reset) player.photonic_resets += count_as_reset_num * photonic_resets.toInt();

    if (!force) player.fastest_photonic = Math.min(player.fastest_photonic, player.time_photonic);

    player.time_passed = 0;
    player.time_photonic = 0;

    player.time_started = false;

    if (!force) game_loop(false);
}



function power_light_production() {
    let base_pow = big(4);
    // Stars boost Light effect
    base_pow = base_pow.mult(power_stars_light_effect());

    let base_effect = player.light.pow(base_pow).add(1);

    // Neutronic Challenge 7: Light effect is square-rooted
    if (player.challenges['n7'].inC()) base_effect = base_effect.pow(0.5);

    return base_effect;
}

function power_light_time() {
    let base_time_speed = big(256);
    // Photonic Challenge 7: time is 256x slower
    if (player.challenges['p7'].inC()) base_time_speed = base_time_speed.mult(256);

    return base_time_speed.div(player.upgrades['p11'].get_effect()).pow(player.light.add(1).log(10).pow(0.3).div(player.light.add(1).log(10).pow(0.3).add(6)));
}