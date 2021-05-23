function prestige_earn_shards() {
    if (!can_dimensional()) return big(0);

    let base_income = big(0);

    for (let key of Object.keys(player.dimensions)) {
        let lowest_dim = 3;
        // challenge d3: 3rd Dims also count
        if (!player.challenges['d0'].inC() && (player.challenges['d3'].inC() || player.challenges['d3'].completed)) lowest_dim = 2;

        // d123: all dimensions count for Shard gain, higher ones double
        if ((key.includes("matter_") || player.upgrades['d123'].is_active()) && player.dimensions[key].level >= lowest_dim) {
            // modify when adding new dimensions
            let reset_level = 0;
            if (key.includes("photonic_")) reset_level = 1;
            if (key.includes("gravitonic_")) reset_level = 2;
            if (key.includes("neutronic_")) reset_level = 3;
            if (key.includes("vacuumic_")) reset_level = 4;
            if (key.includes("dimensional_")) reset_level = 5;

            let income_per_dim = big(0.1).mult(big(2).pow(reset_level));
            // d52: higher level dimensions give more shards
            income_per_dim = income_per_dim.mult(player.upgrades['d52'].get_effect().pow(Math.max(0, player.dimensions[key].level - lowest_dim)));

            base_income = base_income.add(big(player.dimensions[key].amt_bought).mult(income_per_dim));
        }
    }

    // achievement 92: double shards
    if (player.achievements['92'].complete) base_income = base_income.mult(2);
    // d103: gain more Shards
    if (player.upgrades['d103'].is_active()) base_income = base_income.mult(player.upgrades['d103'].get_effect());
    // d114: gain more Shards
    if (player.upgrades['d114'].is_active()) base_income = base_income.mult(player.upgrades['d114'].get_effect());
    // d123: gain more Shards
    if (player.upgrades['d123'].is_active()) base_income = base_income.mult(player.upgrades['d123'].get_effect());
    // a06_2: gain more Shards
    if (player.milestones['a06_2'].is_active()) base_income = base_income.mult(player.milestones['a06_2'].get_effect());
    // a09_1: gain more Shards
    if (player.milestones['a09_1'].is_active()) base_income = base_income.mult(player.milestones['a09_1'].get_effect());

    // achievement 61: +1 base shard
    if (player.achievements['61'].complete) base_income = base_income.add(1);

    // achievement 111: +111% of Shards on reset
    if (player.achievements['111'].complete) base_income = base_income.mult(2.11);
    // evolution b08: gain more Shards
    if (player.evolutions['b08'].is_active()) base_income = base_income.mult(player.evolutions['b08'].get_effect());
    // challenge d1: gain 10x more Shards
    if (!player.challenges['d0'].inC() && (player.challenges['d1'].inC() || player.challenges['d1'].completed)) base_income = base_income.mult(10);
    // challenge d2: gain more Shards
    if (!player.challenges['d0'].inC() && (player.challenges['d2'].inC() || player.challenges['d2'].completed)) base_income = base_income.mult(player.challenges['d2'].get_effect());
    // Temperature Milestone 7: gain more Shards
    if (player.milestones['temperature_7'].is_active()) base_income = base_income.mult(player.milestones['temperature_7'].get_effect());

    return base_income.rounddown().max(1);
}
function can_dimensional() {
    return player.dimensions['matter_4'].amt_bought > 9.5;
}
function dimensional_hint() {
    return big(10);
}



function reset_dimensional(force=false, higher_reset=false, autobuyer_induced=false, count_as_reset_num=1) {
    if (!force && !can_dimensional()) return;
    if (!force && !autobuyer_induced && player.settings['prestige_confirmation_dimensional']) {
        let result = confirm("Are you sure you want to perform a Dimensional reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_shards = prestige_earn_shards();
    if (!force) player.achievements['61'].award();
    if (!force && !earned_shards.lt(11111)) player.achievements['111'].award();
    if (!force && player.time_dimensional - player.time_passed < 1e-9) player.achievements['106'].award();

    // Challenge 4: all resources are capped
    player.shards = player.shards.add(earned_shards).round();
    // challenge d4: Shards are not affected by resource limit
    if (!(!player.challenges['d0'].inC() && (player.challenges['d4'].inC() || player.challenges['d4'].completed))) {
        player.shards = player.shards.min(player.challenge_strength_4);
    }

    player.temperature_energy = big(0);

    let wave_multiplier = 0;
    // a07_1: retain 1% of Waves on Dimensional
    if (!higher_reset && player.milestones['a07_1'].is_active()) wave_multiplier = 0.01;

    player.infrared_waves = player.infrared_waves.mult(wave_multiplier);
    player.red_waves = player.red_waves.mult(wave_multiplier);
    player.green_waves = player.green_waves.mult(wave_multiplier);
    player.blue_waves = player.blue_waves.mult(wave_multiplier);
    player.ultraviolet_waves = player.ultraviolet_waves.mult(wave_multiplier);
    player.xray_waves = player.xray_waves.mult(wave_multiplier);

    player.manifolds = big(0);

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("vacuumic_")) {
            player.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("dimensional_")) {
            player.dimensions[key].amt = new BigNumber(player.dimensions[key].amt_bought);
        }
    }

    for (let key of Object.keys(player.upgrades)) {
        // achievement 88: keep all automation upgrades
        if (player.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
        // a07_3: keep ST from VE on Dimensional
        if (player.milestones['a07_3'].is_active() && key == "v01") continue;
        if (key.includes("v")) {
            player.upgrades[key].reset();
        }
    }

    // Automation shop reset
    if (!player.upgrades['AUTO2_3'].is_active()) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("AUTO2")) {
                player.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(player.challenges)) {
        if (key.includes("v")) {
            if (player.challenges[key].in_challenge) player.challenges[key].exit(false);
        }
    }

    let reset_multiplier = 1;
    // evolution b03: multiply resets below Biological
    if (player.evolutions['b03'].is_active()) reset_multiplier *= player.evolutions['b03'].get_effect().toInt();

    cap_resources();
    reset_vacuumic(true, true, false, reset_multiplier * count_as_reset_num);

    if (!force || higher_reset) player.dimensional_resets += count_as_reset_num;

    player.vacuum_energy = big(0);
    // d11: start with Vacuum Energy
    if (player.upgrades['d11'].is_active()) player.vacuum_energy = player.upgrades["d11"].get_effect();

    player.space_theorems = big(0);
    // a07_3: keep ST from VE on Dimensional
    if (player.milestones['a07_3'].is_active()) player.space_theorems = big(player.upgrades['v01'].amt);

    if (!force) player.fastest_dimensional = Math.min(player.fastest_dimensional, player.time_dimensional);

    player.time_dimensional = 0;

    if (!force) game_loop(false);
}

function power_manifolds() {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return big(1);
    return player.manifolds.add(1).log(2).add(1).log(2).div(Math.E).add(1);
}


function max_dimensional_shifts() {
    let base = 4;
    // a05_4: can perform one more DimShift
    if (player.milestones['a05_4'].is_active()) base += 1;
    // "Projection Analysis" experiment: can perform less DimShifts
    if (player.evolutions['b12'].is_active()) base -= player.experiments['projection_analysis'].get_nerf().toInt();
    
    return Math.round(base);
}