functions["upg_v01_cost"] = (amt) => {
    let base_amt = big(amt);
    // d51: reduce cost scaling
    base_amt = base_amt.div(player.upgrades['d51'].get_effect());
    // ultraviolet waves reduce cost scaling
    base_amt = base_amt.div(wave_effect('ultraviolet'));
    // Vacuumic Challenge 6 reward: /1.006 to cost scaling
    if (player.challenges['v6'].completed) base_amt = base_amt.div(1.006);

    return big(1.048).pow(big(2).pow(base_amt));
}
functions["upg_v02_cost"] = (amt) => {
    let base_amt = big(amt);
    // d51: reduce cost scaling
    base_amt = base_amt.div(player.upgrades['d51'].get_effect());
    // ultraviolet waves reduce cost scaling
    base_amt = base_amt.div(wave_effect('ultraviolet'));
    // Vacuumic Challenge 6 reward: /1.006 to cost scaling
    if (player.challenges['v6'].completed) base_amt = base_amt.div(1.006);

    return big(1.2).pow(big(3).pow(base_amt));
}
functions["upg_v03_cost"] = (amt) => {
    let base_amt = big(amt);
    // d51: reduce cost scaling
    base_amt = base_amt.div(player.upgrades['d51'].get_effect());
    // ultraviolet waves reduce cost scaling
    base_amt = base_amt.div(wave_effect('ultraviolet'));
    // Vacuumic Challenge 6 reward: /1.006 to cost scaling
    if (player.challenges['v6'].completed) base_amt = base_amt.div(1.006);

    return big(3.5).pow(big(1.5).pow(base_amt)).mult(3);
}
functions["upg_v11_cost"] = (amt) => {
    return big(1);
}
functions["upg_v21_cost"] = (amt) => {
    return big(1);
}
functions["upg_v31_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v31'].amt > 0) paths_taken += 1;
    if (player.upgrades['v32'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v32_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v31'].amt > 0) paths_taken += 1;
    if (player.upgrades['v32'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v41_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v41'].amt > 0) paths_taken += 1;
    if (player.upgrades['v42'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v42_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v41'].amt > 0) paths_taken += 1;
    if (player.upgrades['v42'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v51_cost"] = (amt) => {
    return big(1);
}
functions["upg_v61_cost"] = (amt) => {
    return big(1);
}
functions["upg_v71_cost"] = (amt) => {
    return big(1);
}
functions["upg_v72_cost"] = (amt) => {
    return big(1);
}
functions["upg_v81_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v81'].amt > 0) paths_taken += 1;
    if (player.upgrades['v82'].amt > 0) paths_taken += 1;
    if (player.upgrades['v83'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v82_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v81'].amt > 0) paths_taken += 1;
    if (player.upgrades['v82'].amt > 0) paths_taken += 1;
    if (player.upgrades['v83'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v83_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v81'].amt > 0) paths_taken += 1;
    if (player.upgrades['v82'].amt > 0) paths_taken += 1;
    if (player.upgrades['v83'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v91_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v91'].amt > 0) paths_taken += 1;
    if (player.upgrades['v92'].amt > 0) paths_taken += 1;
    if (player.upgrades['v93'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v92_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v91'].amt > 0) paths_taken += 1;
    if (player.upgrades['v92'].amt > 0) paths_taken += 1;
    if (player.upgrades['v93'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v93_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v91'].amt > 0) paths_taken += 1;
    if (player.upgrades['v92'].amt > 0) paths_taken += 1;
    if (player.upgrades['v93'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v101_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v101'].amt > 0) paths_taken += 1;
    if (player.upgrades['v102'].amt > 0) paths_taken += 1;
    if (player.upgrades['v103'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v102_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v101'].amt > 0) paths_taken += 1;
    if (player.upgrades['v102'].amt > 0) paths_taken += 1;
    if (player.upgrades['v103'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v103_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v101'].amt > 0) paths_taken += 1;
    if (player.upgrades['v102'].amt > 0) paths_taken += 1;
    if (player.upgrades['v103'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v111_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v111'].amt > 0) paths_taken += 1;
    if (player.upgrades['v112'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v112_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v111'].amt > 0) paths_taken += 1;
    if (player.upgrades['v112'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v121_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v121'].amt > 0) paths_taken += 1;
    if (player.upgrades['v122'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v122_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v121'].amt > 0) paths_taken += 1;
    if (player.upgrades['v122'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v131_cost"] = (amt) => {
    return big(1);
}
functions["upg_v141_cost"] = (amt) => {
    return big(1);
}
functions["upg_v142_cost"] = (amt) => {
    return big(1);
}
functions["upg_v143_cost"] = (amt) => {
    return big(1);
}
functions["upg_v151_cost"] = (amt) => {
    return big(1);
}
functions["upg_v161_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v161'].amt > 0) paths_taken += 1;
    if (player.upgrades['v162'].amt > 0) paths_taken += 1;
    if (player.upgrades['v163'].amt > 0) paths_taken += 1;
    if (player.upgrades['v164'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v162_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v161'].amt > 0) paths_taken += 1;
    if (player.upgrades['v162'].amt > 0) paths_taken += 1;
    if (player.upgrades['v163'].amt > 0) paths_taken += 1;
    if (player.upgrades['v164'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v163_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v161'].amt > 0) paths_taken += 1;
    if (player.upgrades['v162'].amt > 0) paths_taken += 1;
    if (player.upgrades['v163'].amt > 0) paths_taken += 1;
    if (player.upgrades['v164'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v164_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v161'].amt > 0) paths_taken += 1;
    if (player.upgrades['v162'].amt > 0) paths_taken += 1;
    if (player.upgrades['v163'].amt > 0) paths_taken += 1;
    if (player.upgrades['v164'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v171_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v171'].amt > 0) paths_taken += 1;
    if (player.upgrades['v172'].amt > 0) paths_taken += 1;
    if (player.upgrades['v173'].amt > 0) paths_taken += 1;
    if (player.upgrades['v174'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v172_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v171'].amt > 0) paths_taken += 1;
    if (player.upgrades['v172'].amt > 0) paths_taken += 1;
    if (player.upgrades['v173'].amt > 0) paths_taken += 1;
    if (player.upgrades['v174'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v173_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v171'].amt > 0) paths_taken += 1;
    if (player.upgrades['v172'].amt > 0) paths_taken += 1;
    if (player.upgrades['v173'].amt > 0) paths_taken += 1;
    if (player.upgrades['v174'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v174_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v171'].amt > 0) paths_taken += 1;
    if (player.upgrades['v172'].amt > 0) paths_taken += 1;
    if (player.upgrades['v173'].amt > 0) paths_taken += 1;
    if (player.upgrades['v174'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v181_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v181'].amt > 0) paths_taken += 1;
    if (player.upgrades['v182'].amt > 0) paths_taken += 1;
    if (player.upgrades['v183'].amt > 0) paths_taken += 1;
    if (player.upgrades['v184'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v182_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v181'].amt > 0) paths_taken += 1;
    if (player.upgrades['v182'].amt > 0) paths_taken += 1;
    if (player.upgrades['v183'].amt > 0) paths_taken += 1;
    if (player.upgrades['v184'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v183_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v181'].amt > 0) paths_taken += 1;
    if (player.upgrades['v182'].amt > 0) paths_taken += 1;
    if (player.upgrades['v183'].amt > 0) paths_taken += 1;
    if (player.upgrades['v184'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v184_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v181'].amt > 0) paths_taken += 1;
    if (player.upgrades['v182'].amt > 0) paths_taken += 1;
    if (player.upgrades['v183'].amt > 0) paths_taken += 1;
    if (player.upgrades['v184'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v191_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v191'].amt > 0) paths_taken += 1;
    if (player.upgrades['v192'].amt > 0) paths_taken += 1;
    if (player.upgrades['v193'].amt > 0) paths_taken += 1;
    if (player.upgrades['v194'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v192_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v191'].amt > 0) paths_taken += 1;
    if (player.upgrades['v192'].amt > 0) paths_taken += 1;
    if (player.upgrades['v193'].amt > 0) paths_taken += 1;
    if (player.upgrades['v194'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v193_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v191'].amt > 0) paths_taken += 1;
    if (player.upgrades['v192'].amt > 0) paths_taken += 1;
    if (player.upgrades['v193'].amt > 0) paths_taken += 1;
    if (player.upgrades['v194'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v194_cost"] = (amt) => {
    let base_cost = big(1);

    let paths_taken = 0;
    if (player.upgrades['v191'].amt > 0) paths_taken += 1;
    if (player.upgrades['v192'].amt > 0) paths_taken += 1;
    if (player.upgrades['v193'].amt > 0) paths_taken += 1;
    if (player.upgrades['v194'].amt > 0) paths_taken += 1;

    // v201: each new path is twice more expensive
    if (player.upgrades['v201'].is_active()) base_cost = base_cost.mult(big(2).pow(paths_taken));

    // Vacuumic Challenge 8 reward: discount if >= 2 paths taken
    if (player.challenges['v8'].completed && paths_taken >= 2) base_cost = base_cost.div(2);

    return base_cost;
}
functions["upg_v201_cost"] = (amt) => {
    return big(1);
}
functions["upg_v211_cost"] = (amt) => {
    return big(1);
}

functions["upg_v01_power"] = (amt) => {
    return big(1);
}
functions["upg_v02_power"] = (amt) => {
    return big(1);
}
functions["upg_v03_power"] = (amt) => {
    return big(1);
}
functions["upg_v11_power"] = (amt) => {
    let base_reward = unlocked_layers();
    if (player.unlocked_photonic) base_reward -= 1;
    if (player.unlocked_gravitonic) base_reward -= 1;
    if (player.unlocked_neutronic) base_reward -= 1;
    return big(2).pow(base_reward - 1);
}
functions["upg_v21_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1e10);
}
functions["upg_v31_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(4);
}
functions["upg_v32_power"] = (amt) => {
    return player.matter.add(1).log(10).add(1);
}
functions["upg_v41_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(2);
}
functions["upg_v42_power"] = (amt) => {
    if (amt == 0) return big(1);
    if (player.matter.lt(1e10)) return big(1);
    return big(10000);
}
functions["upg_v51_power"] = (amt) => {
    return big(1);
}
functions["upg_v61_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1e48);
}
functions["upg_v71_power"] = (amt) => {
    return big(1);
}
functions["upg_v72_power"] = (amt) => {
    return big(1);
}
functions["upg_v81_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1e40);
}
functions["upg_v82_power"] = (amt) => {
    return big(1);
}
functions["upg_v83_power"] = (amt) => {
    return player.black_holes.add(1).log(10);
}
functions["upg_v91_power"] = (amt) => {
    return big(player.dimensions['matter_1'].amt_bought).min(200);
}
functions["upg_v92_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1e80);
}
functions["upg_v93_power"] = (amt) => {
    if (amt == 0) return big(2);
    else return big(10);
}
functions["upg_v101_power"] = (amt) => {
    return player.dimensions['matter_1'].get_production_one().mult(player.dimensions['matter_2'].get_production_one()).pow(0.3).max(1);
}
functions["upg_v102_power"] = (amt) => {
    return player.upgrades["TICKSPEED"].get_effect().add(1).log(10).max(1);
}
functions["upg_v103_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1e120);
}
functions["upg_v111_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1e6);
}
functions["upg_v112_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(10);
}
functions["upg_v121_power"] = (amt) => {
    return player.dimensions['matter_4'].get_production_one().pow(2);
}
functions["upg_v122_power"] = (amt) => {
    return player.dimensions['matter_2'].get_production_one().pow(0.5);
}
functions["upg_v131_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(13.1);
}
functions["upg_v141_power"] = (amt) => {
    return big(1);
}
functions["upg_v142_power"] = (amt) => {
    return big(1);
}
functions["upg_v143_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1e10).pow(player.space_theorems.add(1));
}
functions["upg_v151_power"] = (amt) => {
    if (amt == 0) return big(1);
    else return big(1.15);
}
functions["upg_v161_power"] = (amt) => {
    return big(player.photonic_resets).pow(1.5).add(1);
}
functions["upg_v162_power"] = (amt) => {
    return big(player.gravitonic_resets).pow(2).add(1);
}
functions["upg_v163_power"] = (amt) => {
    return big(player.neutronic_resets).pow(0.35).add(1);
}
functions["upg_v164_power"] = (amt) => {
    return big(player.vacuumic_resets).pow(0.35).add(1);
}
functions["upg_v171_power"] = (amt) => {
    return prestige_earn_photons().add(1).log(10).mult(2).add(1).rounddown();
}
functions["upg_v172_power"] = (amt) => {
    let gc_completed = 0;

    for (let key of Object.keys(player.challenges)) {
        if (player.challenges[key].layer == "gravitonic" && player.challenges[key].completed) gc_completed += 1;
        if (player.challenges[key].layer == "neutronic") gc_completed += player.challenges[key].completions / 2;
    }

    return big(1).add(gc_completed).max(big(gc_completed).pow(gc_completed).div(100));
}
functions["upg_v173_power"] = (amt) => {
    if (amt == 0) return big(1);

    let gdim_bought = big(0);

    for (let key of Object.keys(player.dimensions)) {
        if (key.includes("gravitonic_")) {
            gdim_bought = gdim_bought.add(player.dimensions[key].amt_bought);
        }
    }

    return big(1.4).pow(gdim_bought);
}
functions["upg_v174_power"] = (amt) => {
    if (amt == 0) return big(1);
    return big(1.2);
}
functions["upg_v181_power"] = (amt) => {
    return player.max_photons_at_once.add(1).log(10).pow(0.5).mult(3);
}
functions["upg_v182_power"] = (amt) => {
    return player.max_matter.add(1).log(10).add(1).pow(3);
}
functions["upg_v183_power"] = (amt) => {
    return power_black_holes_resource_limit();
}
functions["upg_v184_power"] = (amt) => {
    if (amt == 0) return big(1);
    return big(10);
}
functions["upg_v191_power"] = (amt) => {
    return player.light.pow(0.25).max(1);
}
functions["upg_v192_power"] = (amt) => {
    return power_stars_photonic_dim();
}
functions["upg_v193_power"] = (amt) => {
    return power_stars_black_holes();
}
functions["upg_v194_power"] = (amt) => {
    return big(1);
}
functions["upg_v201_power"] = (amt) => {
    return big(1);
}
functions["upg_v211_power"] = (amt) => {
    return big_number_from_raw_data(true, 1, 1e298);
}


functions["upg_v01_unlock"] = () => {
    return true;
}
functions["upg_v02_unlock"] = () => {
    // d32: you can buy Space Theorems with 3rd Matter Dimensions
    return player.upgrades['d32'].is_active();
}
functions["upg_v03_unlock"] = () => {
    // d31: you can buy Space Theorems with Neutrons
    return player.upgrades['d31'].is_active();
}
functions["upg_v11_unlock"] = () => {
    return true;
}
functions["upg_v21_unlock"] = () => {
    return player.upgrades['v11'].amt > 0;
}
functions["upg_v31_unlock"] = () => {
    if (player.upgrades['v21'].amt == 0) return false;

    // v201: can pick any paths
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v32'].amt == 0) return true;
    return false;
}
functions["upg_v32_unlock"] = () => {
    if (player.upgrades['v21'].amt == 0) return false;

    // v201: can pick any paths
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v31'].amt == 0) return true;
    return false;
}
functions["upg_v41_unlock"] = () => {
    return player.upgrades['v31'].amt > 0;
}
functions["upg_v42_unlock"] = () => {
    return player.upgrades['v32'].amt > 0;
}
functions["upg_v51_unlock"] = () => {
    return player.upgrades['v41'].amt > 0 || player.upgrades['v42'].amt > 0;
}
functions["upg_v61_unlock"] = () => {
    return player.upgrades['v51'].amt > 0;
}
functions["upg_v71_unlock"] = () => {
    return player.upgrades['v61'].amt > 0;
}
functions["upg_v72_unlock"] = () => {
    return player.upgrades['v61'].amt > 0 && player.upgrades['v71'].amt > 0;
}
functions["upg_v81_unlock"] = () => {
    if (player.upgrades['v71'].amt == 0 || player.upgrades['v61'].amt == 0) return false;

    // v201: can pick any paths
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v82'].amt == 0 && player.upgrades['v83'].amt == 0) return true;
    return false;
}
functions["upg_v82_unlock"] = () => {
    if (player.upgrades['v71'].amt == 0 || player.upgrades['v61'].amt == 0) return false;

    // v201: can pick any paths
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v81'].amt == 0 && player.upgrades['v83'].amt == 0) return true;
    return false;
}
functions["upg_v83_unlock"] = () => {
    if (player.upgrades['v71'].amt == 0 || player.upgrades['v61'].amt == 0) return false;

    // v201: can pick any paths
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v81'].amt == 0 && player.upgrades['v82'].amt == 0) return true;
    return false;
}
functions["upg_v91_unlock"] = () => {
    return player.upgrades['v81'].amt > 0;
}
functions["upg_v92_unlock"] = () => {
    return player.upgrades['v82'].amt > 0;
}
functions["upg_v93_unlock"] = () => {
    return player.upgrades['v83'].amt > 0;
}
functions["upg_v101_unlock"] = () => {
    return player.upgrades['v91'].amt > 0;
}
functions["upg_v102_unlock"] = () => {
    return player.upgrades['v92'].amt > 0;
}
functions["upg_v103_unlock"] = () => {
    return player.upgrades['v93'].amt > 0;
}
functions["upg_v111_unlock"] = () => {
    if (player.upgrades['v101'].amt == 0 && player.upgrades['v102'].amt == 0) return false;

    // v201: can pick any paths
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v112'].amt == 0) return true;
    return false;
}
functions["upg_v112_unlock"] = () => {
    if (player.upgrades['v102'].amt == 0 && player.upgrades['v103'].amt == 0) return false;

    // v201: can pick any paths
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v111'].amt == 0) return true;
    return false;
}
functions["upg_v121_unlock"] = () => {
    return player.upgrades['v111'].amt > 0;
}
functions["upg_v122_unlock"] = () => {
    return player.upgrades['v112'].amt > 0;
}
functions["upg_v131_unlock"] = () => {
    return player.upgrades['v121'].amt > 0 || player.upgrades['v122'].amt > 0;
}
functions["upg_v141_unlock"] = () => {
    return player.upgrades['v142'].amt > 0;
}
functions["upg_v142_unlock"] = () => {
    return player.upgrades['v131'].amt > 0;
}
functions["upg_v143_unlock"] = () => {
    return player.upgrades['v142'].amt > 0;
}
functions["upg_v151_unlock"] = () => {
    return player.upgrades['v142'].amt > 0;
}
functions["upg_v161_unlock"] = () => {
    if (player.upgrades['v151'].amt == 0) return false;
    // v201: you can pick all paths from splits
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v162'].amt == 0 && player.upgrades['v163'].amt == 0 && player.upgrades['v164'].amt == 0) return true;
    return false;
}
functions["upg_v162_unlock"] = () => {
    if (player.upgrades['v151'].amt == 0) return false;
    // v201: you can pick all paths from splits
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v161'].amt == 0 && player.upgrades['v163'].amt == 0 && player.upgrades['v164'].amt == 0) return true;
    return false;
}
functions["upg_v163_unlock"] = () => {
    if (player.upgrades['v151'].amt == 0) return false;
    // v201: you can pick all paths from splits
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v161'].amt == 0 && player.upgrades['v162'].amt == 0 && player.upgrades['v164'].amt == 0) return true;
    return false;
}
functions["upg_v164_unlock"] = () => {
    if (player.upgrades['v151'].amt == 0) return false;
    // v201: you can pick all paths from splits
    if (player.upgrades['v201'].is_active()) return true;
    if (player.upgrades['v161'].amt == 0 && player.upgrades['v162'].amt == 0 && player.upgrades['v163'].amt == 0) return true;
    return false;
}
functions["upg_v171_unlock"] = () => {
    return player.upgrades['v161'].amt > 0;
}
functions["upg_v172_unlock"] = () => {
    return player.upgrades['v162'].amt > 0;
}
functions["upg_v173_unlock"] = () => {
    return player.upgrades['v163'].amt > 0;
}
functions["upg_v174_unlock"] = () => {
    return player.upgrades['v164'].amt > 0;
}
functions["upg_v181_unlock"] = () => {
    return player.upgrades['v171'].amt > 0;
}
functions["upg_v182_unlock"] = () => {
    return player.upgrades['v172'].amt > 0;
}
functions["upg_v183_unlock"] = () => {
    return player.upgrades['v173'].amt > 0;
}
functions["upg_v184_unlock"] = () => {
    return player.upgrades['v174'].amt > 0;
}
functions["upg_v191_unlock"] = () => {
    return player.upgrades['v181'].amt > 0;
}
functions["upg_v192_unlock"] = () => {
    return player.upgrades['v182'].amt > 0;
}
functions["upg_v193_unlock"] = () => {
    return player.upgrades['v183'].amt > 0;
}
functions["upg_v194_unlock"] = () => {
    return player.upgrades['v184'].amt > 0;
}
functions["upg_v201_unlock"] = () => {
    return player.upgrades['v191'].amt > 0 || player.upgrades['v192'].amt > 0 || player.upgrades['v193'].amt > 0 || player.upgrades['v194'].amt > 0;
}
functions["upg_v211_unlock"] = () => {
    return player.upgrades['v201'].amt > 0 && player.challenge_strength_4.gt(big(2).pow(1024));
}


functions["upg_v01_available"] = () => {
    return true;
}
functions["upg_v02_available"] = () => {
    // d32: you can buy Space Theorems with 3rd Matter Dimensions
    return player.upgrades['d32'].is_active();
}
functions["upg_v03_available"] = () => {
    // d31: you can buy Space Theorems with Neutrons
    return player.upgrades['d31'].is_active();
}
functions["upg_v11_available"] = () => {
    return true;
}
functions["upg_v21_available"] = () => {
    return true;
}
functions["upg_v31_available"] = () => {
    return true;
}
functions["upg_v32_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v41_available"] = () => {
    return true;
}
functions["upg_v42_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v51_available"] = () => {
    return true;
}
functions["upg_v61_available"] = () => {
    return true;
}
functions["upg_v71_available"] = () => {
    return true;
}
functions["upg_v72_available"] = () => {
    return true;
}
functions["upg_v81_available"] = () => {
    return true;
}
functions["upg_v82_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v83_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v91_available"] = () => {
    return true;
}
functions["upg_v92_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v93_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v101_available"] = () => {
    return true;
}
functions["upg_v102_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v103_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v111_available"] = () => {
    return true;
}
functions["upg_v112_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v121_available"] = () => {
    return true;
}
functions["upg_v122_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v131_available"] = () => {
    return true;
}
functions["upg_v141_available"] = () => {
    return true;
}
functions["upg_v142_available"] = () => {
    return true;
}
functions["upg_v143_available"] = () => {
    return true;
}
functions["upg_v151_available"] = () => {
    return true;
}
functions["upg_v161_available"] = () => {
    return true;
}
functions["upg_v162_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v163_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v164_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v171_available"] = () => {
    return true;
}
functions["upg_v172_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v173_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v174_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v181_available"] = () => {
    return true;
}
functions["upg_v182_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v183_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v184_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v191_available"] = () => {
    return true;
}
functions["upg_v192_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v193_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v194_available"] = () => {
    // Vacuumic Challenge 8: only leftmost paths are available
    if (player.challenges['v8'].inC()) return false;
    return true;
}
functions["upg_v201_available"] = () => {
    return true;
}
functions["upg_v211_available"] = () => {
    return true;
}


functions["upg_v01_buy"] = (amt) => {
    // Challenge 4: all resources are capped
    player.space_theorems = player.space_theorems.add(amt).round().min(player.challenge_strength_4);
}
functions["upg_v02_buy"] = (amt) => {
    // Challenge 4: all resources are capped
    player.space_theorems = player.space_theorems.add(amt).round().min(player.challenge_strength_4);
}
functions["upg_v03_buy"] = (amt) => {
    // Challenge 4: all resources are capped
    player.space_theorems = player.space_theorems.add(amt).round().min(player.challenge_strength_4);
}
functions["upg_v11_buy"] = (amt) => {
    if (amt == 0) return;
    // Challenge 4: all resources are capped
    player.neutrons = player.neutrons.add(player.upgrades['v11'].get_effect()).round().min(player.challenge_strength_4);
}