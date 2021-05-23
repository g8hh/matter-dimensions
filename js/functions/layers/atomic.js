function prestige_earn_atoms() {
    // Need to break Infinity before Atomic
    if (!player.upgrades['v211'].is_active()) return big(0);
    if (player.matter.lt(big(2).pow(1024))) return big(0);

    let base_income = player.matter.pow(1/1024).div(2);

    // evolution b07: raise Atom gain to a power
    if (player.evolutions['b07'].is_active()) base_income = base_income.pow(player.evolutions['b07'].get_effect());

    // a01_2: increase Atom gain
    if (player.milestones['a01_2'].is_active()) base_income = base_income.mult(player.milestones['a01_2'].get_effect());
    // achievement 121: double gain
    if (player.achievements['121'].complete) base_income = base_income.mult(2);

    return base_income.rounddown().max(0);
}
function prestige_earn_collision_knowledge() {
    // Need to break Infinity before Atomic
    if (!player.upgrades['v211'].is_active()) return big(0);
    if (player.matter.lt(big(2).pow(1024))) return big(0);

    let base_income = player.matter.pow(1/1024).div(2);

    // a03_1: increase CK gain
    if (player.milestones['a03_1'].is_active()) base_income = base_income.mult(player.milestones['a03_1'].get_effect());
    // achievement 121: double gain
    if (player.achievements['121'].complete) base_income = base_income.mult(2);

    // experiments boost CK gain
    if (player.evolutions['b12'].is_active()) base_income = base_income.pow(get_current_experiment_effect());

    return base_income.rounddown().max(0);
}
function can_atomic() {
    return prestige_earn_atoms().gt(0);
}
function atomic_hint() {
    return big(2).pow(1024);
}
function atomic_hint_next(amt) {
    let resource_need = big(amt).add(1);

    // a01_2: increase Atom gain
    if (player.milestones['a01_2'].is_active()) resource_need = resource_need.div(player.milestones['a01_2'].get_effect());
    // achievement 121: double gain
    if (player.achievements['121'].complete) resource_need = resource_need.div(2);

    // evolution b07: raise Atom gain to a power
    if (player.evolutions['b07'].is_active()) resource_need = resource_need.pow(big(1).div(player.evolutions['b07'].get_effect()));

    return resource_need.mult(2).max(2).pow(1024);
}



function reset_atomic(force=false, higher_reset=false, autobuyer_induced=false, count_as_reset_num=1) {
    if (!force && !can_atomic()) return;
    if (!force && !autobuyer_induced && player.settings['prestige_confirmation_atomic']) {
        let result = confirm("Are you sure you want to perform an Atomic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    let earned_atoms = prestige_earn_atoms();
    let earned_collision_knowledge = prestige_earn_collision_knowledge();

    // Challenge 4: all resources are capped
    player.atoms = player.atoms.add(earned_atoms).round();
    player.collision_knowledge = player.collision_knowledge.add(earned_collision_knowledge).round();
    // a05_2: Atoms and Collision Knowledge are not affected by resource limit
    if (!player.milestones['a05_2'].is_active()) {
        player.atoms = player.atoms.min(player.challenge_strength_4);
        player.collision_knowledge = player.collision_knowledge.min(player.challenge_strength_4);
    }

    // Exit Experiments automatically
    if ((player.settings['exit_experiments_on_atomic'] && !higher_reset) || (player.settings['exit_experiments_on_higher_reset'] && higher_reset)) {
        exit_experiments();
    }

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("dimensional_")) {
            player.dimensions[key].reset();
        }
    }

    // v01 still resets on Atomic
    player.upgrades['v01'].reset();

    for (let key of Object.keys(player.upgrades)) {
        // achievement 88: keep all automation upgrades
        if (player.achievements['88'].complete && (key == "d72")) continue;
        // challenge d6: Atomic does not reset Dimensional upgrades
        if (!player.challenges['d0'].inC() && (player.challenges['d6'].inC() || player.challenges['d6'].completed) && !higher_reset) continue;
        if (key.includes("d")) {
            player.upgrades[key].reset();
        }
    }

    // Automation shop reset
    if (!player.upgrades['AUTO3_3'].is_active()) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("AUTO3")) {
                player.upgrades[key].reset();
            }
        }
    }

    for (let key of Object.keys(player.challenges)) {
        if (key.includes("d")) {
            if (player.challenges[key].in_challenge) player.challenges[key].exit(false);
        }
    }

    let reset_multiplier = 1;
    // evolution b03: multiply resets below Biological
    if (player.evolutions['b03'].is_active()) reset_multiplier *= player.evolutions['b03'].get_effect().toInt();

    cap_resources();
    reset_dimensional(true, true, false, reset_multiplier * count_as_reset_num);

    player.atomic_resets_in_current_biological += 1;

    if (!force || higher_reset) player.atomic_resets += count_as_reset_num;

    player.got_shards_this_atomic = false;

    player.shards = big(0);
    // a01_1: start with Shards
    if (player.milestones['a01_1'].is_active()) {
        player.shards = player.milestones['a01_1'].get_effect();
        player.got_shards_this_atomic = true;
    }

    if (!force) player.fastest_atomic = Math.min(player.fastest_atomic, player.time_atomic);

    player.time_atomic = 0;

    if (!force) game_loop(false);
}