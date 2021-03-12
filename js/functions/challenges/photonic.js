functions["start_p1"] = () => {
    return; // External effect
};
functions["start_p2"] = () => {
    return; // External effect
};
functions["start_p3"] = () => {
    player.dimensions['photonic_1'].produces = player.dimensions['matter_1'];
};
functions["start_p4"] = () => {
    return; // External effect
};
functions["start_p5"] = () => {
    return; // External effect
};
functions["start_p6"] = () => {
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("p")) {
            player.upgrades[key].reset();
        }
    }
};
functions["start_p7"] = () => {
    return; // External effect
};
functions["start_p8"] = () => {
    return; // External effect
};
functions["start_p0"] = () => {
    return; // External effect
};

functions["goal_p1"] = () => {
    return !player.matter.lt(100);
};
functions["goal_p2"] = () => {
    return !player.matter.lt(729);
};
functions["goal_p3"] = () => {
    return !player.matter.lt(1024);
};
functions["goal_p4"] = () => {
    return !player.matter.lt(123456789);
};
functions["goal_p5"] = () => {
    return !player.matter.lt(123456789);
};
functions["goal_p6"] = () => {
    return !player.matter.lt(1e40);
};
functions["goal_p7"] = () => {
    return !player.matter.lt(1e144);
};
functions["goal_p8"] = () => {
    return !player.matter.lt(9.223e18);
};
functions["goal_p0"] = () => {
    return !player.matter.lt(1e30);
};

functions["end_p1"] = () => {
    return; // External effect
};
functions["end_p2"] = () => {
    return; // External effect
};
functions["end_p3"] = () => {
    player.dimensions['photonic_1'].produces = "light";
};
functions["end_p4"] = () => {
    return; // External effect
};
functions["end_p5"] = () => {
    return; // External effect
};
functions["end_p6"] = () => {
    return; // External effect
};
functions["end_p7"] = () => {
    return; // External effect
};
functions["end_p8"] = () => {
    return; // External effect
};
functions["end_p0"] = () => {
    return; // External effect
};