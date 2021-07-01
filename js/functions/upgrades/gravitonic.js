functions["upg_g01_cost"] = (amt) => {
    let base_cost = big(1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g10_cost"] = (amt) => {
    let base_cost = big(1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g11_cost"] = (amt) => {
    let base_cost = big(2).pow(0.5);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g12_cost"] = (amt) => {
    let base_amt = amt;
    // Gravitonic Challenge 6 reward: cost of repeatable Gravitonic upgrades scales 10% slower
    if (player.challenges['g6'].completed) base_amt = base_amt * 0.9;

    let base_cost = big(1.4).pow(base_amt + 1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g13_cost"] = (amt) => {
    let base_amt = amt;
    // Gravitonic Challenge 6 reward: cost of repeatable Gravitonic upgrades scales 10% slower
    if (player.challenges['g6'].completed) base_amt = base_amt * 0.9;

    let base_cost = big(1.5).pow(base_amt + 1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g14_cost"] = (amt) => {
    let base_amt = amt;
    // Gravitonic Challenge 6 reward: cost of repeatable Gravitonic upgrades scales 10% slower
    if (player.challenges['g6'].completed) base_amt = base_amt * 0.9;

    let base_cost = big(1.6).pow(base_amt + 1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g20_cost"] = (amt) => {
    let base_cost = big(1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g21_cost"] = (amt) => {
    let base_cost = big(1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g22_cost"] = (amt) => {
    let base_cost = big(2);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g23_cost"] = (amt) => {
    let base_cost = big(2.5);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g24_cost"] = (amt) => {
    let base_cost = big(3);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g30_cost"] = (amt) => {
    let base_cost = big(2).pow(0.5);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g31_cost"] = (amt) => {
    let base_cost = big(1.7);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g32_cost"] = (amt) => {
    let base_amt = amt;
    // Gravitonic Challenge 6 reward: cost of repeatable Gravitonic upgrades scales 10% slower
    if (player.challenges['g6'].completed) base_amt = base_amt * 0.9;

    let base_cost = big(2.3).pow(base_amt * base_amt + 1);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g33_cost"] = (amt) => {
    let base_cost = big(3.2);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g34_cost"] = (amt) => {
    let base_cost = big(8);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g40_cost"] = (amt) => {
    let base_cost = big(2).pow(0.5);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g41_cost"] = (amt) => {
    let base_cost = big(2).pow(0.5);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g42_cost"] = (amt) => {
    let base_cost = big(2).pow(0.5);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g43_cost"] = (amt) => {
    let base_cost = big(6);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}
functions["upg_g44_cost"] = (amt) => {
    let base_cost = big(10);

    // Neutronic Challenge 5: all Gravitonic upgrades cost 1 Graviton more.
    if (player.challenges['n5'].inC()) base_cost = base_cost.add(1);
    // Neutronic Challenge 5 reward: cheap Gravitonic upgrades are discounted to 1.
    if (base_cost.lt(player.challenges['n5'].get_effect())) base_cost = big(1);

    return base_cost;
}


functions["upg_g01_power"] = (amt) => {
    let base_reward = unlocked_layers();
    if (player.unlocked_photonic) base_reward -= 1;
    return big(2).pow(base_reward - 1);
}
functions["upg_g10_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(10);
}
functions["upg_g11_power"] = (amt) => {
    let base_gravitons = player.gravitons;
    // n06: gravitonic upgrades are based on max gravitons
    base_gravitons = player.upgrades['n06'].get_effect();
    // Gravitonic Challenge 8: gravitonic upgrades gain power in first 30 seconds
    if (player.challenges['g8'].inC() && player.time_passed < 30000) base_gravitons = base_gravitons.mult(player.time_passed / 30000);
    // Gravitonic Challenge 8 reward: gravitonic upgrades are 8% more powerful in the first 30 seconds
    if (player.challenges['g8'].completed && player.time_passed < 30000) base_gravitons = base_gravitons.mult(1.08);
    // Gravitonic Challenge 1 reward: gravitonic upgrades in top-left block are 10% more powerful
    if (player.challenges['g1'].completed) base_gravitons = base_gravitons.mult(1.1);

    if (amt == 0) return big(0.2);
    if (base_gravitons.lt(8)) return base_gravitons.mult(0.01).add(0.22);
    if (base_gravitons.lt(28)) return base_gravitons.subtract(8).mult(0.005).add(0.3);
    if (base_gravitons.lt(128)) return base_gravitons.subtract(28).mult(0.001).add(0.4);
    else return big(0.5).add(base_gravitons.subtract(128).div(base_gravitons.add(999)).mult(0.5));
}
functions["upg_g12_power"] = (amt) => {
    if (amt == 0) return player.upgrades['g10'].get_effect();

    let base_amt = amt;
    // Gravitonic Challenge 8: gravitonic upgrades gain power in first 30 seconds
    if (player.challenges['g8'].inC() && player.time_passed < 30000) base_amt = base_amt * (player.time_passed / 30000);
    // Gravitonic Challenge 8 reward: gravitonic upgrades are 8% more powerful in the first 30 seconds
    if (player.challenges['g8'].completed && player.time_passed < 30000) base_amt = base_amt * 1.08;
    // Gravitonic Challenge 1 reward: gravitonic upgrades in top-left block are 10% more powerful
    if (player.challenges['g1'].completed) base_amt = base_amt * 1.1;

    return big(4).pow(base_amt).mult(10);
}
functions["upg_g13_power"] = (amt) => {
    let base_amt = amt;
    // Gravitonic Challenge 8: gravitonic upgrades gain power in first 30 seconds
    if (player.challenges['g8'].inC() && player.time_passed < 30000) base_amt = base_amt * (player.time_passed / 30000);
    // Gravitonic Challenge 8 reward: gravitonic upgrades are 8% more powerful in the first 30 seconds
    if (player.challenges['g8'].completed && player.time_passed < 30000) base_amt = base_amt * 1.08;
    // Gravitonic Challenge 1 reward: gravitonic upgrades in top-left block are 10% more powerful
    if (player.challenges['g1'].completed) base_amt = base_amt * 1.1;

    return big(base_amt).pow(2).add(1);
}
functions["upg_g14_power"] = (amt) => {
    let base_amt = amt;
    // Gravitonic Challenge 8: gravitonic upgrades gain power in first 30 seconds
    if (player.challenges['g8'].inC() && player.time_passed < 30000) base_amt = base_amt * (player.time_passed / 30000);
    // Gravitonic Challenge 8 reward: gravitonic upgrades are 8% more powerful in the first 30 seconds
    if (player.challenges['g8'].completed && player.time_passed < 30000) base_amt = base_amt * 1.08;
    // Gravitonic Challenge 1 reward: gravitonic upgrades in top-left block are 10% more powerful
    if (player.challenges['g1'].completed) base_amt = base_amt * 1.1;

    return big(base_amt).pow(2).mult(2).add(1);
}
functions["upg_g20_power"] = (amt) => {
    return big(1);
}
functions["upg_g21_power"] = (amt) => {
    let base_gravitons = player.gravitons;
    // n06: gravitonic upgrades are based on max gravitons
    base_gravitons = player.upgrades['n06'].get_effect();
    // Gravitonic Challenge 8: gravitonic upgrades gain power in first 30 seconds
    if (player.challenges['g8'].inC() && player.time_passed < 30000) base_gravitons = base_gravitons.mult(player.time_passed / 30000);
    // Gravitonic Challenge 8 reward: gravitonic upgrades are 8% more powerful in the first 30 seconds
    if (player.challenges['g8'].completed && player.time_passed < 30000) base_gravitons = base_gravitons.mult(1.08);
    // Gravitonic Challenge 2 reward: g21 is twice more powerful
    if (player.challenges['g2'].completed) base_gravitons = base_gravitons.mult(2);

    // this upgrade is severely softcapped after 256 gravitons
    if (base_gravitons.gt(256)) base_gravitons = base_gravitons.div(256).log(10).add(1).mult(256);

    return big(2).mult(big(5).pow(base_gravitons.pow(0.75)));
}
functions["upg_g22_power"] = (amt) => {
    return player.light.add(1).pow(0.5);
}
functions["upg_g23_power"] = (amt) => {
    if (amt == 0) return big(1);
    return power_light_production();
}
functions["upg_g24_power"] = (amt) => {
    if (player.challenges['p4'].inC()) return big(1);
    return power_light_time();
}
functions["upg_g30_power"] = (amt) => {
    if (amt == 0) return big(10);
    else return big(9);
}
functions["upg_g31_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1.1);
}
functions["upg_g32_power"] = (amt) => {
    if (amt == 0) return player.upgrades['g30'].get_effect();
    return big(9).subtract(amt);
}
functions["upg_g33_power"] = (amt) => {
    return big(1);
}
functions["upg_g34_power"] = (amt) => {
    let base_gravitons = player.gravitons;
    // n06: gravitonic upgrades are based on max gravitons
    base_gravitons = player.upgrades['n06'].get_effect();
    // Gravitonic Challenge 8: gravitonic upgrades gain power in first 30 seconds
    if (player.challenges['g8'].inC() && player.time_passed < 30000) base_gravitons = base_gravitons.mult(player.time_passed / 30000);
    // Gravitonic Challenge 8 reward: gravitonic upgrades are 8% more powerful in the first 30 seconds
    if (player.challenges['g8'].completed && player.time_passed < 30000) base_gravitons = base_gravitons.mult(1.08);

    return base_gravitons.add(1).pow(0.5);
}
functions["upg_g40_power"] = (amt) => {
    return big(1);
}
functions["upg_g41_power"] = (amt) => {
    return big(1);
}
functions["upg_g42_power"] = (amt) => {
    return big(1);
}
functions["upg_g43_power"] = (amt) => {
    return big(1);
}
functions["upg_g44_power"] = (amt) => {
    return big(1);
}

functions["upg_g01_unlock"] = () => {
    return true;
}
functions["upg_g10_unlock"] = () => {
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g11_unlock"] = () => {
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0;
}
functions["upg_g12_unlock"] = () => {
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0;
}
functions["upg_g13_unlock"] = () => {
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0 && player.challenges['p1'].completed;
}
functions["upg_g14_unlock"] = () => {
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0 && player.challenges['p2'].completed;
}
functions["upg_g20_unlock"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g21_unlock"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0;
}
functions["upg_g22_unlock"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0;
}
functions["upg_g23_unlock"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0 && player.challenges['p3'].completed;
}
functions["upg_g24_unlock"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0 && player.challenges['p4'].completed;
}
functions["upg_g30_unlock"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g31_unlock"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0;
}
functions["upg_g32_unlock"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0;
}
functions["upg_g33_unlock"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0 && player.challenges['p5'].completed;
}
functions["upg_g34_unlock"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0 && player.challenges['p6'].completed;
}
functions["upg_g40_unlock"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g41_unlock"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g40'].amt > 0;
}
functions["upg_g42_unlock"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g40'].amt > 0;
}
functions["upg_g43_unlock"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g40'].amt > 0 && player.challenges['p7'].completed;
}
functions["upg_g44_unlock"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g40'].amt > 0 && player.challenges['p8'].completed;
}

functions["upg_g01_available"] = () => {
    return true;
}
functions["upg_g10_available"] = () => {
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g11_available"] = () => {
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0;
}
functions["upg_g12_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0;
}
functions["upg_g13_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0 && player.challenges['p1'].completed;
}
functions["upg_g14_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // Gravitonic Challenge 1: upper-left block is disabled
    if (player.challenges['g1'].inC()) return false;

    return player.upgrades['g10'].amt > 0 && player.challenges['p2'].completed;
}
functions["upg_g20_available"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g21_available"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0;
}
functions["upg_g22_available"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0;
}
functions["upg_g23_available"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0 && player.challenges['p3'].completed;
}
functions["upg_g24_available"] = () => {
    // Gravitonic Challenge 2: upper-right block is disabled
    if (player.challenges['g2'].inC()) return false;

    return player.upgrades['g20'].amt > 0 && player.challenges['p4'].completed;
}
functions["upg_g30_available"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g31_available"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0;
}
functions["upg_g32_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0;
}
functions["upg_g33_available"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0 && player.challenges['p5'].completed;
}
functions["upg_g34_available"] = () => {
    // Gravitonic Challenge 3: lower-left block is disabled
    if (player.challenges['g3'].inC()) return false;

    return player.upgrades['g30'].amt > 0 && player.challenges['p6'].completed;
}
functions["upg_g40_available"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g01'].amt > 0;
}
functions["upg_g41_available"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;
    // achievement 55: Gravitonic upgrades that provide automation are never reset
    if (player.upgrades['g41'].amt > 0 && player.achievements['55'].complete) return true;

    return player.upgrades['g40'].amt > 0;
}
functions["upg_g42_available"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;
    // achievement 55: Gravitonic upgrades that provide automation are never reset
    if (player.upgrades['g42'].amt > 0 && player.achievements['55'].complete) return true;

    return player.upgrades['g40'].amt > 0;
}
functions["upg_g43_available"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g40'].amt > 0 && player.challenges['p7'].completed;
}
functions["upg_g44_available"] = () => {
    // Gravitonic Challenge 4: lower-right block is disabled
    if (player.challenges['g4'].inC()) return false;

    return player.upgrades['g40'].amt > 0 && player.challenges['p8'].completed;
}

functions["upg_g01_buy"] = (amt) => {
    if (amt == 0) return;
    // Challenge 4: all resources are capped
    // Photonic Challenge 8: you cannot gain Photons
    if (!player.challenges['p8'].inC()) player.photons = player.photons.add(player.upgrades['g01'].get_effect()).round().min(player.challenge_strength_4);
}