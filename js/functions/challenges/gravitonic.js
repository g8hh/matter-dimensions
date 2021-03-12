functions["start_g1"] = () => {
    return; // External effect
};
functions["start_g2"] = () => {
    return; // External effect
};
functions["start_g3"] = () => {
    return; // External effect
};
functions["start_g4"] = () => {
    return; // External effect
};
functions["start_g5"] = () => {
    return; // External effect
};
functions["start_g6"] = () => {
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("g")) {
            // achievement 55: Gravitonic upgrades that provide automation are never reset
            // achievement 88: keep all automation upgrades
            if ((player.achievements['55'].complete || player.achievements['88'].complete) && (key == "g41" || key == "g42")) continue;
            player.upgrades[key].reset();
        }
    }
};
functions["start_g7"] = () => {
    return; // External effect
};
functions["start_g8"] = () => {
    return; // External effect
};
functions["start_g0"] = () => {
    return; // External effect
};

functions["goal_g1"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g2"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g3"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g4"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g5"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g6"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g7"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g8"] = () => {
    return !player.gravitons.lt(100);
};
functions["goal_g0"] = () => {
    return !player.gravitons.lt(100);
};

functions["end_g1"] = () => {
    return; // External effect
};
functions["end_g2"] = () => {
    return; // External effect
};
functions["end_g3"] = () => {
    return; // External effect
};
functions["end_g4"] = () => {
    return; // External effect
};
functions["end_g5"] = () => {
    return; // External effect
};
functions["end_g6"] = () => {
    return; // External effect
};
functions["end_g7"] = () => {
    return; // External effect
};
functions["end_g8"] = () => {
    return; // External effect
};
functions["end_g0"] = () => {
    return; // External effect
};

