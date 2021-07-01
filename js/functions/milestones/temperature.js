functions["temperature_1_availability"] = () => {
    // d91: unlock Temperature
    return player.upgrades['d91'].is_active();
}
functions["temperature_2_availability"] = () => {
    // d91: unlock Temperature
    return player.upgrades['d91'].is_active();
}
functions["temperature_3_availability"] = () => {
    // d91: unlock Temperature
    return player.upgrades['d91'].is_active();
}
functions["temperature_4_availability"] = () => {
    // d91: unlock Temperature
    return player.upgrades['d91'].is_active();
}
functions["temperature_5_availability"] = () => {
    // d91: unlock Temperature
    // a08_2: unlock additional Temperature milestones
    return player.upgrades['d91'].is_active() && player.milestones['a08_2'].is_active();
}
functions["temperature_6_availability"] = () => {
    // d91: unlock Temperature
    // a08_2: unlock additional Temperature milestones
    return player.upgrades['d91'].is_active() && player.milestones['a08_2'].is_active();
}
functions["temperature_7_availability"] = () => {
    // d91: unlock Temperature
    // a08_2: unlock additional Temperature milestones
    return player.upgrades['d91'].is_active() && player.milestones['a08_2'].is_active();
}
functions["temperature_8_availability"] = () => {
    // d91: unlock Temperature
    // a08_2: unlock additional Temperature milestones
    return player.upgrades['d91'].is_active() && player.milestones['a08_2'].is_active();
}


functions["temperature_1_activation"] = () => {
    return get_temperature().gt(functions["temperature_1_goal"]());
}
functions["temperature_2_activation"] = () => {
    return get_temperature().gt(functions["temperature_2_goal"]());
}
functions["temperature_3_activation"] = () => {
    return get_temperature().gt(functions["temperature_3_goal"]());
}
functions["temperature_4_activation"] = () => {
    return get_temperature().gt(functions["temperature_4_goal"]());
}
functions["temperature_5_activation"] = () => {
    return get_temperature().gt(functions["temperature_5_goal"]());
}
functions["temperature_6_activation"] = () => {
    return get_temperature().gt(functions["temperature_6_goal"]());
}
functions["temperature_7_activation"] = () => {
    return get_temperature().gt(functions["temperature_7_goal"]());
}
functions["temperature_8_activation"] = () => {
    return get_temperature().gt(functions["temperature_8_goal"]());
}


functions["temperature_1_effect"] = () => {
    return get_temperature().add(1).log(10).add(1).log(10).div(10).add(1.1);
}
functions["temperature_2_effect"] = () => {
    return get_temperature().pow(0.69).max(1);
}
functions["temperature_3_effect"] = () => {
    return get_temperature().div(13.99).max(1);
}
functions["temperature_4_effect"] = () => {
    return get_temperature().div(273.15).add(1).log(10).add(2);
}
functions["temperature_5_effect"] = () => {
    return get_temperature().div(1560).max(1).pow(2);
}
functions["temperature_6_effect"] = () => {
    return get_temperature().div(5800).add(1).log(2).max(1);
}
functions["temperature_7_effect"] = () => {
    return get_temperature().div(4970).max(1);
}
functions["temperature_8_effect"] = () => {
    return big(2).pow(get_temperature().div(50100).add(1).log(2).pow(2));
}


functions["temperature_1_goal"] = () => {
    return big(0.15);
}
functions["temperature_2_goal"] = () => {
    return big(2.73);
}
functions["temperature_3_goal"] = () => {
    return big(13.99);
}
functions["temperature_4_goal"] = () => {
    return big(273.16);
}
functions["temperature_5_goal"] = () => {
    return big(1560);
}
functions["temperature_6_goal"] = () => {
    return big(5800);
}
functions["temperature_7_goal"] = () => {
    return big(9940);
}
functions["temperature_8_goal"] = () => {
    return big(50100);
}


functions["temperature_goal_display_function"] = (goal) => {
    return format_temperature(goal);
}