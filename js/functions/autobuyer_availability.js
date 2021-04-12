functions["autobuyer_matter_1_available"] = () => {
    // g41: unlock 1st Matter Dimension autobuyer
    return me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_2_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_3_available"] = () => {
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_4_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_5_available"] = () => {
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_6_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_7_available"] = () => {
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_8_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_9_available"] = () => {
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_10_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_11_available"] = () => {
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_matter_12_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // g41: unlock 1st Matter Dimension autobuyer
    // Gravitonic Challenge 4 reward: unlock other Matter Dimension autobuyers if 1st Matter Dimension autobuyer is active
    return me.challenges['g4'].completed && me.upgrades["g41"].is_active();
};

functions["autobuyer_photonic_available"] = () => {
    // g42: unlock Photonic reset autobuyer
    return me.upgrades["g42"].is_active();
};

functions["autobuyer_photonic_upgrades_available"] = () => {
    // achievement 72: unlock autobuyer for Photonic upgrades
    return me.achievements['72'].complete;
};

functions["autobuyer_photonic_1_available"] = () => {
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_2_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_3_available"] = () => {
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_4_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_5_available"] = () => {
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_6_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_7_available"] = () => {
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_8_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_9_available"] = () => {
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_10_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_11_available"] = () => {
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_photonic_12_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // v71: unlock Photonic Dimension autobuyers
    return me.upgrades["v71"].is_active();
};

functions["autobuyer_gravitonic_available"] = () => {
    // AUTO1_2: unlock Gravitonic reset autobuyers
    return me.upgrades["AUTO1_2"].is_active();
};

functions["autobuyer_gravitonic_upgrades_available"] = () => {
    // AUTO1_5: unlock autobuyer for Gravitonic upgrades
    return me.upgrades["AUTO1_5"].is_active();
};

functions["autobuyer_gravitonic_1_available"] = () => {
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_2_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_3_available"] = () => {
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_4_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_5_available"] = () => {
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_6_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_7_available"] = () => {
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_8_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_9_available"] = () => {
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_10_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_11_available"] = () => {
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_gravitonic_12_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO1_1: unlock Gravitonic Dimension autobuyers
    return me.upgrades["AUTO1_1"].is_active();
};

functions["autobuyer_neutronic_available"] = () => {
    // d72: unlock Neutronic reset autobuyer
    return me.upgrades["d72"].is_active();
};

functions["autobuyer_protons_available"] = () => {
    // AUTO2_2: unlock Neutronic particle autobuyers
    return me.upgrades["AUTO2_2"].is_active();
};

functions["autobuyer_electrons_available"] = () => {
    // AUTO2_2: unlock Neutronic particle autobuyers
    return me.upgrades["AUTO2_2"].is_active();
};

functions["autobuyer_bosons_available"] = () => {
    // AUTO2_2: unlock Neutronic particle autobuyers
    return me.upgrades["AUTO2_2"].is_active();
};

functions["autobuyer_neutronic_1_available"] = () => {
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_2_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_3_available"] = () => {
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_4_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_5_available"] = () => {
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_6_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_7_available"] = () => {
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_8_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_9_available"] = () => {
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_10_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_11_available"] = () => {
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_12_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO2_1: unlock Neutronic Dimension autobuyers
    return me.upgrades["AUTO2_1"].is_active();
};

functions["autobuyer_neutronic_upgrades_available"] = () => {
    // AUTO2_5: unlock autobuyer for Neutronic upgrades
    return me.upgrades["AUTO2_5"].is_active();
};

functions["autobuyer_vacuumic_available"] = () => {
    // AUTO3_2: unlock Vacuumic reset autobuyer
    return me.upgrades["AUTO3_2"].is_active();
};

functions["autobuyer_v01_available"] = () => {
    return functions[me.upgrades["v01"].availability_function]() && me.unlocked_st_autobuyers;
};

functions["autobuyer_v02_available"] = () => {
    return functions[me.upgrades["v02"].availability_function]() && me.unlocked_st_autobuyers;
};

functions["autobuyer_v03_available"] = () => {
    return functions[me.upgrades["v03"].availability_function]() && me.unlocked_st_autobuyers;
};

functions["autobuyer_VTREE_available"] = () => {
    return me.unlocked_st_autobuyers;
};

functions["autobuyer_VTREE_not_left_available"] = () => {
    return me.unlocked_st_autobuyers && !me.challenges['v8'].inC();
};

functions["autobuyer_vacuumic_1_available"] = () => {
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_2_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_3_available"] = () => {
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_4_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_5_available"] = () => {
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_6_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_7_available"] = () => {
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_8_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_9_available"] = () => {
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_10_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_11_available"] = () => {
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_vacuumic_12_available"] = () => {
    // Vacuumic Challenge 2: autobuyers for even-numbered dimensions are disabled
    if (me.challenges['v2'].inC()) return false;
    // AUTO3_1: unlock Vacuumic Dimension autobuyers
    return me.upgrades["AUTO3_1"].is_active();
};

functions["autobuyer_dimensional_available"] = () => {
    // AUTO4_2: unlock Vacuumic reset autobuyer
    return me.upgrades["AUTO4_2"].is_active();
};

functions["autobuyer_TICKSPEED_available"] = () => {
    // v72: unlock Tickspeed Upgrade autobuyer
    return me.upgrades["v72"].is_active();
};

functions["autobuyer_temperature_available"] = () => {
    return me.unlocked_wave_autobuyers;
};

functions["autobuyer_temperature_xray_available"] = () => {
    // a04_2: unlock X-Ray waves
    if (!me.milestones['a04_2'].is_active()) return false;
    return me.unlocked_wave_autobuyers;
};

functions["autobuyer_dimensional_1_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_2_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_3_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_4_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_5_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_6_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_7_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_8_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_9_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_10_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_11_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};

functions["autobuyer_dimensional_12_available"] = () => {
    // AUTO4_1: unlock Dimensional Dimension autobuyers
    return me.upgrades["AUTO4_1"].is_active();
};