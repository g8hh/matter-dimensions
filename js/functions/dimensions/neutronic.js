functions['neutronic_1_cost'] = (amt_bought) => {
    var base_cost = big(9).pow(amt_bought).max(big(1.1).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_2_cost'] = (amt_bought) => {
    var base_cost = big(10).pow(amt_bought+0.5).max(big(1.2).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_3_cost'] = (amt_bought) => {
    var base_cost = big(11).pow(amt_bought+1).max(big(1.3).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_4_cost'] = (amt_bought) => {
    var base_cost = big(12).pow(amt_bought+1.5).max(big(1.4).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_5_cost'] = (amt_bought) => {
    var base_cost = big(13).pow(amt_bought+2).max(big(1.5).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_6_cost'] = (amt_bought) => {
    var base_cost = big(14).pow(amt_bought+2.5).max(big(1.6).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_7_cost'] = (amt_bought) => {
    var base_cost = big(15).pow(amt_bought+3).max(big(1.7).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_8_cost'] = (amt_bought) => {
    var base_cost = big(16).pow(amt_bought+3.5).max(big(1.8).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_9_cost'] = (amt_bought) => {
    var base_cost = big(17).pow(amt_bought+4).max(big(1.9).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_10_cost'] = (amt_bought) => {
    var base_cost = big(18).pow(amt_bought+4.5).max(big(2.0).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_11_cost'] = (amt_bought) => {
    var base_cost = big(19).pow(amt_bought+5).max(big(2.1).pow(big(amt_bought).pow(2)));
    return base_cost;
};
functions['neutronic_12_cost'] = (amt_bought) => {
    var base_cost = big(20).pow(amt_bought+5.5).max(big(2.2).pow(big(amt_bought).pow(2)));
    return base_cost;
};


functions['neutronic_1_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // d112: Inflation boosts 1st-4th Neutronic Dimensions
    if (player.upgrades['d112'].is_active()) base_pow = base_pow.mult(player.upgrades['d112'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_1'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_2_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // d112: Inflation boosts 1st-4th Neutronic Dimensions
    if (player.upgrades['d112'].is_active()) base_pow = base_pow.mult(player.upgrades['d112'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_2'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_3_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // d112: Inflation boosts 1st-4th Neutronic Dimensions
    if (player.upgrades['d112'].is_active()) base_pow = base_pow.mult(player.upgrades['d112'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_3'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    // Vacuumic Challenge 3: 3rd dimensions do not produce anything
    if (player.challenges['v3'].inC()) base_pow = big(0);

    return base_pow;
};
functions['neutronic_4_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // d112: Inflation boosts 1st-4th Neutronic Dimensions
    if (player.upgrades['d112'].is_active()) base_pow = base_pow.mult(player.upgrades['d112'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_4'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_5_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_5'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_6_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_6'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_7_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_7'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_8_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_8'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_9_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_9'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_10_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_10'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_11_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_11'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['neutronic_12_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);

    // Neutronic Challenge 8 reward: increase multiplier per Neutronic dimension
    base_exp = player.challenges['n8'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v164: boost to all Neutronic Dimensions
    if (player.upgrades['v164'].is_active()) base_pow = base_pow.mult(player.upgrades['v164'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_12'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};


functions['neutronic_1_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    return true;
}
functions['neutronic_2_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 2) return false;

    if (player.dimensions['neutronic_1'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_3_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 3) return false;

    if (player.dimensions['neutronic_2'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_4_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 4) return false;

    if (player.dimensions['neutronic_3'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_5_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 5) return false;

    if (player.dimensions['neutronic_4'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_6_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 6) return false;

    if (player.dimensions['neutronic_5'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_7_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 7) return false;

    if (player.dimensions['neutronic_6'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_8_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 8) return false;

    if (player.dimensions['neutronic_7'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_9_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 9) return false;

    if (player.dimensions['neutronic_8'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_10_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 10) return false;

    if (player.dimensions['neutronic_9'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_11_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 11) return false;

    if (player.dimensions['neutronic_10'].amt_bought > 0) return true;
    return false;
}
functions['neutronic_12_unlock'] = () => {
    // v142: unlock Neutronic dimensions
    if (!player.upgrades['v142'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 12) return false;

    if (player.dimensions['neutronic_11'].amt_bought > 0) return true;
    return false;
}