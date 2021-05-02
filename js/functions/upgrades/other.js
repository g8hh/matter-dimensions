functions["upg_TICKSPEED_cost"] = (amt) => {
    let base_amt = big(amt);
    // p42: tickspeed upgrade cost scaling is reduced
    base_amt = base_amt.div(player.upgrades['p42'].get_effect());
    // n15: tickspeed upgrade cost scaling is reduced
    if (player.upgrades['n15'].is_active()) base_amt = base_amt.div(player.upgrades['n15'].get_effect());

    return big(10).pow(base_amt.pow(2)).mult(10);
}
functions["upg_TICKSPEED_power"] = (amt) => {
    let base_pow = get_tickspeed_power();
    let base_amt = get_tickspeed_amount(amt);

    // Neutronic Challenge 3: tickspeed effect is additive
    if (player.challenges['n3'].inC()) base_pow = base_pow.mult(base_amt).add(1).max(1);
    else base_pow = base_pow.pow(base_amt);

    // a11_1: multiply Tickspeed based on Tickspeed Upgrades
    if (player.milestones['a11_1'].is_active()) base_pow = base_pow.mult(player.milestones['a11_1'].get_effect());

    return base_pow;
}
functions["upg_TICKSPEED_unlock"] = () => {
    // p33: unlock Tickspeed upgrades
    return player.upgrades['p33'].is_active() && functions[player.dimensions['matter_2'].unlock_function]();
}
functions["upg_TICKSPEED_available"] = () => {
    // p33: unlock Tickspeed upgrades
    return player.upgrades['p33'].is_active() && functions[player.dimensions['matter_2'].unlock_function]();
}



functions["upg_INERTIA_1_cost"] = (amt) => {
    return big(15 * 60 * 1000).mult(big(2).pow(amt));
}
functions["upg_INERTIA_2_cost"] = (amt) => {
    return big(5 * 60 * 1000).mult(big(12).pow(amt));
}
functions["upg_INERTIA_3_cost"] = (amt) => {
    return big(36 * 60 * 1000).mult(big(5).pow(amt));
}
functions["upg_INERTIA_4_cost"] = (amt) => {
    return big(6 * 60 * 1000).mult(big(10).pow(amt));
}
functions["upg_INERTIA_5_cost"] = (amt) => {
    return big(8 * 60 * 60 * 1000).mult(big(3).pow(amt));
}
functions["upg_INERTIA_1_power"] = (amt) => {
    return big(30 * 60 * 1000).mult(big(2).pow(amt)).round();
}
functions["upg_INERTIA_2_power"] = (amt) => {
    return big(0.6).subtract(big(0.15).mult(amt));
}
functions["upg_INERTIA_3_power"] = (amt) => {
    return big(amt).add(3);
}
functions["upg_INERTIA_4_power"] = (amt) => {
    return big(amt).add(1);
}
functions["upg_INERTIA_5_power"] = (amt) => {
    switch (big(amt).toInt()) {
        case 1: return big(40);
        case 2: return big(70);
        case 3: return big(90);
        case 4: return big(100);
        default: return big(0);
    }
}
functions["upg_INERTIA_1_unlock"] = () => {
    return true;
}
functions["upg_INERTIA_2_unlock"] = () => {
    return true;
}
functions["upg_INERTIA_3_unlock"] = () => {
    return true;
}
functions["upg_INERTIA_4_unlock"] = () => {
    return true;
}
functions["upg_INERTIA_5_unlock"] = () => {
    return true;
}
functions["upg_INERTIA_1_available"] = () => {
    return true;
}
functions["upg_INERTIA_2_available"] = () => {
    return true;
}
functions["upg_INERTIA_3_available"] = () => {
    return true;
}
functions["upg_INERTIA_4_available"] = () => {
    return true;
}
functions["upg_INERTIA_5_available"] = () => {
    return true;
}
functions["upg_INERTIA_3_buy_function"] = (amt) => {
    update_inertia_first();
}
functions["upg_INERTIA_1_cost_display_function"] = (cost) => {
    return format_time(cost);
}
functions["upg_INERTIA_2_cost_display_function"] = (cost) => {
    return format_time(cost);
}
functions["upg_INERTIA_3_cost_display_function"] = (cost) => {
    return format_time(cost);
}
functions["upg_INERTIA_4_cost_display_function"] = (cost) => {
    return format_time(cost);
}
functions["upg_INERTIA_5_cost_display_function"] = (cost) => {
    return format_time(cost);
}



functions["upg_COLLISION_POINT_cost"] = (amt) => {
    let base_cost = n_Fibonacci(1, n_Fibonacci(1, big(amt).add(2)).add(1));
    // a03_2: collision points cost twice less, with minimum of 1
    if (player.milestones['a03_2'].is_active()) base_cost = base_cost.div(2).max(1);
    // a03: collision points cost less
    base_cost = base_cost.pow(player.upgrades['a03'].get_effect());

    return base_cost;
}
functions["upg_COLLISION_POINT_power"] = (amt) => {
    return big(1);
}
functions["upg_COLLISION_POINT_unlock"] = () => {
    return player.achievements['93'].complete;
}
functions["upg_COLLISION_POINT_available"] = () => {
    return player.achievements['93'].complete;
}
functions["upg_COLLISION_POINT_buy"] = (amt) => {
    player.collision_points += big(amt).toInt();
}