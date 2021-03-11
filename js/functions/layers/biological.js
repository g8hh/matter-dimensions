function prestige_earn_genes(player) {
    let base_income = player.atoms.add(1).log(6.022e23);

    return base_income.rounddown().max(0);
}
function can_biological(player) {
    return prestige_earn_genes(player).gt(0);
}
function biological_hint(player) {
    return big(6.022e23);
}
function biological_hint_next(player, amt) {
    let resource_need = big(amt).add(1);

    return big(6.022e23).pow(resource_need);
}


function reset_biological(force=false, higher_reset=false, autobuyer_induced=false) {
    if (!force && !can_biological(me)) return;
    if (!force && !autobuyer_induced && me.settings['prestige_confirmation_biological']) {
        let result = confirm("Are you sure you want to perform a Biological reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    let earned_genes = prestige_earn_genes(me);
    if (!force) me.achievements['121'].award();

    // Challenge 4: all resources are capped
    me.genes = me.genes.add(earned_genes).min(me.challenge_strength_4);

    for (let key of Object.keys(me.upgrades)) {
        if (key.includes("a")) {
            me.upgrades[key].reset();
        }
    }
    me.upgrades["COLLISION_POINT"].reset();
    me.collision_points = 0;
    me.collision_points_in_reaction = 0;
    me.collision_points_in_synthesis = 0;
    me.collision_points_in_generation = 0;

    // Automation shop reset
    //if (!me.upgrades['AUTO4_3'].is_active()) {
        for (let key of Object.keys(me.upgrades)) {
            if (key.includes("AUTO4")) {
                me.upgrades[key].reset();
            }
        }
    //}

    reset_atomic(true, true);

    if (!force) me.atomic_resets += 1;

    me.atoms = big(0);
    me.collision_knowledge = big(0);
    // a01_1: start with Shards
    if (me.milestones['a01_1'].is_active()) me.shards = me.milestones['a01_1'].get_effect();

    if (!force) me.fastest_atomic = Math.min(me.fastest_atomic, me.time_atomic);

    me.time_atomic = 0;

    if (!force) game_loop();
}