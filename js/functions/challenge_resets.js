functions["challenge_reset_photonic"] = () => {
    reset_gravitonic(true);
};

functions["challenge_reset_gravitonic"] = () => {
    reset_neutronic(true);
};

functions["challenge_reset_neutronic"] = () => {
    reset_vacuumic(true);
};

functions["challenge_reset_vacuumic"] = () => {
    // a07_3: keep ST from VE on Dimensional, doesn't work in Vacuumic challenges
    if (player.milestones['a07_3'].is_active()) player.upgrades["v01"].reset();
    
    reset_dimensional(true);
};

functions["challenge_reset_dimensional"] = () => {
    reset_atomic(true);
};