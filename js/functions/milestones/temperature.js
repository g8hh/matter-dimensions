functions["temperature_1_availability"] = () => {
    // d91: unlock Temperature
    return me.upgrades['d91'].is_active();
}
functions["temperature_2_availability"] = () => {
    // d91: unlock Temperature
    return me.upgrades['d91'].is_active();
}
functions["temperature_3_availability"] = () => {
    // d91: unlock Temperature
    return me.upgrades['d91'].is_active();
}
functions["temperature_4_availability"] = () => {
    // d91: unlock Temperature
    return me.upgrades['d91'].is_active();
}


functions["temperature_1_activation"] = () => {
    return get_temperature(me).gt(functions["temperature_1_goal"]());
}
functions["temperature_2_activation"] = () => {
    return get_temperature(me).gt(functions["temperature_2_goal"]());
}
functions["temperature_3_activation"] = () => {
    return get_temperature(me).gt(functions["temperature_3_goal"]());
}
functions["temperature_4_activation"] = () => {
    return get_temperature(me).gt(functions["temperature_4_goal"]());
}


functions["temperature_1_effect"] = () => {
    return get_temperature(me).add(1).log(10).add(1).log(10).div(10).add(1.1);
}
functions["temperature_2_effect"] = () => {
    return get_temperature(me).pow(0.69).max(1);
}
functions["temperature_3_effect"] = () => {
    return get_temperature(me).div(13.99).max(1);
}
functions["temperature_4_effect"] = () => {
    return get_temperature(me).div(273.15).add(1).log(10).add(2);
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


functions["temperature_goal_display_function"] = (goal) => {
    return format_temperature(goal);
}