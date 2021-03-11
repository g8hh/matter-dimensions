functions["upg_TICKSPEED_cost"] = (amt) => {
    let base_amt = big(amt);
    // p42: tickspeed upgrade cost scaling is reduced
    base_amt = base_amt.div(me.upgrades['p42'].get_effect());
    // n15: tickspeed upgrade cost scaling is reduced
    if (me.upgrades['n15'].is_active()) base_amt = base_amt.div(me.upgrades['n15'].get_effect());

    return big(10).pow(base_amt.pow(2)).mult(10);
}
functions["upg_TICKSPEED_power"] = (amt) => {
    let base_pow = get_tickspeed_power(me);
    let base_amt = big(amt);

    // Gravitonic Challenge 5: you gain -10 free tickspeed upgrades
    if (me.challenges['g5'].inC()) base_amt = base_amt.subtract(10);
    // Gravitonic Challenge 5 reward: you gain afree tickspeed upgrade
    if (me.challenges['g5'].completed) base_amt = base_amt.add(1);
    // v91: you gain free tickspeed upgrades based on bought 1st Matter Dimensions
    if (me.upgrades['v91'].is_active()) base_amt = base_amt.add(me.upgrades['v91'].get_effect());
    // v181: gain tickspeed upgrades based on max photons earned at once
    if (me.upgrades['v181'].is_active()) base_amt = base_amt.add(me.upgrades['v181'].get_effect());
    // a02_2: gain 6 Tickspeed Upgrades per Dimensional Shift
    if (me.milestones['a02_2'].is_active()) base_amt = base_amt.add(me.milestones['a02_2'].get_effect());
    
    // Neutronic Challenge 2: you can gain Tickspeed Upgrades only from Stars
    if (me.challenges['n2'].inC()) base_amt = big(0);
    // Stars provide free Tickspeed Upgrades
    base_amt = base_amt.add(power_stars_tickspeed(me));

    // Neutronic Challenge 3: tickspeed effect is additive
    if (me.challenges['n3'].inC()) return base_pow.mult(base_amt).add(1).max(1);
    return base_pow.pow(base_amt);
}
functions["upg_TICKSPEED_unlock"] = () => {
    // p33: unlock Tickspeed upgrades
    return me.upgrades['p33'].is_active() && functions[me.dimensions['matter_2'].unlock_function]();
}
functions["upg_TICKSPEED_available"] = () => {
    // p33: unlock Tickspeed upgrades
    return me.upgrades['p33'].is_active() && functions[me.dimensions['matter_2'].unlock_function]();
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
    update_inertia_first(me);
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
    if (me.milestones['a03_2'].is_active()) base_cost = base_cost.div(2).max(1);
    // a03: collision points cost less
    base_cost = base_cost.pow(me.upgrades['a03'].get_effect());

    return base_cost;
}
functions["upg_COLLISION_POINT_power"] = (amt) => {
    return big(1);
}
functions["upg_COLLISION_POINT_unlock"] = () => {
    return me.achievements['93'].complete;
}
functions["upg_COLLISION_POINT_available"] = () => {
    return me.achievements['93'].complete;
}
functions["upg_COLLISION_POINT_buy"] = (amt) => {
    me.collision_points += big(amt).toInt();
}