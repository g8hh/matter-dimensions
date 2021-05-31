functions["a01_1_availability"] = () => {
    return true;
}
functions["a01_2_availability"] = () => {
    return true;
}
functions["a01_3_availability"] = () => {
    return true;
}
functions["a01_4_availability"] = () => {
    return true;
}

functions["a02_1_availability"] = () => {
    return true;
}
functions["a02_2_availability"] = () => {
    return true;
}
functions["a02_3_availability"] = () => {
    return true;
}
functions["a02_4_availability"] = () => {
    return true;
}

functions["a03_1_availability"] = () => {
    return true;
}
functions["a03_2_availability"] = () => {
    return true;
}
functions["a03_3_availability"] = () => {
    return true;
}
functions["a03_4_availability"] = () => {
    return true;
}

functions["a04_1_availability"] = () => {
    return true;
}
functions["a04_2_availability"] = () => {
    return true;
}
functions["a04_3_availability"] = () => {
    return true;
}
functions["a04_4_availability"] = () => {
    return true;
}

functions["a05_1_availability"] = () => {
    return true;
}
functions["a05_2_availability"] = () => {
    return true;
}
functions["a05_3_availability"] = () => {
    return true;
}
functions["a05_4_availability"] = () => {
    return true;
}

functions["a06_1_availability"] = () => {
    return true;
}
functions["a06_2_availability"] = () => {
    return true;
}
functions["a06_3_availability"] = () => {
    return true;
}
functions["a06_4_availability"] = () => {
    return true;
}

functions["a07_1_availability"] = () => {
    return true;
}
functions["a07_2_availability"] = () => {
    return true;
}
functions["a07_3_availability"] = () => {
    return true;
}

functions["a08_1_availability"] = () => {
    return true;
}
functions["a08_2_availability"] = () => {
    return true;
}

functions["a09_1_availability"] = () => {
    return true;
}

functions["a10_1_availability"] = () => {
    return true;
}

functions["a11_1_availability"] = () => {
    return true;
}

functions["a12_1_availability"] = () => {
    return true;
}

functions["a13_1_availability"] = () => {
    return true;
}

functions["a14_1_availability"] = () => {
    return true;
}



functions["a01_1_activation"] = () => {
    return get_atom_level('a01').gt(1 - 0.5);
}
functions["a01_2_activation"] = () => {
    return get_atom_level('a01').gt(2 - 0.5);
}
functions["a01_3_activation"] = () => {
    return get_atom_level('a01').gt(12 - 0.5) || player.unlocked_st_autobuyers;
}
functions["a01_4_activation"] = () => {
    return get_atom_level('a01').gt(121 - 0.5);
}

functions["a02_1_activation"] = () => {
    return get_atom_level('a02').gt(1 - 0.5);
}
functions["a02_2_activation"] = () => {
    return get_atom_level('a02').gt(6 - 0.5);
}
functions["a02_3_activation"] = () => {
    return get_atom_level('a02').gt(60 - 0.5);
}
functions["a02_4_activation"] = () => {
    return get_atom_level('a02').gt(600 - 0.5);
}

functions["a03_1_activation"] = () => {
    return get_atom_level('a03').gt(1 - 0.5);
}
functions["a03_2_activation"] = () => {
    return get_atom_level('a03').gt(2 - 0.5);
}
functions["a03_3_activation"] = () => {
    return get_atom_level('a03').gt(6 - 0.5);
}
functions["a03_4_activation"] = () => {
    return get_atom_level('a03').gt(24 - 0.5);
}

functions["a04_1_activation"] = () => {
    return get_atom_level('a04').gt(1 - 0.5) || player.unlocked_wave_autobuyers;
}
functions["a04_2_activation"] = () => {
    return get_atom_level('a04').gt(12 - 0.5);
}
functions["a04_3_activation"] = () => {
    return get_atom_level('a04').gt(144 - 0.5);
}
functions["a04_4_activation"] = () => {
    return get_atom_level('a04').gt(1728 - 0.5);
}

functions["a05_1_activation"] = () => {
    return get_atom_level('a05').gt(1 - 0.5);
}
functions["a05_2_activation"] = () => {
    return get_atom_level('a05').gt(10 - 0.5) || player.uncapped_atoms;
}
functions["a05_3_activation"] = () => {
    return get_atom_level('a05').gt(100 - 0.5);
}
functions["a05_4_activation"] = () => {
    return get_atom_level('a05').gt(1000 - 0.5);
}

functions["a06_1_activation"] = () => {
    return get_atom_level('a06').gt(1 - 0.5);
}
functions["a06_2_activation"] = () => {
    return get_atom_level('a06').gt(25 - 0.5);
}
functions["a06_3_activation"] = () => {
    return get_atom_level('a06').gt(625 - 0.5);
}
functions["a06_4_activation"] = () => {
    return get_atom_level('a06').gt(3125 - 0.5);
}

functions["a07_1_activation"] = () => {
    return get_atom_level('a07').gt(1 - 0.5);
}
functions["a07_2_activation"] = () => {
    return get_atom_level('a07').gt(14 - 0.5);
}
functions["a07_3_activation"] = () => {
    return get_atom_level('a07').gt(1680 - 0.5);
}

functions["a08_1_activation"] = () => {
    return get_atom_level('a08').gt(1 - 0.5);
}
functions["a08_2_activation"] = () => {
    return get_atom_level('a08').gt(1000 - 0.5);
}

functions["a09_1_activation"] = () => {
    return get_atom_level('a09').gt(9 - 0.5);
}

functions["a10_1_activation"] = () => {
    return get_atom_level('a10').gt(1 - 0.5);
}

functions["a11_1_activation"] = () => {
    return get_atom_level('a11').gt(11 - 0.5);
}

functions["a12_1_activation"] = () => {
    return get_atom_level('a12').gt(1 - 0.5);
}

functions["a13_1_activation"] = () => {
    return get_atom_level('a13').gt(13 - 0.5);
}

functions["a14_1_activation"] = () => {
    return player.upgrades['a14'].is_active() && big(player.upgrades['a14'].amt).gt(1 - 0.5);
}



functions["a01_1_effect"] = () => {
    let base_reward = unlocked_layers();
    if (player.unlocked_photonic) base_reward -= 1;
    if (player.unlocked_gravitonic) base_reward -= 1;
    if (player.unlocked_neutronic) base_reward -= 1;
    if (player.unlocked_vacuumic) base_reward -= 1;
    if (player.unlocked_dimensional) base_reward -= 1;
    return big(2).pow(base_reward - 1);
}
functions["a01_2_effect"] = () => {
    return get_atom_level('a01').max(1);
}
functions["a01_3_effect"] = () => {
    return big(1);
}
functions["a01_4_effect"] = () => {
    return big(1);
}

functions["a02_1_effect"] = () => {
    return big(1.1);
}
functions["a02_2_effect"] = () => {
    let dimensional_resets = 0;
    // d21: unlock new Dimension
    if (player.upgrades['d21'].is_active()) dimensional_resets += 1;
    // d41: unlock new Dimension
    if (player.upgrades['d41'].is_active()) dimensional_resets += 1;
    // d81: unlock new Dimension
    if (player.upgrades['d81'].is_active()) dimensional_resets += 1;
    // d141: unlock new Dimension
    if (player.upgrades['d141'].is_active()) dimensional_resets += 1;
    // d151: unlock new Dimension
    if (player.upgrades['d151'].is_active()) dimensional_resets += 1;

    return big(6).mult(dimensional_resets);
}
functions["a02_3_effect"] = () => {
    return player.upgrades['TICKSPEED'].get_effect().add(1).log(10).max(1);
}
functions["a02_4_effect"] = () => {
    return big(1);
}

functions["a03_1_effect"] = () => {
    return get_atom_level('a03').add(1);
}
functions["a03_2_effect"] = () => {
    return big(1);
}
functions["a03_3_effect"] = () => {
    let levels = get_atom_level('a03');
    if (levels.lt(10)) return levels.div(10).add(1);
    else return levels.div(40).add(1.75);
}
functions["a03_4_effect"] = () => {
    return big(1);
}

functions["a04_1_effect"] = () => {
    return big(1);
}
functions["a04_2_effect"] = () => {
    return big(1);
}
functions["a04_3_effect"] = () => {
    return big(1);
}
functions["a04_4_effect"] = () => {
    return big(1);
}

functions["a05_1_effect"] = () => {
    return big(1);
}
functions["a05_2_effect"] = () => {
    return big(1);
}
functions["a05_3_effect"] = () => {
    return big(1);
}
functions["a05_4_effect"] = () => {
    return big(1);
}

functions["a06_1_effect"] = () => {
    return big(1);
}
functions["a06_2_effect"] = () => {
    return get_atom_level('a06').pow(0.5).add(1);
}
functions["a06_3_effect"] = () => {
    return get_atom_level('a06').pow(8).max(2);
}
functions["a06_4_effect"] = () => {
    return big(1);
}

functions["a07_1_effect"] = () => {
    return big(1);
}
functions["a07_2_effect"] = () => {
    return big(1);
}
functions["a07_3_effect"] = () => {
    return big(1);
}

functions["a08_1_effect"] = () => {
    return big(1.1);
}
functions["a08_2_effect"] = () => {
    return big(1);
}

functions["a09_1_effect"] = () => {
    return big(2).add(alpha_reactions_active);
}

functions["a10_1_effect"] = () => {
    return big(3);
}

functions["a11_1_effect"] = () => {
    if (player.upgrades['TICKSPEED'].is_active()) return big(2).pow(get_tickspeed_amount().max(0).add(1).log(2).pow(2));
    else return big(2).pow(get_tickspeed_amount(0).max(0).add(1).log(2).pow(2));
}

functions["a12_1_effect"] = () => {
    return big(6);
}

functions["a13_1_effect"] = () => {
    return big(1.03);
}

functions["a14_1_effect"] = () => {
    return big(70);
}



functions["a01_1_goal"] = () => {
    return big(1);
}
functions["a01_2_goal"] = () => {
    return big(2);
}
functions["a01_3_goal"] = () => {
    return big(12);
}
functions["a01_4_goal"] = () => {
    return big(121);
}

functions["a02_1_goal"] = () => {
    return big(1);
}
functions["a02_2_goal"] = () => {
    return big(6);
}
functions["a02_3_goal"] = () => {
    return big(60);
}
functions["a02_4_goal"] = () => {
    return big(600);
}

functions["a03_1_goal"] = () => {
    return big(1);
}
functions["a03_2_goal"] = () => {
    return big(2);
}
functions["a03_3_goal"] = () => {
    return big(6);
}
functions["a03_4_goal"] = () => {
    return big(24);
}

functions["a04_1_goal"] = () => {
    return big(1);
}
functions["a04_2_goal"] = () => {
    return big(12);
}
functions["a04_3_goal"] = () => {
    return big(144);
}
functions["a04_4_goal"] = () => {
    return big(1728);
}

functions["a05_1_goal"] = () => {
    return big(1);
}
functions["a05_2_goal"] = () => {
    return big(10);
}
functions["a05_3_goal"] = () => {
    return big(100);
}
functions["a05_4_goal"] = () => {
    return big(1000);
}

functions["a06_1_goal"] = () => {
    return big(1);
}
functions["a06_2_goal"] = () => {
    return big(25);
}
functions["a06_3_goal"] = () => {
    return big(625);
}
functions["a06_4_goal"] = () => {
    return big(3125);
}

functions["a07_1_goal"] = () => {
    return big(1);
}
functions["a07_2_goal"] = () => {
    return big(14);
}
functions["a07_3_goal"] = () => {
    return big(1680);
}

functions["a08_1_goal"] = () => {
    return big(1);
}
functions["a08_2_goal"] = () => {
    return big(1000);
}

functions["a09_1_goal"] = () => {
    return big(9);
}

functions["a10_1_goal"] = () => {
    return big(1);
}

functions["a11_1_goal"] = () => {
    return big(11);
}

functions["a12_1_goal"] = () => {
    return big(1);
}

functions["a13_1_goal"] = () => {
    return big(13);
}

functions["a14_1_goal"] = () => {
    return big(1);
}