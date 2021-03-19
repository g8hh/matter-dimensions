function prestige_earn_genes() {
    let base_income = player.atoms.add(1).log(6.022e23);

    // achievement 135: neutron gain is raised to the power of 1.618
    if (player.achievements['135'].complete) base_income = base_income.pow(1.618);

    if (!base_income.lt(1)) {
        // b01: gain more Genes on Biological resets
        if (player.upgrades['b01'].is_active()) base_income = base_income.mult(player.upgrades['b01'].get_effect());
    }

    return base_income.rounddown().max(0);
}
function can_biological() {
    return prestige_earn_genes().gt(0);
}
function biological_hint() {
    return big(6.022e23);
}
function biological_hint_next(amt) {
    let resource_need = big(amt).add(1);

    return big(6.022e23).pow(resource_need);
}


function reset_biological(force=false, higher_reset=false, autobuyer_induced=false) {
    if (!force && !can_biological()) return;
    if (!force && !autobuyer_induced && player.settings['prestige_confirmation_biological']) {
        let result = confirm("Are you sure you want to perform a Biological reset?\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    let earned_genes = prestige_earn_genes();
    if (!force) player.achievements['121'].award();
    if (!force && earned_genes.gt(1)) player.achievements['135'].award();

    // Challenge 4: all resources are capped
    player.genes = player.genes.add(earned_genes).min(player.challenge_strength_4);

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("a")) {
            player.upgrades[key].reset();
        }
    }
    player.upgrades["COLLISION_POINT"].reset();
    player.collision_points = 0;
    player.collision_points_in_reaction = 0;
    player.collision_points_in_synthesis = 0;
    player.collision_points_in_generation = 0;

    // Automation shop reset
    //if (!player.upgrades['AUTO4_3'].is_active()) {
        for (let key of Object.keys(player.upgrades)) {
            if (key.includes("AUTO4")) {
                player.upgrades[key].reset();
            }
        }
    //}

    cap_resources();
    reset_atomic(true, true);

    if (!force) player.atomic_resets += 1;

    player.atoms = big(0);
    player.collision_knowledge = big(0);
    // evolution b01: start with Atoms and Collision Knowledge
    if (player.evolutions['b01'].is_active()) {
        player.atoms = player.evolutions['b01'].get_secondary_effect();
        player.collision_knowledge = player.evolutions['b01'].get_secondary_effect();
    }

    if (!force) player.fastest_atomic = Math.min(player.fastest_atomic, player.time_atomic);

    player.time_atomic = 0;

    if (!force) game_loop();
}



function perform_extinction() {
    let result = confirm("Are you sure you want to perform an Extinction?\n(This warning can be disabled in Settings)");
    if (!result) return;

    player.population_sacrificed = player.population_sacrificed.add(player.population.subtract(1));
    player.population = big(1);
}