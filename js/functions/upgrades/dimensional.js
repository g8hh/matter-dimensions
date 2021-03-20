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



functions["upg_d11_power"] = (amt) => {
    let base_reward = unlocked_layers(me);
    if (me.unlocked_photonic) base_reward -= 1;
    if (me.unlocked_gravitonic) base_reward -= 1;
    if (me.unlocked_neutronic) base_reward -= 1;
    if (me.unlocked_vacuumic) base_reward -= 1;
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
    return big(1.01).pow(amt);
}
functions["upg_d52_power"] = (amt) => {
    return big(amt).add(1);
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
    return big(me.dimensional_resets).max(1);
}
functions["upg_d101_power"] = (amt) => {
    return power_inflation_photonic(me);
}
functions["upg_d102_power"] = (amt) => {
    return big(1);
}
functions["upg_d103_power"] = (amt) => {
    return big(me.dimensional_resets).add(1).log(10).add(1);
}
functions["upg_d111_power"] = (amt) => {
    return power_inflation_gravitonic(me);
}
functions["upg_d112_power"] = (amt) => {
    return power_inflation_neutronic(me);
}
functions["upg_d113_power"] = (amt) => {
    return me.shards.add(1);
}
functions["upg_d114_power"] = (amt) => {
    let vc_completed = 0;

    for (let key of Object.keys(me.challenges)) {
        if (me.challenges[key].layer == "vacuumic" && me.challenges[key].completed) vc_completed += 1;
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
    return big(1);
}



functions["upg_d11_unlock"] = () => {
    return true;
}
functions["upg_d21_unlock"] = () => {
    return me.upgrades['d11'].amt > 0;
}
functions["upg_d31_unlock"] = () => {
    return me.upgrades['d21'].amt > 0;
}
functions["upg_d32_unlock"] = () => {
    return me.upgrades['d21'].amt > 0;
}
functions["upg_d41_unlock"] = () => {
    return me.upgrades['d21'].amt > 0;
}
functions["upg_d51_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d52_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d61_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d62_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d63_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d71_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d72_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d81_unlock"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d91_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d92_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d101_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d102_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d103_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d111_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d112_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d113_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d114_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d121_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d122_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d123_unlock"] = () => {
    return me.upgrades['d81'].amt > 0;
}



functions["upg_d11_available"] = () => {
    return true;
}
functions["upg_d21_available"] = () => {
    return me.upgrades['d11'].amt > 0;
}
functions["upg_d31_available"] = () => {
    return me.upgrades['d21'].amt > 0;
}
functions["upg_d32_available"] = () => {
    return me.upgrades['d21'].amt > 0;
}
functions["upg_d41_available"] = () => {
    return me.upgrades['d21'].amt > 0;
}
functions["upg_d51_available"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d52_available"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d61_available"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d62_available"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d63_available"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d71_available"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d72_available"] = () => {
    // achievement 88: keep all automation
    if (me.upgrades['d72'].amt > 0 && me.achievements['88'].complete) return true;
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d81_available"] = () => {
    return me.upgrades['d41'].amt > 0;
}
functions["upg_d91_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d92_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d101_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d102_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d103_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d111_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d112_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d113_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d114_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d121_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d122_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}
functions["upg_d123_available"] = () => {
    return me.upgrades['d81'].amt > 0;
}



functions["upg_d11_buy"] = (amt) => {
    if (amt == 0) return;
    // Challenge 4: all resources are capped
    // achievement 108: Vacuum Energy is not affected by resource limit
    me.vacuum_energy = me.vacuum_energy.add(me.upgrades['d11'].get_effect()).round();
    if (!me.achievements['108'].complete) me.vacuum_energy = me.vacuum_energy.min(me.challenge_strength_4);
}