function prestige_earn_gravitons_base() {
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
    // a13: gain more gravitons
    base_gravitons = base_gravitons.mult(player.upgrades['a13'].get_effect());

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
    // a13_1: graviton gain is raised to a power
    if (player.milestones['a13_1'].is_active()) base_gravitons = base_gravitons.pow(player.milestones['a13_1'].get_effect());

    // Vacuumic Challenge 4: graviton gain is divided by 4
    if (player.challenges['v4'].inC()) base_gravitons = base_gravitons.mult(0.25);

    return base_gravitons.rounddown().max(0);
}

function prestige_earn_gravitons() {
    return prestige_earn_gravitons_base().subtract(player.gravitons).round().max(0);
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
    // a13_1: graviton gain is raised to a power
    if (player.milestones['a13_1'].is_active()) need_gravitons = need_gravitons.pow(big(1).div(player.milestones['a13_1'].get_effect()));

    // n31: free gravitons upon reset
    if (player.upgrades['n31'].is_active()) need_gravitons = need_gravitons.subtract(player.upgrades['n31'].get_effect());
    // v83: free gravitons upon reset
    if (player.upgrades['v83'].is_active()) need_gravitons = need_gravitons.subtract(player.upgrades['v83'].get_effect());
    // d61: free gravitons upon reset
    need_gravitons = need_gravitons.subtract(player.upgrades['d61'].get_effect());
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
    // a13: gain more gravitons
    need_gravitons = need_gravitons.div(player.upgrades['a13'].get_effect());

    var base_req = base.pow(need_gravitons);
    // g22: light reduces the amount of required matter
    if (player.upgrades['g22'].is_active()) base_req = base_req.div(player.upgrades['g22'].get_effect());

    return base_req.max(1);
}



function reset_gravitonic(force=false, higher_reset=false, autobuyer_induced=false, count_as_reset_num=1) {
    if (!force && !can_gravitonic()) return;
    if (!force && !autobuyer_induced && player.settings['prestige_confirmation_gravitonic']) {
        let result = confirm("Are you sure you want to perform a Gravitonic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_gravitons = prestige_earn_gravitons();
    if (!force && player.time_gravitonic - player.time_passed < 1e-9) player.achievements['36'].award();
    if (!force && player.time_gravitonic < 300) player.achievements['37'].award();
    if (!force && !earned_gravitons.lt(5)) player.achievements['34'].award();
    if (!force && earned_gravitons.gt(10)) player.achievements['47'].award();
    if (!force && earned_gravitons.gt(10000)) player.achievements['116'].award();
    if (!force && earned_gravitons.gt(1e6)) player.achievements['156'].award();

    // Challenge 4: all resources are capped
    player.gravitons = player.gravitons.add(earned_gravitons).round().min(player.challenge_strength_4);

    player.black_holes = new BigNumber(0);
    
    if (!force) player.max_gravitons = player.max_gravitons.max(player.gravitons);
    if (!force) player.max_gravitons_in_nc = player.max_gravitons_in_nc.max(player.gravitons);

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("photonic_")) {
            player.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("gravitonic_")) {
            player.dimensions[key].amt = new BigNumber(player.dimensions[key].amt_bought);
        }
    }

    // Gravitonic Challenge 6: Gravitonic resets all Gravitonic upgrades
    // Gravitonic Meta-Challenge reward: Gravitonic upgrades are never reset
    if (player.challenges['g6'].inC() && !player.challenges['g0'].completed) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("g")) {
                // achievement 55: Gravitonic upgrades that provide automation are never reset
                // achievement 88: keep all automation upgrades
                if ((player.achievements['55'].complete || player.achievements['88'].complete) && (key == "g41" || key == "g42")) continue;
                player.upgrades[key].reset();
            }
        }
    }

    // n05: photonic upgrades are not reset
    // Photonic Meta-Challenge reward: photonic upgrades are never reset
    if (!player.challenges['p0'].completed && (higher_reset || !player.upgrades['n05'].is_active())) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("p")) {
                player.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(player.challenges)) {
        if (key.includes("p")) {
            if (player.challenges[key].in_challenge) player.challenges[key].exit(false);
        }
    }

    player.proton_power = big(0);
    player.electron_power = big(0);
    player.boson_power = big(0);

    // achievement 57: earn gravitonic resets equal to gravitons
    if (!force && player.achievements['57'].complete) count_as_reset_num *= earned_gravitons.min(1e10).toInt();

    let reset_multiplier = 1;
    // evolution b03: multiply resets below Biological
    if (player.evolutions['b03'].is_active()) reset_multiplier *= player.evolutions['b03'].get_effect().toInt();

    reset_photonic(true, true, false, reset_multiplier * count_as_reset_num);

    // achievement 57: earn gravitonic resets equal to gravitons
    if (!force || higher_reset) player.gravitonic_resets += count_as_reset_num;

    player.photons = big(0);
    // g01: start with Photons
    // Photonic Challenge 8: you cannot gain Photons
    if (!player.challenges['p8'].inC() && player.upgrades['g01'].is_active()) player.photons = player.upgrades["g01"].get_effect();

    if (!force) player.fastest_gravitonic = Math.min(player.fastest_gravitonic, player.time_gravitonic);

    player.time_gravitonic = 0;

    if (!force) game_loop(false);
}



function power_black_holes_tickspeed() {
    return player.black_holes.add(1).log10().pow(2).div(3).add(1);
}
function power_black_holes_resource_limit() {
    return player.black_holes.pow(3).add(1).div(player.black_holes.pow(3).mult(1e-60).add(1));
}