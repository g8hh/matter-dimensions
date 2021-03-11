functions["upg_a01_cost"] = (amt) => {
    return n_Fibonacci(1, amt + 1).max(big(1.01357).pow(big(amt).pow(2)));
}
functions["upg_a02_cost"] = (amt) => {
    return n_Fibonacci(2, amt + 1).max(big(1.03712).pow(big(amt).pow(2))).mult(2);
}
functions["upg_a03_cost"] = (amt) => {
    return n_Fibonacci(3, amt + 1).max(big(1.01213).pow(big(amt).pow(2))).mult(big(2).pow(3));
}
functions["upg_a04_cost"] = (amt) => {
    return n_Fibonacci(4, amt + 1).max(big(1.04609).pow(big(amt).pow(2))).mult(big(2).pow(6));
}
functions["upg_a05_cost"] = (amt) => {
    return n_Fibonacci(5, amt + 1).max(big(1.03039).pow(big(amt).pow(2))).mult(big(2).pow(10));
}
functions["upg_a06_cost"] = (amt) => {
    return n_Fibonacci(6, amt + 1).max(big(1.16341).pow(big(amt).pow(2))).mult(big(2).pow(15));
}



functions["upg_a01_power"] = (amt) => {
    let levels = big(amt);
    if ('a01' in free_atom_levels) levels = levels.add(free_atom_levels['a01']);

    return big(0.99).pow(levels).mult(0.5);
}
functions["upg_a02_power"] = (amt) => {
    let levels = big(amt);
    if ('a02' in free_atom_levels) levels = levels.add(free_atom_levels['a02']);

    return big(1).add(levels.pow(0.33));
}
functions["upg_a03_power"] = (amt) => {
    let levels = big(amt);
    if ('a03' in free_atom_levels) levels = levels.add(free_atom_levels['a03']);

    return big(0.99).pow(levels);
}
functions["upg_a04_power"] = (amt) => {
    let levels = big(amt);
    if ('a04' in free_atom_levels) levels = levels.add(free_atom_levels['a04']);

    return big(levels).add(1);
}
functions["upg_a05_power"] = (amt) => {
    let levels = big(amt);
    if ('a05' in free_atom_levels) levels = levels.add(free_atom_levels['a05']);

    return big(5).pow(levels);
}
functions["upg_a06_power"] = (amt) => {
    let levels = big(amt);
    if ('a06' in free_atom_levels) levels = levels.add(free_atom_levels['a06']);

    return big(2).pow(levels);
}



functions["upg_a01_unlock"] = () => {
    return true;
}
functions["upg_a02_unlock"] = () => {
    return true;
}
functions["upg_a03_unlock"] = () => {
    return true;
}
functions["upg_a04_unlock"] = () => {
    return true;
}
functions["upg_a05_unlock"] = () => {
    return true;
}
functions["upg_a06_unlock"] = () => {
    return true;
}



functions["upg_a01_available"] = () => {
    return highest_unlocked_element(me) >= 1;
}
functions["upg_a02_available"] = () => {
    return highest_unlocked_element(me) >= 2;
}
functions["upg_a03_available"] = () => {
    return highest_unlocked_element(me) >= 3;
}
functions["upg_a04_available"] = () => {
    return highest_unlocked_element(me) >= 4;
}
functions["upg_a05_available"] = () => {
    return highest_unlocked_element(me) >= 5;
}
functions["upg_a06_available"] = () => {
    return highest_unlocked_element(me) >= 6;
}



functions["upg_a01_buy"] = (amt) => {
    if (amt == 0) return;
    if (amt == me.upgrades['a01'].amt) {
        // Challenge 4: all resources are capped
        me.shards = me.shards.add(me.milestones["a01_1"].get_effect()).round().min(me.challenge_strength_4);
    }
}