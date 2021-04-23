functions['gravitonic_1_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 1).mult(amt_bought + 2).mult(0.5).max(big(1.15).pow(big(amt_bought).pow(1.05)));
    return base_cost;
};
functions['gravitonic_2_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 2).mult(amt_bought + 2).mult(1.0).max(big(1.15).pow(big(amt_bought).pow(1.1)));
    return base_cost;
};
functions['gravitonic_3_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 2).mult(amt_bought + 3).mult(1.5).max(big(1.15).pow(big(amt_bought).pow(1.15)));
    return base_cost;
};
functions['gravitonic_4_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 3).mult(amt_bought + 3).mult(2.0).max(big(1.15).pow(big(amt_bought).pow(1.2)));
    return base_cost;
};
functions['gravitonic_5_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 3).mult(amt_bought + 5).mult(2.5).max(big(1.15).pow(big(amt_bought).pow(1.25)));
    return base_cost;
};
functions['gravitonic_6_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 5).mult(amt_bought + 5).mult(3.0).max(big(1.15).pow(big(amt_bought).pow(1.3)));
    return base_cost;
};
functions['gravitonic_7_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 5).mult(amt_bought + 8).mult(3.5).max(big(1.15).pow(big(amt_bought).pow(1.35)));
    return base_cost;
};
functions['gravitonic_8_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 8).mult(amt_bought + 8).mult(4.0).max(big(1.15).pow(big(amt_bought).pow(1.4)));
    return base_cost;
};
functions['gravitonic_9_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 8).mult(amt_bought + 13).mult(4.5).max(big(1.15).pow(big(amt_bought).pow(1.45)));
    return base_cost;
};
functions['gravitonic_10_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 13).mult(amt_bought + 13).mult(5.0).max(big(1.15).pow(big(amt_bought).pow(1.5)));
    return base_cost;
};
functions['gravitonic_11_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 13).mult(amt_bought + 21).mult(5.5).max(big(1.15).pow(big(amt_bought).pow(1.55)));
    return base_cost;
};
functions['gravitonic_12_cost'] = (amt_bought) => {
    var base_cost = big(amt_bought + 21).mult(amt_bought + 21).mult(6.0).max(big(1.15).pow(big(amt_bought).pow(1.6)));
    return base_cost;
};

functions['gravitonic_1_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // d111: Inflation boosts 1st-3rd Gravitonic Dimensions
    if (player.upgrades['d111'].is_active()) base_pow = base_pow.mult(player.upgrades['d111'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_1'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_2_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // d111: Inflation boosts 1st-3rd Gravitonic Dimensions
    if (player.upgrades['d111'].is_active()) base_pow = base_pow.mult(player.upgrades['d111'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_2'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_3_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // d111: Inflation boosts 1st-3rd Gravitonic Dimensions
    if (player.upgrades['d111'].is_active()) base_pow = base_pow.mult(player.upgrades['d111'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_3'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    // Vacuumic Challenge 3: 3rd dimensions do not produce anything
    if (player.challenges['v3'].inC()) base_pow = big(0);

    return base_pow;
};
functions['gravitonic_4_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_4'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_5_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_5'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_6_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_6'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_7_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_7'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_8_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_8'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_9_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_9'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_10_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_10'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_11_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_11'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['gravitonic_12_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // v93: multiplier per Gravitonic dimension becomes x10
    base_exp = player.upgrades['v93'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // v163: boost to all Gravitonic dimensions
    if (player.upgrades['v163'].is_active()) base_pow = base_pow.mult(player.upgrades['v163'].get_effect());
    // v173: Gravitonic dimensions synergize
    if (player.upgrades['v173'].is_active()) base_pow = base_pow.mult(player.upgrades['v173'].get_effect());
    // n35: Boson power boosts Gravitonic dimensions
    if (player.upgrades['n35'].is_active()) base_pow = base_pow.mult(player.upgrades['n35'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_12'].amt_bought));
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};

functions['gravitonic_1_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    return true;
}
functions['gravitonic_2_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 2) return false;

    if (player.dimensions['gravitonic_1'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_3_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 3) return false;

    if (player.dimensions['gravitonic_2'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_4_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 4) return false;

    if (player.dimensions['gravitonic_3'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_5_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 5) return false;

    if (player.dimensions['gravitonic_4'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_6_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 6) return false;

    if (player.dimensions['gravitonic_5'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_7_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 7) return false;

    if (player.dimensions['gravitonic_6'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_8_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 8) return false;

    if (player.dimensions['gravitonic_7'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_9_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 9) return false;

    if (player.dimensions['gravitonic_8'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_10_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 10) return false;

    if (player.dimensions['gravitonic_9'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_11_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 11) return false;

    if (player.dimensions['gravitonic_10'].amt_bought > 0) return true;
    return false;
}
functions['gravitonic_12_unlock'] = () => {
    // n33: unlock Gravitonic dimensions
    if (!player.upgrades['n33'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 12) return false;

    if (player.dimensions['gravitonic_11'].amt_bought > 0) return true;
    return false;
}