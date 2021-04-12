functions["upg_p11_cost"] = (amt) => {
    let base_cost = big(2).pow(big(amt).mult(amt+1).div(2));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p12_cost"] = (amt) => {
    let base_cost = big(3).pow(big(amt).mult(amt+1).div(2));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p13_cost"] = (amt) => {
    let base_cost = big(1);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p14_cost"] = (amt) => {
    let base_cost = big(1);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p15_cost"] = (amt) => {
    let base_cost = big(1);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p21_cost"] = (amt) => {
    let base_pow = 0.75;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.25;

    var base_cost = big(13).pow(big(amt).mult(amt+3).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p22_cost"] = (amt) => {
    let base_pow = 0.75;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.25;

    var base_cost = big(17).pow(big(amt).mult(amt+3).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p23_cost"] = (amt) => {
    let base_pow = 0.75;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.25;

    let base_cost = big(19).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p24_cost"] = (amt) => {
    let base_pow = 0.75;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.25;

    let base_cost = big(23).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p25_cost"] = (amt) => {
    let base_pow = 0.75;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.25;

    let base_cost = big(29).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p31_cost"] = (amt) => {
    let base_pow = 1.5;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.5;

    var base_cost = big(31).pow(big(amt).mult(amt+5).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p32_cost"] = (amt) => {
    let base_pow = 1.5;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.5;

    var base_cost = big(37).pow(big(amt).mult(amt+5).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p33_cost"] = (amt) => {
    let base_pow = 1.5;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.5;

    let base_cost = big(41).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p34_cost"] = (amt) => {
    let base_pow = 1.5;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.5;

    let base_cost = big(43).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p35_cost"] = (amt) => {
    let base_pow = 1.5;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.5;

    let base_cost = big(47).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p41_cost"] = (amt) => {
    let base_pow = 3;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.75;

    var base_cost = big(53).pow(big(amt).mult(amt+7).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p42_cost"] = (amt) => {
    let base_pow = 3;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.75;

    var base_cost = big(59).pow(big(amt).mult(amt+7).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p43_cost"] = (amt) => {
    let base_pow = 3;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.75;

    let base_cost = big(61).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p44_cost"] = (amt) => {
    let base_pow = 3;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.75;

    let base_cost = big(67).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p45_cost"] = (amt) => {
    let base_pow = 3;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 0.75;

    let base_cost = big(71).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p51_cost"] = (amt) => {
    let base_pow = 9;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 1.25;

    var base_cost = big(73).pow(big(amt).mult(amt+9).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p52_cost"] = (amt) => {
    let base_pow = 9;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 1.25;

    var base_cost = big(79).pow(big(amt).mult(amt+9).div(2).add(base_pow));

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p53_cost"] = (amt) => {
    let base_pow = 9;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 1.25;

    let base_cost = big(83).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p54_cost"] = (amt) => {
    let base_pow = 9;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 1.25;

    let base_cost = big(89).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}
functions["upg_p55_cost"] = (amt) => {
    let base_pow = 9;
    // g33: photonic upgrades past the first row are cheaper
    if (player.upgrades['g33'].is_active()) base_pow -= 1.25;

    let base_cost = big(97).pow(base_pow);

    // Neutronic Challenge 4: the cost of all Photonic upgrades is squared
    if (player.challenges['n4'].inC()) base_cost = base_cost.pow(2);
    // Neutronic Challenge 4 reward: the cost of all Photonic upgrades is reduced
    base_cost = base_cost.pow(player.challenges['n4'].get_effect());

    return base_cost;
}


functions["upg_p11_power"] = (amt) => {
    if (amt == 0) return big(1);

    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // g43: time speed upgrade is twice more powerful
    if (player.upgrades['g43'].is_active()) base_amt = base_amt.mult(2);
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    let base_pow = big(256).mult(base_amt.pow(0.5)).div(base_amt.pow(0.5).add(80)).add(1);
    base_pow = base_pow.min(base_amt.add(1));
    // Photonic Challenge 7: time speed upgrade is more powerful
    if (player.challenges['p7'].inC()) base_pow = base_pow.pow(2);

    return base_pow;
}
functions["upg_p12_power"] = (amt) => {
    if (amt == 0) return big(1);

    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    var base_pow = big(36).pow(big(base_amt).pow(0.9));
    base_pow = base_pow.subtract(1).mult(big(0.9999).pow(player.time_photonic)).add(1);
    return base_pow;
}
functions["upg_p13_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(2);
}
functions["upg_p14_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(3);
}
functions["upg_p15_power"] = (amt) => {
    if (amt == 0) return big(2);
    else return big(11);
}
functions["upg_p21_power"] = (amt) => {
    if (amt == 0) return big(0);

    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // a07_2: upgrade 21 is 20% more powerful
    if (player.milestones['a07_2'].is_active()) base_amt = base_amt.mult(1.2);
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    return big(100).pow(base_amt);
}
functions["upg_p22_power"] = (amt) => {
    if (amt == 0) return big(0.2);

    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    if (base_amt.mult(0.05).add(0.2).lt(0.4)) return base_amt.mult(0.05).add(0.2);
    else return big(0.2).add(big(0.8).mult(base_amt).div(base_amt.add(12)));
}
functions["upg_p23_power"] = (amt) => {
    return big(2).add(big(Math.log10(player.overall_time / 111 + 1)));
}
functions["upg_p24_power"] = (amt) => {
    return big(2).add(big(player.photons.add(1).log(10)).pow(2));
}
functions["upg_p25_power"] = (amt) => {
    if (amt == 0) return big(2);
    else return big(29);
}
functions["upg_p31_power"] = (amt) => {
    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    return big(2).mult(base_amt.add(1));
}
functions["upg_p32_power"] = (amt) => {
    if (amt == 0) return big(1);

    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    return big(player.photonic_resets).pow(base_amt.pow(0.75).div(2)).add(1);
}
functions["upg_p33_power"] = (amt) => {
    return big(1);
}
functions["upg_p34_power"] = (amt) => {
    return player.photons.pow(0.7).min(player.photons.add(1).log(10).pow(4).mult(1e3)).add(2);
}
functions["upg_p35_power"] = (amt) => {
    if (amt == 0) return big(2);
    else return big(47);
}
functions["upg_p41_power"] = (amt) => {
    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    return big(2).pow(base_amt);
}
functions["upg_p42_power"] = (amt) => {
    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    return big(1).add(big(0.5).mult(base_amt));
}
functions["upg_p43_power"] = (amt) => {
    return big(1);
}
functions["upg_p44_power"] = (amt) => {
    return big(1).add(big(player.photons.add(1).log(10)).pow(3));
}
functions["upg_p45_power"] = (amt) => {
    if (amt == 0) return big(2);
    else return big(71);
}
functions["upg_p51_power"] = (amt) => {
    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    return big(3).pow(base_amt.pow(0.5));
}
functions["upg_p52_power"] = (amt) => {
    let base_amt = big(amt);
    // n25: repeatable Photonic upgrades are more powerful
    if (player.upgrades['n25'].is_active()) base_amt = base_amt.mult(player.upgrades['n25'].get_effect());
    // Vacuumic Challenge 7 reward: get a free level of all Photonic repeatable upgrades
    if (player.challenges['v7'].completed) base_amt = base_amt.add(0.7);

    return big(1).add(big(0.5).mult(base_amt));
}
functions["upg_p53_power"] = (amt) => {
    if (amt == 0) return big(1);
    return wave_effect('infrared');
}
functions["upg_p54_power"] = (amt) => {
    if (amt == 0) return big(1);
    return big(1e9);
}
functions["upg_p55_power"] = (amt) => {
    if (amt == 0) return big(2);
    else return big(97);
}


functions["upg_p11_unlock"] = () => {
    return true;
}
functions["upg_p12_unlock"] = () => {
    return true;
}
functions["upg_p13_unlock"] = () => {
    return true;
}
functions["upg_p14_unlock"] = () => {
    return true;
}
functions["upg_p15_unlock"] = () => {
    return true;
}
functions["upg_p21_unlock"] = () => {
    return true;
}
functions["upg_p22_unlock"] = () => {
    return true;
}
functions["upg_p23_unlock"] = () => {
    return true;
}
functions["upg_p24_unlock"] = () => {
    return true;
}
functions["upg_p25_unlock"] = () => {
    return true;
}
functions["upg_p31_unlock"] = () => {
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p32_unlock"] = () => {
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p33_unlock"] = () => {
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p34_unlock"] = () => {
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p35_unlock"] = () => {
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p41_unlock"] = () => {
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p42_unlock"] = () => {
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p43_unlock"] = () => {
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p44_unlock"] = () => {
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p45_unlock"] = () => {
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p51_unlock"] = () => {
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p52_unlock"] = () => {
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p53_unlock"] = () => {
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p54_unlock"] = () => {
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p55_unlock"] = () => {
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}


functions["upg_p11_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    return true;
}
functions["upg_p12_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    return true;
}
functions["upg_p13_available"] = () => {
    return true;
}
functions["upg_p14_available"] = () => {
    return true;
}
functions["upg_p15_available"] = () => {
    return true;
}
functions["upg_p21_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    return true;
}
functions["upg_p22_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    return true;
}
functions["upg_p23_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    return true;
}
functions["upg_p24_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    return true;
}
functions["upg_p25_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    return true;
}
functions["upg_p31_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p32_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p33_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p34_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p35_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // n04: unlock third row of Photonic upgrades
    if (player.upgrades['n04'].is_active()) return true;
    return false;
}
functions["upg_p41_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p42_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p43_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p44_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p45_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // v82: unlock fourth row of Photonic upgrades
    if (player.upgrades['v82'].is_active()) return true;
    return false;
}
functions["upg_p51_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p52_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p53_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p54_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
functions["upg_p55_available"] = () => {
    // Photonic Challenge 5: only the first row is available
    if (player.challenges['p5'].inC()) return false;
    // a05_1: unlock fifth row of Photonic upgrades
    if (player.milestones['a05_1'].is_active()) return true;
    return false;
}
