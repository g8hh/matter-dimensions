function prestige_earn_gravitons() {
    if (!player.matter.gt(1)) return big(0);

    var base = big(10);
    // g30: base is 9
    base = player.upgrades['g30'].get_effect();
    // g32: base is reduced further
    if (player.upgrades['g32'].is_active()) base = player.upgrades['g32'].get_effect();

    var base_matter = new BigNumber();
    base_matter.copy(player.matter);
    // g22: light reduces the amount of required matter
    if (player.upgrades['g22'].is_active()) base_matter = base_matter.mult(player.upgrades['g22'].get_effect());

    var base_gravitons = base_matter.log(base);

    // g31: you gain 10% more gravitons
    base_gravitons = base_gravitons.mult(player.upgrades['g31'].get_effect());
    // achievement 32: you gain 20% more gravitons
    if (player.achievements['32'].complete) base_gravitons = base_gravitons.mult(1.2);
    // achievement 47: you gain 10% more gravitons
    if (player.achievements['47'].complete) base_gravitons = base_gravitons.mult(1.1);
    // Gravitonic Challenge 3 reward: you gain 5% more gravitons
    if (player.challenges['g3'].completed) base_gravitons = base_gravitons.mult(1.05);
    // Vacuumic Challenge 4 reward: gain 4% more Gravitons
    if (player.challenges['v4'].completed) base_gravitons = base_gravitons.mult(1.04);

    // n31: free gravitons upon reset
    if (player.upgrades['n31'].is_active()) base_gravitons = base_gravitons.add(player.upgrades['n31'].get_effect());
    // v83: free gravitons upon reset
    if (player.upgrades['v83'].is_active()) base_gravitons = base_gravitons.add(player.upgrades['v83'].get_effect());
    // d61: free gravitons upon reset
    base_gravitons = base_gravitons.add(player.upgrades['d61'].get_effect());
    // green waves get extra Gravitons
    base_gravitons = base_gravitons.add(wave_effect('green'));

    // Gravitonic Challenge 7: graviton gain is raised to a power of 0.7
    if (player.challenges['g7'].inC()) base_gravitons = base_gravitons.pow(0.7);
    // Gravitonic Challenge 7 reward: graviton gain is raised to a power of 1.05
    if (player.challenges['g7'].completed) base_gravitons = base_gravitons.pow(1.05);

    // Vacuumic Challenge 4: graviton gain is divided by 4
    if (player.challenges['v4'].inC()) base_gravitons = base_gravitons.mult(0.25);

    return base_gravitons.subtract(player.gravitons).rounddown().max(0);
}
function can_gravitonic() {
    return prestige_earn_gravitons().gt(0);
}
function gravitonic_hint() {
    return gravitonic_hint_next(0);
}
function gravitonic_hint_next(amt) {
    var base = big(10);
    // g30: base is 9
    base = player.upgrades['g30'].get_effect();
    // g32: base is reduced further
    if (player.upgrades['g32'].is_active()) base = player.upgrades['g32'].get_effect();

    var need_gravitons = player.gravitons.add(amt).add(1);

    // Vacuumic Challenge 4: graviton gain is divided by 4
    if (player.challenges['v4'].inC()) need_gravitons = need_gravitons.mult(4);

    // Gravitonic Challenge 7: graviton gain is raised to a power of 0.7
    if (player.challenges['g7'].inC()) need_gravitons = need_gravitons.pow(1 / 0.7);
    // Gravitonic Challenge 7 reward: graviton gain is raised to a power of 1.05
    if (player.challenges['g7'].completed) need_gravitons = need_gravitons.pow(1 / 1.05);

    // n31: free gravitons upon reset
    if (me.upgrades['n31'].is_active()) need_gravitons = need_gravitons.subtract(me.upgrades['n31'].get_effect());
    // v83: free gravitons upon reset
    if (me.upgrades['v83'].is_active()) need_gravitons = need_gravitons.subtract(me.upgrades['v83'].get_effect());
    // d61: free gravitons upon reset
    need_gravitons = need_gravitons.subtract(me.upgrades['d61'].get_effect());
    // green waves get extra Gravitons
    need_gravitons = need_gravitons.subtract(wave_effect('green'));

    // g31: you gain 10% more gravitons
    need_gravitons = need_gravitons.div(player.upgrades['g31'].get_effect())
    // achievement 32: you gain 20% more gravitons
    if (player.achievements['32'].complete) need_gravitons = need_gravitons.div(1.2);
    // achievement 47: you gain 10% more gravitons
    if (player.achievements['47'].complete) need_gravitons = need_gravitons.div(1.1);
    // Gravitonic Challenge 3 reward: you gain 5% more gravitons
    if (player.challenges['g3'].completed) need_gravitons = need_gravitons.div(1.05);
    // Vacuumic Challenge 4 reward: gain 4% more Gravitons
    if (player.challenges['v4'].completed) need_gravitons = need_gravitons.div(1.04);

    var base_req = base.pow(need_gravitons);
    // g22: light reduces the amount of required matter
    if (player.upgrades['g22'].is_active()) base_req = base_req.div(player.upgrades['g22'].get_effect());

    return base_req.max(1);
}



function reset_gravitonic(force=false, higher_reset=false, autobuyer_induced=false) {
    if (!force && !can_gravitonic()) return;
    if (!force && !autobuyer_induced && me.settings['prestige_confirmation_gravitonic']) {
        let result = confirm("Are you sure you want to perform a Gravitonic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_gravitons = prestige_earn_gravitons();
    if (!force && me.time_gravitonic - me.time_passed < 1e-9) me.achievements['36'].award();
    if (!force && me.time_gravitonic < 300) me.achievements['37'].award();
    if (!force && !earned_gravitons.lt(5)) me.achievements['34'].award();
    if (!force && earned_gravitons.gt(10)) me.achievements['47'].award();
    if (!force && earned_gravitons.gt(10000)) me.achievements['116'].award();

    // Challenge 4: all resources are capped
    me.gravitons = me.gravitons.add(earned_gravitons).round().min(me.challenge_strength_4);

    me.black_holes = new BigNumber(0);
    
    if (!force) me.max_gravitons = me.max_gravitons.max(me.gravitons);
    if (!force) me.max_gravitons_in_nc = me.max_gravitons_in_nc.max(me.gravitons);

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("photonic_")) {
            me.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("gravitonic_")) {
            me.dimensions[key].amt = new BigNumber(me.dimensions[key].amt_bought);
        }
    }

    // Gravitonic Challenge 6: Gravitonic resets all Gravitonic upgrades
    // Gravitonic Meta-Challenge reward: Gravitonic upgrades are never reset
    if (me.challenges['g6'].inC() && !me.challenges['g0'].completed) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("g")) {
                // achievement 62: Gravitonic upgrades that provide automation are never reset
                // achievement 88: keep all automation upgrades
                if ((me.achievements['62'].complete || me.achievements['88'].complete) && (key == "g41" || key == "g42")) continue;
                me.upgrades[key].reset();
            }
        }
    }

    // n05: photonic upgrades are not reset
    // Photonic Meta-Challenge reward: photonic upgrades are never reset
    if (!me.challenges['p0'].completed && (higher_reset || !me.upgrades['n05'].is_active())) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("p")) {
                me.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(me.challenges)) {
        if (key.includes("p")) {
            if (me.challenges[key].in_challenge) me.challenges[key].exit(false);
        }
    }

    me.proton_power = big(0);
    me.electron_power = big(0);
    me.boson_power = big(0);

    reset_photonic(true, true);

    // achievement 57: earn gravitonic resets equal to gravitons
    if (!force) {
        if (!me.achievements['57'].complete) me.gravitonic_resets += 1;
        else me.gravitonic_resets += earned_gravitons.toInt();
    }

    me.photons = big(0);
    // g01: start with Photons
    // Photonic Challenge 8: you cannot gain Photons
    if (!me.challenges['p8'].inC() && me.upgrades['g01'].is_active()) me.photons = me.upgrades["g01"].get_effect();

    if (!force) me.fastest_gravitonic = Math.min(me.fastest_gravitonic, me.time_gravitonic);

    me.time_gravitonic = 0;

    if (!force) game_loop();
}



function power_black_holes_tickspeed() {
    return player.black_holes.add(1).log10().pow(2).div(3).add(1);
}
function power_black_holes_resource_limit() {
    return player.black_holes.pow(3).add(1).div(player.black_holes.pow(3).mult(1e-60).add(1));
}