functions["upg_d11_cost"] = (amt) => {
    return big(1);
}
functions["upg_d21_cost"] = (amt) => {
    return big(1);
}
functions["upg_d31_cost"] = (amt) => {
    return big(1);
}
functions["upg_d32_cost"] = (amt) => {
    return big(1);
}
functions["upg_d41_cost"] = (amt) => {
    return big(1.5);
}
functions["upg_d51_cost"] = (amt) => {
    return big(1.3).pow(big(amt).mult(amt+1).div(2).add(1));
}
functions["upg_d52_cost"] = (amt) => {
    return big(1.3).pow(big(amt).mult(amt+1).div(2).add(1));
}
functions["upg_d61_cost"] = (amt) => {
    return big(1.5).pow(big(amt).mult(amt+1).div(2).add(2));
}
functions["upg_d62_cost"] = (amt) => {
    return big(1.5).pow(big(amt).mult(amt+1).div(2).add(2));
}
functions["upg_d63_cost"] = (amt) => {
    return big(1.5).pow(big(amt).mult(amt+1).div(2).add(2));
}
functions["upg_d71_cost"] = (amt) => {
    return big(4);
}
functions["upg_d72_cost"] = (amt) => {
    return big(4);
}
functions["upg_d81_cost"] = (amt) => {
    return big(5);
}
functions["upg_d91_cost"] = (amt) => {
    return big(13);
}
functions["upg_d92_cost"] = (amt) => {
    return big(13);
}
functions["upg_d101_cost"] = (amt) => {
    return big(32);
}
functions["upg_d102_cost"] = (amt) => {
    return big(32);
}
functions["upg_d103_cost"] = (amt) => {
    return big(32);
}
functions["upg_d111_cost"] = (amt) => {
    return big(125);
}
functions["upg_d112_cost"] = (amt) => {
    return big(125);
}
functions["upg_d113_cost"] = (amt) => {
    return big(125);
}
functions["upg_d114_cost"] = (amt) => {
    return big(125);
}
functions["upg_d121_cost"] = (amt) => {
    return big(59049);
}
functions["upg_d122_cost"] = (amt) => {
    return big(59049);
}
functions["upg_d123_cost"] = (amt) => {
    return big(59049);
}
functions["upg_d131_cost"] = (amt) => {
    return big(3).pow(big(amt).mult(amt+1).mult(4).add(13));
}
functions["upg_d132_cost"] = (amt) => {
    return big(3).pow(big(amt).mult(amt+1).mult(4).add(13));
}
functions["upg_d141_cost"] = (amt) => {
    return big(1e8);
}
functions["upg_d151_cost"] = (amt) => {
    return big(1e12);
}



functions["upg_d11_power"] = (amt) => {
    let base_reward = unlocked_layers();
    if (player.unlocked_photonic) base_reward -= 1;
    if (player.unlocked_gravitonic) base_reward -= 1;
    if (player.unlocked_neutronic) base_reward -= 1;
    if (player.unlocked_vacuumic) base_reward -= 1;
    return big(2).pow(base_reward - 1);
}
functions["upg_d21_power"] = (amt) => {
    return big(1);
}
functions["upg_d31_power"] = (amt) => {
    return big(1);
}
functions["upg_d32_power"] = (amt) => {
    return big(1);
}
functions["upg_d41_power"] = (amt) => {
    return big(1);
}
functions["upg_d51_power"] = (amt) => {
    let base_amt = big(amt);
    // d131: d51 is more powerful
    if (player.upgrades['d131'].is_active()) base_amt = base_amt.mult(player.upgrades['d131'].get_effect());

    return big(1.01).pow(base_amt);
}
functions["upg_d52_power"] = (amt) => {
    let base_amt = big(amt);
    // d132: d52 is more powerful
    if (player.upgrades['d132'].is_active()) base_amt = base_amt.mult(player.upgrades['d132'].get_effect());

    return big(base_amt).add(1);
}
functions["upg_d61_power"] = (amt) => {
    return big(amt).mult(big(amt).add(1)).div(2);
}
functions["upg_d62_power"] = (amt) => {
    return big(1000).pow(big(amt).mult(big(amt).add(1)).div(2));
}
functions["upg_d63_power"] = (amt) => {
    return big(100).pow(big(amt).mult(big(amt).add(1)).div(2));
}
functions["upg_d71_power"] = (amt) => {
    return big(1);
}
functions["upg_d72_power"] = (amt) => {
    return big(1);
}
functions["upg_d81_power"] = (amt) => {
    return big(1);
}
functions["upg_d91_power"] = (amt) => {
    return big(1);
}
functions["upg_d92_power"] = (amt) => {
    return big(player.dimensional_resets).max(1);
}
functions["upg_d101_power"] = (amt) => {
    return power_inflation_photonic();
}
functions["upg_d102_power"] = (amt) => {
    return big(1);
}
functions["upg_d103_power"] = (amt) => {
    return big(player.dimensional_resets).add(1).log(10).add(1);
}
functions["upg_d111_power"] = (amt) => {
    return power_inflation_gravitonic();
}
functions["upg_d112_power"] = (amt) => {
    return power_inflation_neutronic();
}
functions["upg_d113_power"] = (amt) => {
    return player.shards.add(1);
}
functions["upg_d114_power"] = (amt) => {
    let vc_completed = 0;

    for (let key of Object.keys(player.challenges)) {
        if (player.challenges[key].layer == "vacuumic" && player.challenges[key].completed) vc_completed += 1;
    }

    return big(1).add(vc_completed);
}
functions["upg_d121_power"] = (amt) => {
    return power_inflation_vacuumic();
}
functions["upg_d122_power"] = (amt) => {
    return big(1);
}
functions["upg_d123_power"] = (amt) => {
    return big(2);
}
functions["upg_d131_power"] = (amt) => {
    return big(amt).div(2).add(1);
}
functions["upg_d132_power"] = (amt) => {
    return big(amt).div(2).add(1);
}
functions["upg_d141_power"] = (amt) => {
    return big(1);
}
functions["upg_d151_power"] = (amt) => {
    return big(1);
}



functions["upg_d11_unlock"] = () => {
    return true;
}
functions["upg_d21_unlock"] = () => {
    return player.upgrades['d11'].amt > 0 && max_dimensional_shifts() > 0;
}
functions["upg_d31_unlock"] = () => {
    return player.upgrades['d21'].amt > 0;
}
functions["upg_d32_unlock"] = () => {
    return player.upgrades['d21'].amt > 0;
}
functions["upg_d41_unlock"] = () => {
    return player.upgrades['d21'].amt > 0 && max_dimensional_shifts() > 1;
}
functions["upg_d51_unlock"] = () => {
    return player.upgrades['d41'].amt > 0;
}
functions["upg_d52_unlock"] = () => {
    return player.upgrades['d41'].amt > 0;
}
functions["upg_d61_unlock"] = () => {
    return player.upgrades['d41'].amt > 0;
}
functions["upg_d62_unlock"] = () => {
    return player.upgrades['d41'].amt > 0;
}
functions["upg_d63_unlock"] = () => {
    return player.upgrades['d41'].amt > 0;
}
functions["upg_d71_unlock"] = () => {
    return player.upgrades['d41'].amt > 0;
}
functions["upg_d72_unlock"] = () => {
    return player.upgrades['d41'].amt > 0;
}
functions["upg_d81_unlock"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d91_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d92_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d101_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d102_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d103_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d111_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d112_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d113_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d114_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d121_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d122_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d123_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d131_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d132_unlock"] = () => {
    return player.upgrades['d81'].amt > 0;
}
functions["upg_d141_unlock"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d151_unlock"] = () => {
    return player.upgrades['d141'].amt > 0 && max_dimensional_shifts() > 4;
}



functions["upg_d11_available"] = () => {
    return true;
}
functions["upg_d21_available"] = () => {
    return player.upgrades['d11'].amt > 0 && max_dimensional_shifts() > 0;
}
functions["upg_d31_available"] = () => {
    return player.upgrades['d21'].amt > 0 && max_dimensional_shifts() > 1;
}
functions["upg_d32_available"] = () => {
    return player.upgrades['d21'].amt > 0 && max_dimensional_shifts() > 1;
}
functions["upg_d41_available"] = () => {
    return player.upgrades['d21'].amt > 0 && max_dimensional_shifts() > 1;
}
functions["upg_d51_available"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d52_available"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d61_available"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d62_available"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d63_available"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d71_available"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d72_available"] = () => {
    // achievement 88: keep all automation
    if (player.upgrades['d72'].amt > 0 && player.achievements['88'].complete) return true;
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d81_available"] = () => {
    return player.upgrades['d41'].amt > 0 && max_dimensional_shifts() > 2;
}
functions["upg_d91_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d92_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d101_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d102_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d103_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d111_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d112_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d113_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d114_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d121_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d122_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d123_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d131_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d132_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d141_available"] = () => {
    return player.upgrades['d81'].amt > 0 && max_dimensional_shifts() > 3;
}
functions["upg_d151_available"] = () => {
    return player.upgrades['d141'].amt > 0 && max_dimensional_shifts() > 4;
}



functions["upg_d11_buy"] = (amt) => {
    if (amt == 0) return;
    // Challenge 4: all resources are capped
    // achievement 108: Vacuum Energy is not affected by resource limit
    player.vacuum_energy = player.vacuum_energy.add(player.upgrades['d11'].get_effect()).round();
    if (!player.achievements['108'].complete) player.vacuum_energy = player.vacuum_energy.min(player.challenge_strength_4);
}