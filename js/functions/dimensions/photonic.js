functions['photonic_1_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(2).pow(big(base_amt).mult(base_amt).mult(0.5).add(1));
    return base_cost;
};
functions['photonic_2_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());
    
    var base_cost = big(3).pow(big(base_amt).mult(base_amt).mult(1).add(1.5));
    return base_cost;
};
functions['photonic_3_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(5).pow(big(base_amt).mult(base_amt).mult(1.5).add(2));
    return base_cost;
};
functions['photonic_4_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(7).pow(big(base_amt).mult(base_amt).mult(2).add(2.5));
    return base_cost;
};
functions['photonic_5_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(11).pow(big(base_amt).mult(base_amt).mult(2.5).add(3));
    return base_cost;
};
functions['photonic_6_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(13).pow(big(base_amt).mult(base_amt).mult(3).add(3.5));
    return base_cost;
};
functions['photonic_7_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(17).pow(big(base_amt).mult(base_amt).mult(3.5).add(4));
    return base_cost;
};
functions['photonic_8_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(19).pow(big(base_amt).mult(base_amt).mult(4).add(4.5));
    return base_cost;
};
functions['photonic_9_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(23).pow(big(base_amt).mult(base_amt).mult(4.5).add(5));
    return base_cost;
};
functions['photonic_10_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(29).pow(big(base_amt).mult(base_amt).mult(5).add(5.5));
    return base_cost;
};
functions['photonic_11_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(31).pow(big(base_amt).mult(base_amt).mult(5.5).add(6));
    return base_cost;
};
functions['photonic_12_cost'] = (amt_bought) => {
    let base_amt = big(amt_bought);
    // p52: reduce Photonic Dimension cost scaling
    base_amt = base_amt.div(player.upgrades['p52'].get_effect());

    var base_cost = big(37).pow(big(base_amt).mult(base_amt).mult(6).add(6.5));
    return base_cost;
};

functions['photonic_1_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // Photonic Challenge 3: 1st Photonic Dimension is not affected by production boosts
    if (player.challenges['p3'].inC()) return base_pow.div(player.achievement_multiplier);

    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // v192: Stars boost 1st Photonic Dimension
    if (player.upgrades['v192'].is_active()) base_pow = base_pow.mult(player.upgrades['v192'].get_effect());
    // d101: Inflation boosts 1st and 2nd Photonic Dimensions
    if (player.upgrades['d101'].is_active()) base_pow = base_pow.mult(player.upgrades['d101'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_1'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_2_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // d101: Inflation boosts 1st and 2nd Photonic Dimensions
    if (player.upgrades['d101'].is_active()) base_pow = base_pow.mult(player.upgrades['d101'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_2'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_3_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // achievement 33: x2 power to 3rd Photonic Dimension
    if (player.achievements['33'].complete) base_pow = base_pow.mult(2);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_3'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    // Vacuumic Challenge 3: 3rd dimensions do not produce anything
    if (player.challenges['v3'].inC()) base_pow = big(0);

    return base_pow;
};
functions['photonic_4_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_4'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_5_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_5'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_6_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_6'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_7_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_7'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_8_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_8'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_9_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_9'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_10_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_10'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_11_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_11'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};
functions['photonic_12_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p31: increase multiplier per Photonic dimension
    base_exp = player.upgrades['p31'].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // g21: unspent Gravitons boost Photonic dimensions
    if (player.upgrades['g21'].is_active()) base_pow = base_pow.mult(player.upgrades['g21'].get_effect());
    // achievement 35: x10 power to photonic dimensions
    if (player.achievements['35'].complete) base_pow = base_pow.mult(10);
    // n21: bonus to all Photonic Dimensions
    if (player.upgrades['n21'].is_active()) base_pow = base_pow.mult(player.upgrades['n21'].get_effect());
    // v41: bonus to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v41'].get_effect());
    // v42: bonus to all Photonic Dimensions if matter is over 1e10
    base_pow = base_pow.mult(player.upgrades['v42'].get_effect());
    // p44: bonus to all Photonic Dimensions from photons
    if (player.upgrades['p44'].is_active()) base_pow = base_pow.mult(player.upgrades['p44'].get_effect());
    // v112: x3 power to all Photonic Dimensions
    base_pow = base_pow.mult(player.upgrades['v112'].get_effect());
    // v162: bonus to all Photonic Dimensions
    if (player.upgrades['v162'].is_active()) base_pow = base_pow.mult(player.upgrades['v162'].get_effect());
    // v172: bonus to all Photonic Dimensions
    if (player.upgrades['v172'].is_active()) base_pow = base_pow.mult(player.upgrades['v172'].get_effect());
    // v182: bonus to all Photonic Dimensions based on max matter
    if (player.upgrades['v182'].is_active()) base_pow = base_pow.mult(player.upgrades['v182'].get_effect());
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (player.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds().pow(player.dimensions['dimensional_12'].amt_bought));
    // evolution b03: bonus to all Photonic Dimensions
    if (player.evolutions['b03'].is_active()) base_pow = base_pow.mult(player.evolutions['b03'].get_secondary_effect());
    // evolution b10: boost all Dimensions based on unspent Genes
    if (player.evolutions['b10'].is_active()) base_pow = base_pow.mult(player.evolutions['b10'].get_secondary_effect());

    return base_pow;
};

functions['photonic_1_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;

    return true;
}
functions['photonic_2_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 2) return false;

    if (player.dimensions['photonic_1'].amt_bought > 0) return true;
    return false;
}
functions['photonic_3_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 3) return false;

    if (player.dimensions['photonic_2'].amt_bought > 0) return true;
    return false;
}
functions['photonic_4_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 4) return false;

    if (player.dimensions['photonic_3'].amt_bought > 0) return true;
    return false;
}
functions['photonic_5_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 5) return false;

    if (player.dimensions['photonic_4'].amt_bought > 0) return true;
    return false;
}
functions['photonic_6_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 6) return false;

    if (player.dimensions['photonic_5'].amt_bought > 0) return true;
    return false;
}
functions['photonic_7_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 7) return false;

    if (player.dimensions['photonic_6'].amt_bought > 0) return true;
    return false;
}
functions['photonic_8_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 8) return false;

    if (player.dimensions['photonic_7'].amt_bought > 0) return true;
    return false;
}
functions['photonic_9_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 9) return false;

    if (player.dimensions['photonic_8'].amt_bought > 0) return true;
    return false;
}
functions['photonic_10_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 10) return false;

    if (player.dimensions['photonic_9'].amt_bought > 0) return true;
    return false;
}
functions['photonic_11_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 11) return false;

    if (player.dimensions['photonic_10'].amt_bought > 0) return true;
    return false;
}
functions['photonic_12_unlock'] = () => {
    // g20: unlock Photonic dimensions
    if (!player.upgrades['g20'].is_active()) return false;
    // Challenge 6: there is limited amount of dimensions
    if (player.challenge_strength_6 < 12) return false;

    if (player.dimensions['photonic_11'].amt_bought > 0) return true;
    return false;
}