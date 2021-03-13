function prestige_earn_shards() {
    if (!can_dimensional()) return big(0);

    let base_income = big(0);

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("matter_") && player.dimensions[key].level >= 3) {
            let income_per_dim = big(0.1);
            // d52: higher level dimensions give more shards
            income_per_dim = income_per_dim.mult(player.upgrades['d52'].get_effect().pow(player.dimensions[key].level - 3));

            base_income = base_income.add(big(player.dimensions[key].amt_bought).mult(income_per_dim));
        }
    }

    // achievement 92: double shards
    if (player.achievements['92'].complete) base_income = base_income.mult(2);
    // d103: gain more Shards
    if (me.upgrades['d103'].is_active()) base_income = base_income.mult(me.upgrades['d103'].get_effect());
    // d114: gain more Shards
    if (me.upgrades['d114'].is_active()) base_income = base_income.mult(me.upgrades['d114'].get_effect());
    // a06_2: gain more Shards
    if (me.milestones['a06_2'].is_active()) base_income = base_income.mult(me.milestones['a06_2'].get_effect());

    // achievement 61: +1 base shard
    if (player.achievements['61'].complete) base_income = base_income.add(1);

    // achievement 111: +111% of Shards on reset
    if (player.achievements['111'].complete) base_income = base_income.mult(2.11);

    return base_income.rounddown().max(1);
}
function can_dimensional() {
    return player.dimensions['matter_4'].amt_bought > 9.5;
}
function dimensional_hint() {
    return big(10);
}



function reset_dimensional(force=false, higher_reset=false, autobuyer_induced=false) {
    if (!force && !can_dimensional()) return;
    if (!force && !autobuyer_induced && me.settings['prestige_confirmation_dimensional']) {
        let result = confirm("Are you sure you want to perform a Dimensional reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    var earned_shards = prestige_earn_shards();
    if (!force) me.achievements['61'].award();
    if (!force && !earned_shards.lt(11111)) me.achievements['111'].award();
    if (!force && me.time_dimensional - me.time_passed < 1e-9) me.achievements['106'].award();

    // Challenge 4: all resources are capped
    me.shards = me.shards.add(earned_shards).round().min(me.challenge_strength_4);

    me.temperature_energy = big(0);

    me.infrared_waves = big(0);
    me.red_waves = big(0);
    me.green_waves = big(0);
    me.blue_waves = big(0);
    me.ultraviolet_waves = big(0);
    me.xray_waves = big(0);

    me.manifolds = big(0);

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("vacuumic_")) {
            me.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("dimensional_")) {
            me.dimensions[key].amt = new BigNumber(me.dimensions[key].amt_bought);
        }
    }

    for (let key of Object.keys(me.upgrades)) {
        // achievement 88: keep all automation upgrades
        if (me.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
        if (key.includes("v")) {
            me.upgrades[key].reset();
        }
    }

    // Automation shop reset
    if (!me.upgrades['AUTO2_3'].is_active()) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("AUTO2")) {
                me.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(me.challenges)) {
        if (key.includes("v")) {
            if (me.challenges[key].in_challenge) me.challenges[key].exit(false);
        }
    }

    cap_resources();
    reset_vacuumic(true, true);

    if (!force) me.dimensional_resets += 1;

    me.vacuum_energy = big(0);
    // d11: start with Vacuum Energy
    if (me.upgrades['d11'].is_active()) me.vacuum_energy = me.upgrades["d11"].get_effect();
    me.space_theorems = big(0);

    if (!force) me.fastest_dimensional = Math.min(me.fastest_dimensional, me.time_dimensional);

    me.time_dimensional = 0;

    if (!force) game_loop();
}

function power_manifolds() {
    // a06_1: unlock Dimensional dimensions
    if (!me.milestones['a06_1'].is_active()) return big(1);
    return player.manifolds.add(1).log(2).add(1).log(2).div(3).add(1);
}
