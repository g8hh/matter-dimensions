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
functions["upg_a07_cost"] = (amt) => {
    return n_Fibonacci(7, amt + 1).max(big(1.04092).pow(big(amt).pow(2))).mult(big(2).pow(21));
}
functions["upg_a08_cost"] = (amt) => {
    return n_Fibonacci(8, amt + 1).max(big(1.13980).pow(big(amt).pow(2))).mult(big(2).pow(28));
}
functions["upg_a09_cost"] = (amt) => {
    return n_Fibonacci(9, amt + 1).max(big(1.02233).pow(big(amt).pow(2))).mult(big(2).pow(56));
}
functions["upg_a10_cost"] = (amt) => {
    return n_Fibonacci(10, amt + 1).max(big(1.23124).pow(big(amt).pow(2))).mult(big(2).pow(112));
}
functions["upg_a11_cost"] = (amt) => {
    return n_Fibonacci(11, amt + 1).max(big(1.03132).pow(big(amt).pow(2))).mult(big(2).pow(224));
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

    return big(0.99).pow(levels.min(levels.pow(0.5).mult(14)));
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
functions["upg_a07_power"] = (amt) => {
    let levels = big(amt);
    if ('a07' in free_atom_levels) levels = levels.add(free_atom_levels['a07']);

    return big(levels).add(1).pow(3);
}
functions["upg_a08_power"] = (amt) => {
    let levels = big(amt);
    if ('a08' in free_atom_levels) levels = levels.add(free_atom_levels['a08']);

    return big(1.06).pow(levels);
}
functions["upg_a09_power"] = (amt) => {
    let levels = big(amt);
    if ('a09' in free_atom_levels) levels = levels.add(free_atom_levels['a09']);

    return big(levels).add(1).log(3).div(10).add(1);
}
functions["upg_a10_power"] = (amt) => {
    let levels = big(amt);
    // Not affected by free levels

    return big(levels).add(1).log(10).div(3).add(1);
}
functions["upg_a11_power"] = (amt) => {
    let levels = big(amt);
    if ('a11' in free_atom_levels) levels = levels.add(free_atom_levels['a11']);

    return big(levels).add(1);
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
functions["upg_a07_unlock"] = () => {
    return true;
}
functions["upg_a08_unlock"] = () => {
    return true;
}
functions["upg_a09_unlock"] = () => {
    return true;
}
functions["upg_a10_unlock"] = () => {
    return true;
}
functions["upg_a11_unlock"] = () => {
    return true;
}



functions["upg_a01_available"] = () => {
    return highest_unlocked_element() >= 1;
}
functions["upg_a02_available"] = () => {
    return highest_unlocked_element() >= 2;
}
functions["upg_a03_available"] = () => {
    return highest_unlocked_element() >= 3;
}
functions["upg_a04_available"] = () => {
    return highest_unlocked_element() >= 4;
}
functions["upg_a05_available"] = () => {
    return highest_unlocked_element() >= 5;
}
functions["upg_a06_available"] = () => {
    return highest_unlocked_element() >= 6;
}
functions["upg_a07_available"] = () => {
    return highest_unlocked_element() >= 7;
}
functions["upg_a08_available"] = () => {
    return highest_unlocked_element() >= 8;
}
functions["upg_a09_available"] = () => {
    return highest_unlocked_element() >= 9;
}
functions["upg_a10_available"] = () => {
    return highest_unlocked_element() >= 10;
}
functions["upg_a11_available"] = () => {
    return highest_unlocked_element() >= 11;
}