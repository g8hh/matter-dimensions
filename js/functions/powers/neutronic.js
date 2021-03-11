functions['protons_cost'] = (amt_bought) => {
    let base_bought = big(amt_bought);
    // v174: the cost of Neutronic particles scales 20% slower
    base_bought = base_bought.div(me.upgrades['v174'].get_effect());
    // a03_3: the cost of Neutronic particles scales slower
    if (me.milestones['a03_3'].is_active()) base_bought = base_bought.div(me.milestones['a03_3'].get_effect());

    var base_cost = big(1.4).pow(base_bought.add(1).pow(0.8).max(base_bought.add(1).pow(1.2).mult(0.12)));
    // v151: Neutronic particles are 15% cheaper
    base_cost = base_cost.div(me.upgrades['v151'].get_effect());

    return base_cost;
};
functions['electrons_cost'] = (amt_bought) => {
    let base_bought = big(amt_bought);
    // v174: the cost of Neutronic particles scales 20% slower
    base_bought = base_bought.div(me.upgrades['v174'].get_effect());
    // a03_3: the cost of Neutronic particles scales slower
    if (me.milestones['a03_3'].is_active()) base_bought = base_bought.div(me.milestones['a03_3'].get_effect());

    var base_cost = big(1.4).pow(base_bought.add(1).pow(0.8).max(base_bought.add(1).pow(1.2).mult(0.12)));
    // v151: Neutronic particles are 15% cheaper
    base_cost = base_cost.div(me.upgrades['v151'].get_effect());

    return base_cost;
};
functions['bosons_cost'] = (amt_bought) => {
    let base_bought = big(amt_bought);
    // v174: the cost of Neutronic particles scales 20% slower
    base_bought = base_bought.div(me.upgrades['v174'].get_effect());
    // a03_3: the cost of Neutronic particles scales slower
    if (me.milestones['a03_3'].is_active()) base_bought = base_bought.div(me.milestones['a03_3'].get_effect());

    var base_cost = big(1.4).pow(base_bought.add(1).pow(0.8).max(base_bought.add(1).pow(1.2).mult(0.12)));
    // v151: Neutronic particles are 15% cheaper
    base_cost = base_cost.div(me.upgrades['v151'].get_effect());

    return base_cost;
};

functions['protons_pow'] = (amt_bought, amt) => {
    var base_pow = new BigNumber();
    base_pow.copy(amt);

    // Neutronic Challenge 1: particles do not produce power
    if (me.challenges['n1'].inC()) return big(0);
    // Neutronic Challenge 1 reward: particles produce more power
    base_pow = base_pow.mult(me.challenges['n1'].get_effect());
    // v184: particles produce 10 times more power
    base_pow = base_pow.mult(me.upgrades['v184'].get_effect());
    // Temperature Milestone 3: particles produce more power
    if (me.milestones['temperature_3'].is_active()) base_pow = base_pow.mult(me.milestones['temperature_3'].get_effect());
    // n36: Boson Power boosts Proton Power gain
    if (me.upgrades['n36'].is_active()) base_pow = base_pow.mult(me.upgrades['n36'].get_effect());

    // Challenge 2: all production greater than X is raised to power of Y
    if (base_pow.gt(me.challenge_addinfo_2)) {
        base_pow = me.challenge_addinfo_2.mult(base_pow.div(me.challenge_addinfo_2).pow(me.challenge_strength_2));
    }
    // Challenge 5: all production is divided
    // n12: this modifier is not applied
    if (!me.upgrades['n12'].is_active()) base_pow = base_pow.div(me.challenge_strength_5);
    // Challenge 7: all production is divided
    base_pow = base_pow.div(me.challenge_strength_7);
    // Challenge 11: dilation hurts extremely high multipliers
    if (base_pow.gt(big(2).pow(1024))) {
        me.experienced_dilation = true;
        base_pow = big(big(2).pow(1024)).pow(base_pow.log(big(2).pow(1024)).pow(me.challenge_strength_11));
    }

    return base_pow;
};
functions['electrons_pow'] = (amt_bought, amt) => {
    var base_pow = new BigNumber();
    base_pow.copy(amt);

    // Neutronic Challenge 1: particles do not produce power
    if (me.challenges['n1'].inC()) return big(0);
    // Neutronic Challenge 1 reward: particles produce more power
    base_pow = base_pow.mult(me.challenges['n1'].get_effect());
    // v184: particles produce 10 times more power
    base_pow = base_pow.mult(me.upgrades['v184'].get_effect());
    // Temperature Milestone 3: particles produce more power
    if (me.milestones['temperature_3'].is_active()) base_pow = base_pow.mult(me.milestones['temperature_3'].get_effect());
    // n16: Proton Power boosts Electron Power gain
    if (me.upgrades['n16'].is_active()) base_pow = base_pow.mult(me.upgrades['n16'].get_effect());

    // Challenge 2: all production greater than X is raised to power of Y
    if (base_pow.gt(me.challenge_addinfo_2)) {
        base_pow = me.challenge_addinfo_2.mult(base_pow.div(me.challenge_addinfo_2).pow(me.challenge_strength_2));
    }
    // Challenge 5: all production is divided
    // n22: this modifier is not applied
    if (!me.upgrades['n22'].is_active()) base_pow = base_pow.div(me.challenge_strength_5);
    // Challenge 7: all production is divided
    base_pow = base_pow.div(me.challenge_strength_7);
    // Challenge 11: dilation hurts extremely high multipliers
    if (base_pow.gt(big(2).pow(1024))) {
        me.experienced_dilation = true;
        base_pow = big(big(2).pow(1024)).pow(base_pow.log(big(2).pow(1024)).pow(me.challenge_strength_11));
    }

    return base_pow;
};
functions['bosons_pow'] = (amt_bought, amt) => {
    var base_pow = new BigNumber();
    base_pow.copy(amt);

    // Neutronic Challenge 1: particles do not produce power
    if (me.challenges['n1'].inC()) return big(0);
    // Neutronic Challenge 1 reward: particles produce more power
    base_pow = base_pow.mult(me.challenges['n1'].get_effect());
    // v184: particles produce 10 times more power
    base_pow = base_pow.mult(me.upgrades['v184'].get_effect());
    // Temperature Milestone 3: particles produce more power
    if (me.milestones['temperature_3'].is_active()) base_pow = base_pow.mult(me.milestones['temperature_3'].get_effect());
    // n26: Electron Power boosts Boson Power gain
    if (me.upgrades['n26'].is_active()) base_pow = base_pow.mult(me.upgrades['n26'].get_effect());

    // Challenge 2: all production greater than X is raised to power of Y
    if (base_pow.gt(me.challenge_addinfo_2)) {
        base_pow = me.challenge_addinfo_2.mult(base_pow.div(me.challenge_addinfo_2).pow(me.challenge_strength_2));
    }
    // Challenge 5: all production is divided
    // n32: this modifier is not applied
    if (!me.upgrades['n32'].is_active()) base_pow = base_pow.div(me.challenge_strength_5);
    // Challenge 7: all production is divided
    base_pow = base_pow.div(me.challenge_strength_7);
    // Challenge 11: dilation hurts extremely high multipliers
    if (base_pow.gt(big(2).pow(1024))) {
        me.experienced_dilation = true;
        base_pow = big(big(2).pow(1024)).pow(base_pow.log(big(2).pow(1024)).pow(me.challenge_strength_11));
    }

    return base_pow;
};

functions['protons_unlock'] = () => {
    return me.upgrades['n04'].amt > 0;
}
functions['electrons_unlock'] = () => {
    return me.upgrades['n05'].amt > 0;
}
functions['bosons_unlock'] = () => {
    return me.upgrades['n06'].amt > 0;
}