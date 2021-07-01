functions['dimensional_1_cost'] = (amt_bought) => {
    return big(amt_bought).add(1).pow(big(2).max(big(amt_bought).pow(2).mult(0.01)));
};
functions['dimensional_2_cost'] = (amt_bought) => {
    return big(amt_bought).add(2).pow(big(3).max(big(amt_bought).pow(2).mult(0.015)));
};
functions['dimensional_3_cost'] = (amt_bought) => {
    return big(amt_bought).add(3).pow(big(4).max(big(amt_bought).pow(2).mult(0.025)));
};
functions['dimensional_4_cost'] = (amt_bought) => {
    return big(amt_bought).add(4).pow(big(5).max(big(amt_bought).pow(2).mult(0.04)));
};
functions['dimensional_5_cost'] = (amt_bought) => {
    return big(amt_bought).add(5).pow(big(6).max(big(amt_bought).pow(2).mult(0.06)));
};
functions['dimensional_6_cost'] = (amt_bought) => {
    return big(amt_bought).add(6).pow(big(7).max(big(amt_bought).pow(2).mult(0.085)));
};
functions['dimensional_7_cost'] = (amt_bought) => {
    return big(amt_bought).add(7).pow(big(8).max(big(amt_bought).pow(2).mult(0.125)));
};
functions['dimensional_8_cost'] = (amt_bought) => {
    return big(amt_bought).add(8).pow(big(9).max(big(amt_bought).pow(2).mult(0.18)));
};
functions['dimensional_9_cost'] = (amt_bought) => {
    return big(amt_bought).add(9).pow(big(10).max(big(amt_bought).pow(2).mult(0.25)));
};
functions['dimensional_10_cost'] = (amt_bought) => {
    return big(amt_bought).add(10).pow(big(11).max(big(amt_bought).pow(2).mult(0.45)));
};
functions['dimensional_11_cost'] = (amt_bought) => {
    return big(amt_bought).add(11).pow(big(12).max(big(amt_bought).pow(2).mult(0.75)));
};
functions['dimensional_12_cost'] = (amt_bought) => {
    return big(amt_bought).add(12).pow(big(13).max(big(amt_bought).pow(2).mult(1.4)));
};


functions['dimensional_1_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_2_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_3_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_4_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_5_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_6_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_7_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_8_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_9_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_10_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_11_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['dimensional_12_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // a06_3: multiplier per Dimensional Dimension is increased
    if (player.milestones['a06_3'].is_active()) base_exp = player.milestones['a06_3'].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // a06: boost to all Dimensional Dimensions
    base_pow = base_pow.mult(player.upgrades['a06'].get_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};


functions['dimensional_1_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    return true;
}
functions['dimensional_2_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 2) return false;

    if (player.dimensions['dimensional_1'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_3_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 3) return false;

    if (player.dimensions['dimensional_2'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_4_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 4) return false;

    if (player.dimensions['dimensional_3'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_5_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 5) return false;

    if (player.dimensions['dimensional_4'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_6_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 6) return false;

    if (player.dimensions['dimensional_5'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_7_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 7) return false;

    if (player.dimensions['dimensional_6'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_8_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 8) return false;

    if (player.dimensions['dimensional_7'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_9_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 9) return false;

    if (player.dimensions['dimensional_8'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_10_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 10) return false;

    if (player.dimensions['dimensional_9'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_11_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 11) return false;

    if (player.dimensions['dimensional_10'].amt_bought > 0) return true;
    return false;
}
functions['dimensional_12_unlock'] = () => {
    // a06_1: unlock Dimensional dimensions
    if (!player.milestones['a06_1'].is_active()) return false;

    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 12) return false;

    if (player.dimensions['dimensional_11'].amt_bought > 0) return true;
    return false;
}