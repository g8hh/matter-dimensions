functions["start_v1"] = () => {
    return; // External effect
};
functions["start_v2"] = () => {
    return; // External effect
};
functions["start_v3"] = () => {
    return; // External effect
};
functions["start_v4"] = () => {
    return; // External effect
};
functions["start_v5"] = () => {
    player.light = player.light.min(1e5);
    player.black_holes = player.black_holes.min(1e5);
    player.stars = player.stars.min(1e5);
    player.inflation = player.inflation.min(1e5);
};
functions["start_v6"] = () => {
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("v")) {
            // achievement 88: keep all automation upgrades
            if (player.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
            player.upgrades[key].reset();
        }
    }
    player.space_theorems = big(0);
};
functions["start_v7"] = () => {
    return; // External effect
};
functions["start_v8"] = () => {
    return; // External effect
};
functions["start_v0"] = () => {
    return; // External effect
};



functions["goal_v1"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v2"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v3"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v4"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v5"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v6"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v7"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v8"] = () => {
    return player.upgrades['v211'].is_active();
};
functions["goal_v0"] = () => {
    return player.upgrades['v211'].is_active();
};



functions["end_v1"] = () => {
    return; // External effect
};
functions["end_v2"] = () => {
    return; // External effect
};
functions["end_v3"] = () => {
    return; // External effect
};
functions["end_v4"] = () => {
    return; // External effect
};
functions["end_v5"] = () => {
    return; // External effect
};
functions["end_v6"] = () => {
    return; // External effect
};
functions["end_v7"] = () => {
    return; // External effect
};
functions["end_v8"] = () => {
    return; // External effect
};
functions["end_v0"] = () => {
    return; // External effect
};