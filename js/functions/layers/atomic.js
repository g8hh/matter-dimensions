function prestige_earn_atoms(player) {
    // Need to break Infinity before Atomic
    if (!player.upgrades['v211'].is_active()) return big(0);
    if (player.matter.lt(big(2).pow(1024))) return big(0);

    let base_income = player.matter.pow(1/1024).div(2);

    // a01_2: increase Atom gain
    if (me.milestones['a01_2'].is_active()) base_income = base_income.mult(me.milestones['a01_2'].get_effect());

    return base_income.rounddown().max(0);
}
function prestige_earn_collision_knowledge(player) {
    // Need to break Infinity before Atomic
    if (!player.upgrades['v211'].is_active()) return big(0);
    if (player.matter.lt(big(2).pow(1024))) return big(0);

    let base_income = player.matter.pow(1/1024).div(2);

    // a03_1: increase CK gain
    if (me.milestones['a03_1'].is_active()) base_income = base_income.mult(me.milestones['a03_1'].get_effect());

    return base_income.rounddown().max(0);
}
function can_atomic(player) {
    return prestige_earn_atoms(player).gt(0);
}
function atomic_hint(player) {
    return big(2).pow(1024);
}
function atomic_hint_next(player, amt) {
    let resource_need = big(amt).add(1);

    // a01_2: increase Atom gain
    if (me.milestones['a01_2'].is_active()) resource_need = resource_need.div(me.milestones['a01_2'].get_effect());

    return resource_need.mult(2).max(2).pow(1024);
}



function reset_atomic(force=false, higher_reset=false, autobuyer_induced=false) {
    if (!force && !can_atomic(me)) return;
    if (!force && !autobuyer_induced && me.settings['prestige_confirmation_atomic']) {
        let result = confirm("Are you sure you want to perform an Atomic reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    let earned_atoms = prestige_earn_atoms(me);
    let earned_collision_knowledge = prestige_earn_collision_knowledge(me);

    // Challenge 4: all resources are capped
    me.atoms = me.atoms.add(earned_atoms).round();
    me.collision_knowledge = me.collision_knowledge.add(earned_collision_knowledge).round();
    // a05_2: Atoms and Collision Knowledge are not affected by resource limit
    if (!me.milestones['a05_2'].is_active()) {
        me.atoms = me.atoms.min(me.challenge_strength_4);
        me.collision_knowledge = me.collision_knowledge.min(me.challenge_strength_4);
    }

    for (let key of Object.keys(me.dimensions)) {
        if (key.includes("dimensional_")) {
            me.dimensions[key].reset();
        }
    }

    for (let key of Object.keys(me.upgrades)) {
        // achievement 88: keep all automation upgrades
        if (me.achievements['88'].complete && (key == "d72")) continue;
        if (key.includes("d")) {
            me.upgrades[key].reset();
        }
    }

    // Automation shop reset
    if (!me.upgrades['AUTO3_3'].is_active()) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("AUTO3")) {
                me.upgrades[key].reset();
            }
        }
    }

    cap_resources(me);
    reset_dimensional(true, true);

    if (!force) me.atomic_resets += 1;

    me.shards = big(0);
    // a01_1: start with Shards
    if (me.milestones['a01_1'].is_active()) me.shards = me.milestones['a01_1'].get_effect();

    if (!force) me.fastest_atomic = Math.min(me.fastest_atomic, me.time_atomic);

    me.time_atomic = 0;

    if (!force) game_loop();
}