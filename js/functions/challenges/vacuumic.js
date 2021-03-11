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
    me.light = me.light.min(1e5);
    me.black_holes = me.black_holes.min(1e5);
    me.stars = me.stars.min(1e5);
    me.inflation = me.inflation.min(1e5);
};
functions["start_v6"] = () => {
    for (let key of Object.keys(me.upgrades)) {
        if (key.includes("v")) {
            // achievement 88: keep all automation upgrades
            if (me.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
            me.upgrades[key].reset();
        }
    }
    me.space_theorems = big(0);
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
    return me.upgrades['v211'].is_active();
};
functions["goal_v2"] = () => {
    return me.upgrades['v211'].is_active();
};
functions["goal_v3"] = () => {
    return me.upgrades['v211'].is_active();
};
functions["goal_v4"] = () => {
    return me.upgrades['v211'].is_active();
};
functions["goal_v5"] = () => {
    return me.upgrades['v211'].is_active();
};
functions["goal_v6"] = () => {
    return me.upgrades['v211'].is_active();
};
functions["goal_v7"] = () => {
    return me.upgrades['v211'].is_active();
};
functions["goal_v8"] = () => {
    return me.upgrades['v211'].is_active();
};
functions["goal_v0"] = () => {
    return me.upgrades['v211'].is_active();
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