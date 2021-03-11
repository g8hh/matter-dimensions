function prestige_earn_neutrons() {
    if (player.dimensions['matter_1'].amt.lt(1)) return big(0);

    var base = big(10);
    // n03: base is lower
    base = player.upgrades['n03'].get_effect();

    var base_dimensions = new BigNumber();
    base_dimensions.copy(player.dimensions['matter_1'].amt);

    var base_neutrons = base_dimensions.log(base);

    // achievement 45: neutron gain is squared
    if (player.achievements['45'].complete) base_neutrons = base_neutrons.pow(2);

    if (!base_neutrons.lt(1)) {
        // Neutronic Challenge 6 reward: gain more Neutrons
        base_neutrons = base_neutrons.mult(me.challenges['n6'].get_effect());
        // d92: gain more Neutrons based on Dimensional resets
        if (me.upgrades['d92'].is_active()) base_neutrons = base_neutrons.mult(me.upgrades['d92'].get_effect());
        // reactions provide boost to Neutrons
        base_neutrons = base_neutrons.mult(reaction_points_effect_neutrons());
        // Vacuumic Challenge 4 reward: Neutron gain is multiplied by 4
        if (player.challenges['v4'].completed) base_neutrons = base_neutrons.mult(4);
    }

    // Vacuumic Challenge 4: Neutron gain is raised to the power of 0.25
    if (player.challenges['v4'].inC()) base_neutrons = base_neutrons.pow(0.25);

    return base_neutrons.rounddown().max(0);
}
function can_neutronic() {
    return prestige_earn_neutrons().gt(0);
}
function neutronic_hint() {
    var base = big(10);
    // n03: base is lower
    base = player.upgrades['n03'].get_effect();

    return base;
}
function neutronic_hint_next(amt) {
    let resource_need = big(amt).add(1);

    // Vacuumic Challenge 4: Neutron gain is raised to the power of 0.25
    if (player.challenges['v4'].inC()) resource_need = resource_need.pow(4);

    // Neutronic Challenge 6 reward: gain more Neutrons
    resource_need = resource_need.div(me.challenges['n6'].get_effect());
    // d92: gain more Neutrons based on Dimensional resets
    if (me.upgrades['d92'].is_active()) resource_need = resource_need.div(me.upgrades['d92'].get_effect());
    // reactions provide boost to Neutrons
    resource_need = resource_need.div(reaction_points_effect_neutrons());
    // Vacuumic Challenge 4 reward: Neutron gain is multiplied by 4
    if (player.challenges['v4'].completed) resource_need = resource_need.div(4);

    // achievement 45: neutron gain is squared
    if (player.achievements['45'].complete) resource_need = resource_need.pow(0.5);

    let base = big(10);
    // n03: base is lower
    base = player.upgrades['n03'].get_effect();

    return base.pow(resource_need);
}



function reset_neutronic(force=false, higher_reset=false, autobuyer_induced=false) {
    if (!force && !can_neutronic()) return;
    if (!force && !autobuyer_induced && me.settings['prestige_confirmation_neutronic']) {
        let result = confirm("Are you sure you want to perform a Neutronic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_neutrons = prestige_earn_neutrons();
    if (!force) me.achievements['32'].award();
    if (!force && earned_neutrons.gt(1)) me.achievements['45'].award();
    if (!force && me.time_neutronic < 200) me.achievements['54'].award();
    if (!force && me.time_neutronic - me.time_passed < 1e-9) me.achievements['55'].award();

    // Challenge 4: all resources are capped
    me.neutrons = me.neutrons.add(earned_neutrons).round().min(me.challenge_strength_4);

    // v194: keep Stars on Neutronic resets
    if (!me.upgrades['v194'].is_active()) me.stars = new BigNumber(0);

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("gravitonic_")) {
            me.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("neutronic_")) {
            me.dimensions[key].amt = new BigNumber(me.dimensions[key].amt_bought);
        }
    }

    // Neutronic Challenge 6: Neutronic resets all Neutronic upgrades and particles
    if (me.challenges['n6'].inC()) {
        me.dimensions["protons"].reset();
        me.dimensions["electrons"].reset();
        me.dimensions["bosons"].reset();

        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("n")) {
                me.upgrades[key].reset();
            }
        }
    }

    // v51: gravitonic upgrades are not reset
    // Gravitonic Meta-Challenge reward: Gravitonic upgrades are never reset
    if (!me.challenges['g0'].completed && (higher_reset || !me.upgrades['v51'].is_active())) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("g")) {
                // achievement 62: Gravitonic upgrades that provide automation are never reset
                // achievement 88: keep all automation upgrades
                if ((me.achievements['62'].complete || me.achievements['88'].complete) && (key == "g41" || key == "g42")) continue;
                me.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(me.challenges)) {
        if (key.includes("g")) {
            if (me.challenges[key].in_challenge) me.challenges[key].exit(false);
        }
    }

    reset_gravitonic(true, true);

    if (!force) me.neutronic_resets += 1;

    me.gravitons = big(0);
    // n01: start with Gravitons
    if (me.upgrades['n01'].is_active()) me.gravitons = me.upgrades["n01"].get_effect();

    if (!force) me.fastest_neutronic = Math.min(me.fastest_neutronic, me.time_neutronic);

    me.time_neutronic = 0;

    if (!force) game_loop();
}



function power_stars_tickspeed() {
    // Neutronic Challenge 8: Stars do nothing
    if (player.challenges['n8'].inC()) return big(0);

    let base_upg = player.stars.add(1).log(10).pow(0.5);

    // Neutronic Challenge 2: Stars give double Tickspeed upgrades
    if (player.challenges['n2'].inC()) base_upg = base_upg.mult(2);
    // Neutronic Challenge 2 reward: Stars give more Tickspeed upgrades
    base_upg = base_upg.mult(player.challenges['n2'].get_effect());
    // a02: Stars give more Tickspeed upgrades
    base_upg = base_upg.mult(player.upgrades['a02'].get_effect());
    // achievement 103: gain 25% more Tickspeed Upgrades from Stars
    if (player.achievements['103'].complete) base_upg = base_upg.mult(1.25);

    return base_upg;
}
function power_stars_light_effect() {
    // Neutronic Challenge 8: Stars do nothing
    if (player.challenges['n8'].inC()) return big(1);

    let base_pow = player.stars.add(1).log(10).add(1).log(10).div(10).add(1).pow(0.3);

    // Neutronic Challenge 7 reward: Stars affect Light more
    base_pow = base_pow.pow(player.challenges['n7'].get_effect());

    return base_pow;
}
function power_stars_photonic_dim() {
    // Neutronic Challenge 8: Stars do nothing
    if (player.challenges['n8'].inC()) return big(1);

    return player.stars.add(1);
}
function power_stars_black_holes() {
    // Neutronic Challenge 8: Stars do nothing
    if (player.challenges['n8'].inC()) return big(0);

    return player.stars.pow(0.1);
}