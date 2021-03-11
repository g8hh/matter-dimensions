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
    for (let key of Object.keys(me.upgrades)) {
        if (key.includes("g")) {
            // achievement 62: Gravitonic upgrades that provide automation are never reset
            // achievement 88: keep all automation upgrades
            if ((me.achievements['62'].complete || me.achievements['88'].complete) && (key == "g41" || key == "g42")) continue;
            me.upgrades[key].reset();
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
    return !me.gravitons.lt(100);
};
functions["goal_g2"] = () => {
    return !me.gravitons.lt(100);
};
functions["goal_g3"] = () => {
    return !me.gravitons.lt(100);
};
functions["goal_g4"] = () => {
    return !me.gravitons.lt(100);
};
functions["goal_g5"] = () => {
    return !me.gravitons.lt(100);
};
functions["goal_g6"] = () => {
    return !me.gravitons.lt(100);
};
functions["goal_g7"] = () => {
    return !me.gravitons.lt(100);
};
functions["goal_g8"] = () => {
    return !me.gravitons.lt(100);
};
functions["goal_g0"] = () => {
    return !me.gravitons.lt(100);
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

