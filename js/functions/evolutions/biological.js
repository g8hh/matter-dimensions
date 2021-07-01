functions["evo_b01_cost"] = () => {
    return big(1);
}
functions["evo_b02_cost"] = () => {
    return big(1);
}
functions["evo_b03_cost"] = () => {
    return big(1);
}
functions["evo_b04_cost"] = () => {
    return big(1.3);
}
functions["evo_b05_cost"] = () => {
    return big(1.6);
}
functions["evo_b06_cost"] = () => {
    return big(1.9);
}
functions["evo_b07_cost"] = () => {
    return big(4);
}
functions["evo_b08_cost"] = () => {
    return big(6);
}
functions["evo_b09_cost"] = () => {
    return big(8);
}
functions["evo_b10_cost"] = () => {
    return big(16);
}
functions["evo_b11_cost"] = () => {
    return big(48);
}
functions["evo_b12_cost"] = () => {
    return big(720);
}

functions["evo_b01_power"] = (x) => {
    let base_pow = x.div(3).add(1).log(10).div(3).add(1).log(10).add(1);
    // a12_1: fertility upgrades are boosted
    if (player.milestones['a12_1'].is_active()) base_pow = base_pow.mult(player.milestones['a12_1'].get_effect().div(100).add(1));
    return base_pow;
}
functions["evo_b02_power"] = (x) => {
    return x.pow(3).max(1);
}
functions["evo_b03_power"] = (x) => {
    return x.mult(2).max(1).log(2).pow(0.5).rounddown();
}
functions["evo_b04_power"] = (x) => {
    return x.add(1).log(10).pow(0.5).rounddown();
}
functions["evo_b05_power"] = (x) => {
    let base_pow = x.add(1).log(10).add(1).log(10).mult(2);
    // a12_1: fertility upgrades are boosted
    if (player.milestones['a12_1'].is_active()) base_pow = base_pow.mult(player.milestones['a12_1'].get_effect().div(100).add(1));
    return base_pow;
}
functions["evo_b06_power"] = (x) => {
    return x.add(1).log(2).add(1);
}
functions["evo_b07_power"] = (x) => {
    return x.max(1).log(10).pow(0.5).div(x.max(1).log(10).pow(0.5).add(40)).mult(1024).div(308.25).add(1);
}
functions["evo_b08_power"] = (x) => {
    return x.add(1).log(10).add(1);
}
functions["evo_b09_power"] = (x) => {
    let base_pow = x.div(10).add(1).log(10).div(2).add(1).log(10).mult(3);
    // a12_1: fertility upgrades are boosted
    if (player.milestones['a12_1'].is_active()) base_pow = base_pow.mult(player.milestones['a12_1'].get_effect().div(100).add(1));
    return base_pow;
}
functions["evo_b10_power"] = (x) => {
    return x.add(1).log(10).pow(0.5).add(1);
}
functions["evo_b11_power"] = (x) => {
    return x.add(1).log(2).add(1).log(2).pow(2).add(1);
}
functions["evo_b12_power"] = (x) => {
    return x.add(1).log(10).add(1).log(10).add(1).pow(0.5);
}

functions["evo_b01_secondary"] = () => {
    let base_reward = unlocked_layers();
    if (player.unlocked_photonic) base_reward -= 1;
    if (player.unlocked_gravitonic) base_reward -= 1;
    if (player.unlocked_neutronic) base_reward -= 1;
    if (player.unlocked_vacuumic) base_reward -= 1;
    if (player.unlocked_dimensional) base_reward -= 1;
    if (player.unlocked_atomic) base_reward -= 1;
    return big(2).pow(base_reward - 1);
}
functions["evo_b02_secondary"] = () => {
    return big(10);
}
functions["evo_b03_secondary"] = () => {
    return big(player.photonic_resets).add(1);
}
functions["evo_b04_secondary"] = () => {
    return big(1);
}
functions["evo_b05_secondary"] = () => {
    return big(1);
}
functions["evo_b06_secondary"] = () => {
    return big(1);
}
functions["evo_b07_secondary"] = () => {
    return big(1);
}
functions["evo_b08_secondary"] = () => {
    return big(1);
}
functions["evo_b09_secondary"] = () => {
    return big(10).pow(player.matter.add(1).log(10).pow(0.75));
}
functions["evo_b10_secondary"] = () => {
    return player.genes.add(1);
}
functions["evo_b11_secondary"] = () => {
    return big(1);
}
functions["evo_b12_secondary"] = () => {
    return big(1);
}

functions["evo_b01_buy"] = (amt) => {
    player.atoms = player.atoms.add(player.evolutions['b01'].get_secondary_effect()).round();
    player.collision_knowledge = player.collision_knowledge.add(player.evolutions['b01'].get_secondary_effect()).round();
    // Challenge 4: all resources are capped
    // a05_2: Atoms and Collision Knowledge are not affected by resource limit
    if (!player.milestones['a05_2'].is_active()) {
        player.atoms = player.atoms.min(player.challenge_strength_4);
        player.collision_knowledge = player.collision_knowledge.min(player.challenge_strength_4);
    }
}