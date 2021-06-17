functions['vacuumic_1_cost'] = (amt_bought) => {
    let base = big(1.2);

    return base.pow(big(2).pow(amt_bought));
};
functions['vacuumic_2_cost'] = (amt_bought) => {
    let base = big(1.35);

    return base.pow(big(2).pow(amt_bought + 1));
};
functions['vacuumic_3_cost'] = (amt_bought) => {
    let base = big(1.5);

    return base.pow(big(2).pow(amt_bought + 2));
};
functions['vacuumic_4_cost'] = (amt_bought) => {
    let base = big(1.65);

    return base.pow(big(2).pow(amt_bought + 3));
};
functions['vacuumic_5_cost'] = (amt_bought) => {
    let base = big(1.8);

    return base.pow(big(2).pow(amt_bought + 4));
};
functions['vacuumic_6_cost'] = (amt_bought) => {
    let base = big(1.95);

    return base.pow(big(2).pow(amt_bought + 5));
};
functions['vacuumic_7_cost'] = (amt_bought) => {
    let base = big(2.1);

    return base.pow(big(2).pow(amt_bought + 6));
};
functions['vacuumic_8_cost'] = (amt_bought) => {
    let base = big(2.25);

    return base.pow(big(2).pow(amt_bought + 7));
};
functions['vacuumic_9_cost'] = (amt_bought) => {
    let base = big(2.4);

    return base.pow(big(2).pow(amt_bought + 8));
};
functions['vacuumic_10_cost'] = (amt_bought) => {
    let base = big(2.55);

    return base.pow(big(2).pow(amt_bought + 9));
};
functions['vacuumic_11_cost'] = (amt_bought) => {
    let base = big(2.7);

    return base.pow(big(2).pow(amt_bought + 10));
};
functions['vacuumic_12_cost'] = (amt_bought) => {
    let base = big(2.85);

    return base.pow(big(2).pow(amt_bought + 11));
};


functions['vacuumic_1_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_1'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_2_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_2'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_3_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_3'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    // Vacuumic Challenge 3: 3rd dimensions do not produce anything
    if (player.challenges['v3'].inC()) base_pow = big(0);

    return base_pow;
};
functions['vacuumic_4_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_4'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_5_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_5'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_6_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_6'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_7_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_7'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_8_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_8'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_9_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_9'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_10_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_10'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_11_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_11'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['vacuumic_12_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // Temperature Milestone 4: multiplier per Vacuumic Dimension is increased
    if (player.milestones['temperature_4'].is_active()) base_exp = player.milestones['temperature_4'].get_effect();

    let base_pow = base_exp.pow(amt_bought);

    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_12'].amt_bought));
    // d121: Inflation boosts all Vacuumic Dimensions
    if (player.upgrades['d121'].is_active()) base_pow = base_pow.mult(player.upgrades['d121'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};


functions['vacuumic_1_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    return true;
}
functions['vacuumic_2_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 2) return false;

    if (player.dimensions['vacuumic_1'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_3_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 3) return false;

    if (player.dimensions['vacuumic_2'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_4_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 4) return false;

    if (player.dimensions['vacuumic_3'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_5_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 5) return false;

    if (player.dimensions['vacuumic_4'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_6_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 6) return false;

    if (player.dimensions['vacuumic_5'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_7_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 7) return false;

    if (player.dimensions['vacuumic_6'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_8_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 8) return false;

    if (player.dimensions['vacuumic_7'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_9_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 9) return false;

    if (player.dimensions['vacuumic_8'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_10_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 10) return false;

    if (player.dimensions['vacuumic_9'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_11_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 11) return false;

    if (player.dimensions['vacuumic_10'].amt_bought > 0) return true;
    return false;
}
functions['vacuumic_12_unlock'] = () => {
    // d71: unlock Vacuumic dimensions
    if (!player.upgrades['d71'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 12) return false;

    if (player.dimensions['vacuumic_11'].amt_bought > 0) return true;
    return false;
}