functions["upg_n01_cost"] = (amt) => {
    return big(1);
}
functions["upg_n02_cost"] = (amt) => {
    return big(1.2).pow(amt*amt + 1);
}
functions["upg_n03_cost"] = (amt) => {
    return big(1.2).pow(amt*amt + 1);
}
functions["upg_n04_cost"] = (amt) => {
    return big(1);
}
functions["upg_n05_cost"] = (amt) => {
    return big(1);
}
functions["upg_n06_cost"] = (amt) => {
    return big(1);
}
functions["upg_n11_cost"] = (amt) => {
    return big(1);
}
functions["upg_n12_cost"] = (amt) => {
    return big(1);
}
functions["upg_n13_cost"] = (amt) => {
    return big(3);
}
functions["upg_n14_cost"] = (amt) => {
    return big(5);
}
functions["upg_n15_cost"] = (amt) => {
    return big(9);
}
functions["upg_n16_cost"] = (amt) => {
    return big(13);
}
functions["upg_n17_cost"] = (amt) => {
    return big(27);
}
functions["upg_n21_cost"] = (amt) => {
    return big(1);
}
functions["upg_n22_cost"] = (amt) => {
    return big(1);
}
functions["upg_n23_cost"] = (amt) => {
    return big(3);
}
functions["upg_n24_cost"] = (amt) => {
    return big(5);
}
functions["upg_n25_cost"] = (amt) => {
    return big(9);
}
functions["upg_n26_cost"] = (amt) => {
    return big(13);
}
functions["upg_n27_cost"] = (amt) => {
    return big(27);
}
functions["upg_n31_cost"] = (amt) => {
    return big(1);
}
functions["upg_n32_cost"] = (amt) => {
    return big(1);
}
functions["upg_n33_cost"] = (amt) => {
    return big(3);
}
functions["upg_n34_cost"] = (amt) => {
    return big(5);
}
functions["upg_n35_cost"] = (amt) => {
    return big(9);
}
functions["upg_n36_cost"] = (amt) => {
    return big(13);
}
functions["upg_n37_cost"] = (amt) => {
    return big(27);
}

functions["upg_n01_power"] = (amt) => {
    let base_reward = unlocked_layers();
    if (player.unlocked_photonic) base_reward -= 1;
    if (player.unlocked_gravitonic) base_reward -= 1;
    return big(2).pow(base_reward - 1);
}
functions["upg_n02_power"] = (amt) => {
    let effective_amt = amt;
    // Vacuumic Challenge 3 reward: n02 is 33% more powerful
    if (player.challenges['v3'].completed) effective_amt *= 1.33;

    if (effective_amt <= 2) return big(100).mult(big(2).pow(-effective_amt));
    else return big(24).div(effective_amt-1).add(1);
}
functions["upg_n03_power"] = (amt) => {
    if (amt == 0) return big(10);
    else return big(9).subtract(amt);
}
functions["upg_n04_power"] = (amt) => {
    return big(1);
}
functions["upg_n05_power"] = (amt) => {
    return big(1);
}
functions["upg_n06_power"] = (amt) => {
    if (amt == 0) return player.gravitons;
    // In Neutronic challenges, max gravitons are counted separately
    if (player.current_challenge["neutronic"] != "") return player.max_gravitons_in_nc.max(player.gravitons);
    return player.max_gravitons.max(player.gravitons);
}
functions["upg_n11_power"] = (amt) => {
    return player.proton_power.mult(99).add(1);
}
functions["upg_n12_power"] = (amt) => {
    return big(1);
}
functions["upg_n13_power"] = (amt) => {
    return big(2).pow(player.dimensions["matter_1"].amt_bought);
}
functions["upg_n14_power"] = (amt) => {
    return big(1);
}
functions["upg_n15_power"] = (amt) => {
    return player.proton_power.add(1).log(10).div(10).add(1);
}
functions["upg_n16_power"] = (amt) => {
    return player.proton_power.add(1).pow(0.5);
}
functions["upg_n17_power"] = (amt) => {
    return big(player.photonic_resets).add(1);
}
functions["upg_n21_power"] = (amt) => {
    return player.electron_power.mult(2400).add(1).pow(0.25);
}
functions["upg_n22_power"] = (amt) => {
    return big(1);
}
functions["upg_n23_power"] = (amt) => {
    return big(player.dimensions["matter_1"].amt_bought).pow(2).add(1);
}
functions["upg_n24_power"] = (amt) => {
    return big(1);
}
functions["upg_n25_power"] = (amt) => {
    return player.electron_power.add(1).log(10).pow(0.5).div(10).add(1);
}
functions["upg_n26_power"] = (amt) => {
    return player.electron_power.add(1).pow(0.5);
}
functions["upg_n27_power"] = (amt) => {
    return big(player.gravitonic_resets).add(1);
}
functions["upg_n31_power"] = (amt) => {
    return player.boson_power.mult(124).add(1).log(5).div(3);
}
functions["upg_n32_power"] = (amt) => {
    return big(1);
}
functions["upg_n33_power"] = (amt) => {
    return big(1);
}
functions["upg_n34_power"] = (amt) => {
    return big(1);
}
functions["upg_n35_power"] = (amt) => {
    return player.boson_power.mult(99).add(1).pow(0.5);
}
functions["upg_n36_power"] = (amt) => {
    return player.boson_power.add(1).pow(0.5);
}
functions["upg_n37_power"] = (amt) => {
    return big(player.neutronic_resets).add(1);
}

functions["upg_n01_unlock"] = () => {
    return true;
}
functions["upg_n02_unlock"] = () => {
    return player.upgrades['n01'].amt > 0;
}
functions["upg_n03_unlock"] = () => {
    return player.upgrades['n01'].amt > 0;
}
functions["upg_n04_unlock"] = () => {
    return player.upgrades['n02'].amt > 0;
}
functions["upg_n05_unlock"] = () => {
    return player.upgrades['n02'].amt > 0 || player.upgrades['n03'].amt > 0;
}
functions["upg_n06_unlock"] = () => {
    return player.upgrades['n03'].amt > 0;
}
functions["upg_n11_unlock"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n12_unlock"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n13_unlock"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n14_unlock"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n15_unlock"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n16_unlock"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n17_unlock"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n21_unlock"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n22_unlock"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n23_unlock"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n24_unlock"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n25_unlock"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n26_unlock"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n27_unlock"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n31_unlock"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n32_unlock"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n33_unlock"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n34_unlock"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n35_unlock"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n36_unlock"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n37_unlock"] = () => {
    return player.upgrades['n06'].amt > 0;
}

functions["upg_n01_available"] = () => {
    return true;
}
functions["upg_n02_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    return player.upgrades['n01'].amt > 0;
}
functions["upg_n03_available"] = () => {
    // Vacuumic Challenge 7: repeatable upgrades are not available
    if (player.challenges['v7'].inC()) return false;
    return player.upgrades['n01'].amt > 0;
}
functions["upg_n04_available"] = () => {
    return player.upgrades['n02'].amt > 0;
}
functions["upg_n05_available"] = () => {
    return player.upgrades['n02'].amt > 0 || player.upgrades['n03'].amt > 0;
}
functions["upg_n06_available"] = () => {
    return player.upgrades['n03'].amt > 0;
}
functions["upg_n11_available"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n12_available"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n13_available"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n14_available"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n15_available"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n16_available"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n17_available"] = () => {
    return player.upgrades['n04'].amt > 0;
}
functions["upg_n21_available"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n22_available"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n23_available"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n24_available"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n25_available"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n26_available"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n27_available"] = () => {
    return player.upgrades['n05'].amt > 0;
}
functions["upg_n31_available"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n32_available"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n33_available"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n34_available"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n35_available"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n36_available"] = () => {
    return player.upgrades['n06'].amt > 0;
}
functions["upg_n37_available"] = () => {
    return player.upgrades['n06'].amt > 0;
}

functions["upg_n01_buy"] = (amt) => {
    if (amt == 0) return;
    // Challenge 4: all resources are capped
    player.gravitons = player.gravitons.add(player.upgrades['n01'].get_effect()).round().min(player.challenge_strength_4);
}