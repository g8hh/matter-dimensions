functions["start_n1"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};
functions["start_n2"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};
functions["start_n3"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};
functions["start_n4"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};
functions["start_n5"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};
functions["start_n6"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);

    player.dimensions["protons"].reset();
    player.dimensions["electrons"].reset();
    player.dimensions["bosons"].reset();

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("n")) {
            player.upgrades[key].reset();
        }
    }
};
functions["start_n7"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};
functions["start_n8"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};
functions["start_n0"] = () => {
    player.max_gravitons_in_nc = new BigNumber(0);
};

functions["goal_n1"] = () => {
    return !player.matter.lt(player.challenges['n1'].goal());
};
functions["goal_n2"] = () => {
    return !player.matter.lt(player.challenges['n2'].goal());
};
functions["goal_n3"] = () => {
    return !player.matter.lt(player.challenges['n3'].goal());
};
functions["goal_n4"] = () => {
    return !player.matter.lt(player.challenges['n4'].goal());
};
functions["goal_n5"] = () => {
    return !player.matter.lt(player.challenges['n5'].goal());
};
functions["goal_n6"] = () => {
    return !player.matter.lt(player.challenges['n6'].goal());
};
functions["goal_n7"] = () => {
    return !player.matter.lt(player.challenges['n7'].goal());
};
functions["goal_n8"] = () => {
    return !player.matter.lt(player.challenges['n8'].goal());
};
functions["goal_n0"] = () => {
    return !player.matter.lt(player.challenges['n0'].goal());
};

functions["end_n1"] = () => {
    return; // External effect
};
functions["end_n2"] = () => {
    return; // External effect
};
functions["end_n3"] = () => {
    return; // External effect
};
functions["end_n4"] = () => {
    return; // External effect
};
functions["end_n5"] = () => {
    return; // External effect
};
functions["end_n6"] = () => {
    return; // External effect
};
functions["end_n7"] = () => {
    return; // External effect
};
functions["end_n8"] = () => {
    return; // External effect
};
functions["end_n0"] = () => {
    return; // External effect
};

functions["goal_amt_n1"] = (c) => {
    return big(10).pow(big(4).pow(c-1).mult(100));
};
functions["goal_amt_n2"] = (c) => {
    return big(10).pow(big(6).pow(c-1).mult(100));
};
functions["goal_amt_n3"] = (c) => {
    return big(10).pow(big(3).pow(c-1).mult(100));
};
functions["goal_amt_n4"] = (c) => {
    return big(10).pow(big(9).pow(c-1).mult(100));
};
functions["goal_amt_n5"] = (c) => {
    return big(10).pow(big(8).pow(c-1).mult(100));
};
functions["goal_amt_n6"] = (c) => {
    return big(10).pow(big(5).pow(c-1).mult(100));
};
functions["goal_amt_n7"] = (c) => {
    return big(10).pow(big(2).pow(c-1).mult(100));
};
functions["goal_amt_n8"] = (c) => {
    return big(10).pow(big(7).pow(c-1).mult(100));
};
functions["goal_amt_n0"] = (c) => {
    let base_exp = big(1e10);
    // achievement 117: each NCx5 reduces exponent /10
    if (player.achievements['117'].complete) {
        for (let key of Object.keys(player.challenges)) {
            if (key.includes('n') && player.challenges[key].completions >= 5) base_exp = base_exp.div(10);
        }
    }

    return big(10).pow(base_exp);
};

functions["effect_n1"] = (c) => {
    return big(3).pow(c);
};
functions["effect_n2"] = (c) => {
    return big(1).add(big(c).mult(0.2));
};
functions["effect_n3"] = (c) => {
    return big(1).add(big(c).mult(0.1));
};
functions["effect_n4"] = (c) => {
    return big(1).subtract(big(c).mult(0.05));
};
functions["effect_n5"] = (c) => {
    return big(1).add(big(c).mult(0.42));
};
functions["effect_n6"] = (c) => {
    return big(2).pow(c);
};
functions["effect_n7"] = (c) => {
    return big(1).add(big(c).mult(0.13));
};
functions["effect_n8"] = (c) => {
    return big(2).add(big(c).mult(0.6));
};