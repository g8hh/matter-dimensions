const wave_types = ["infrared", "red", "green", "blue", "ultraviolet", "xray"];

function format_temperature(number, fixed=false) {
    if (!(number instanceof BigNumber)) number = new BigNumber(number);
    let res = new BigNumber();
    res.copy(number);

    let degrees = "";
    if (player.settings['temperature_display'] == 'K') {
        degrees = " K";
    }
    if (player.settings['temperature_display'] == 'C') {
        degrees = " °C";
        res = res.add(-273.15);
    }
    if (player.settings['temperature_display'] == 'F') {
        degrees = " °F";
        res = res.add(-273.15).mult(9 / 5).add(32);
    }

    return format_number(res, fixed) + degrees;
}

function get_temperature() {
    let base_energy = player.temperature_energy.clone();
    // a08: energy boosts temperature more
    base_energy = base_energy.mult(player.upgrades['a08'].get_effect());

    let base_temp = player.temperature_energy.pow(0.2).div(1000);
    if (base_temp.gt(273.15)) base_temp = big(273.15).mult(base_temp.div(273.15).log(10).add(1));

    // a08_1: temperature is raised to a power of 1.1
    if (player.milestones['a08_1'].is_active()) base_temp = base_temp.pow(player.milestones['a08_1'].get_effect());

    return base_temp;
}

function get_new_temperature() {
    let base_temp = player.temperature_energy.div(player.space.add(1).pow(0.2)).pow(0.2).div(1000);
    if (base_temp.gt(273.15)) base_temp = big(273.15).mult(base_temp.div(273.15).log(10).add(1));
    return base_temp;
}

function wave_gain(type) {
    let wave_mult = big(1);
    // a04: gain more waves
    wave_mult = wave_mult.mult(player.upgrades['a04'].get_effect());
    // Temperature Milestone 5: gain more waves
    if (player.milestones['temperature_5'].is_active()) wave_mult = wave_mult.mult(player.milestones['temperature_5'].get_effect());
    
    let wave_gain = big(0);
    switch (type) {
        case 'infrared': wave_gain = get_temperature().div(2.73).pow(5).mult(wave_mult); break;
        case 'red': wave_gain = get_temperature().div(4.222).pow(4).mult(wave_mult); break;
        case 'green': wave_gain = get_temperature().div(5.19).pow(3).mult(wave_mult); break;
        case 'blue': wave_gain = get_temperature().div(13.99).pow(2).mult(wave_mult); break;
        case 'ultraviolet': wave_gain = get_temperature().div(20.28).pow(1).mult(wave_mult); break;
        case 'xray': wave_gain = get_temperature().div(273.15).pow(0.8).mult(wave_mult); break;
    }

    // evolution b12: wave gain is raised to a power
    if (player.evolutions['b12'].is_active()) wave_gain = wave_gain.pow(player.evolutions['b12'].get_effect());

    return wave_gain.rounddown();
}

function can_reset_temperature(type) {
    return !get_temperature().lt(temperature_reset_hint(type));
}

function temperature_reset_hint(type) {
    switch (type) {
        case 'infrared': return big(2.73);
        case 'red': return big(4.222);
        case 'green': return big(5.19);
        case 'blue': return big(13.99);
        case 'ultraviolet': return big(20.28);
        case 'xray': return big(273.15);
    }
}

function temperature_reset_hint_next(type) {
    let resources_needed = wave_gain(type).add(1);
    let wave_mult = big(1);
    // a04: gain more waves
    wave_mult = wave_mult.mult(player.upgrades['a04'].get_effect());

    resources_needed = resources_needed.div(wave_mult).max(1);

    switch (type) {
        case 'infrared': return resources_needed.pow(1/5).mult(2.73);
        case 'red': return resources_needed.pow(1/4).mult(4.222);
        case 'green': return resources_needed.pow(1/3).mult(5.19);
        case 'blue': return resources_needed.pow(1/2).mult(13.99);
        case 'ultraviolet': return resources_needed.pow(1/1).mult(20.28);
        case 'xray': return resources_needed.pow(1/0.8).mult(273.15);
    }
}

function reset_temperature(type) {
    if (!can_reset_temperature(type)) return;

    let waves_gained = wave_gain(type);
    switch (type) {
        case 'infrared': player.infrared_waves = player.infrared_waves.add(waves_gained).min(player.challenge_strength_4); break;
        case 'red': player.red_waves = player.red_waves.add(waves_gained).min(player.challenge_strength_4); break;
        case 'green': player.green_waves = player.green_waves.add(waves_gained).min(player.challenge_strength_4); break;
        case 'blue': player.blue_waves = player.blue_waves.add(waves_gained).min(player.challenge_strength_4); break;
        case 'ultraviolet': player.ultraviolet_waves = player.ultraviolet_waves.add(waves_gained).min(player.challenge_strength_4); break;
        case 'xray': player.xray_waves = player.xray_waves.add(waves_gained).min(player.challenge_strength_4); break;
    }

    player.temperature_energy = big(0);
}

function wave_effect(type) {
    switch (type) {
        case 'infrared': return player.infrared_waves.min(player.infrared_waves.pow(0.5).mult(1e2)).min(player.infrared_waves.pow(0.2).mult(1e5)).min(player.infrared_waves.pow(0.04).mult(1e13)).min(player.infrared_waves.add(1).log(10).mult("1e409").add(1)).add(1);
        case 'red': return player.red_waves.add(1).pow(2);
        case 'green': return player.green_waves.add(1).log(10).pow(2);
        case 'blue': return player.space.pow(player.blue_waves.add(1).log(10).pow(0.5).mult(0.05)).max(1);
        case 'ultraviolet': return player.ultraviolet_waves.add(1).log(10).pow(0.5).mult(0.03).add(1);
        case 'xray': return player.xray_waves.add(1).log(10).pow(0.5).mult(5);
    }
}

function switch_heating_status() {
    player.heating_enabled = !player.heating_enabled;
    update_temperature();
}

function update_temperature_first() {
    if (player.heating_smart_distribution) document.getElementById("mechanic_temperature_smart_distribution").checked = true;
    else document.getElementById("mechanic_temperature_smart_distribution").checked = false;
}

function update_temperature() {
    document.getElementById("mechanic_temperature_current").textContent = format_temperature(get_temperature(), true);
    document.getElementById("mechanic_temperature_future").textContent = format_temperature(get_new_temperature(), true);

    if (player.heating_enabled) {
        if (player.heating_smart_distribution) document.getElementById("mechanic_temperature_heating_status").textContent = "enabled (50%)";
        else document.getElementById("mechanic_temperature_heating_status").textContent = "enabled";

        document.getElementById("mechanic_temperature_heating_button").textContent = "Disable";
    }
    else {
        document.getElementById("mechanic_temperature_heating_status").textContent = "disabled";
        document.getElementById("mechanic_temperature_heating_button").textContent = "Enable";
    }

    if (document.getElementById("mechanic_temperature_smart_distribution").checked) player.heating_smart_distribution = true;
    else player.heating_smart_distribution = false;

    for (let i = 0; i < wave_types.length; i++) {
        if (can_reset_temperature(wave_types[i])) {
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_reset").className = "prestige-layer-ascend";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain").style.display = "";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint").style.display = "none";
            if (wave_gain(wave_types[i]).gt(100)) document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next").style.display = "none";
            else document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next").style.display = "";
        }
        else {
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_reset").className = "prestige-layer-ascend disabled";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain").style.display = "none";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint").style.display = "";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next").style.display = "none";
        }

        document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_amt").textContent = format_number(wave_gain(wave_types[i]));
        document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_amt").textContent = format_temperature(temperature_reset_hint(wave_types[i]));
        document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next_amt").textContent = format_temperature(temperature_reset_hint_next(wave_types[i]));

        document.getElementById("mechanic_temperature_" + wave_types[i] + "_effect").textContent = format_number(wave_effect(wave_types[i]));
    }

    // a04_2: unlock X-Ray Waves
    if (player.milestones['a04_2'].is_active()) document.getElementById("mechanic_temperature_xray_waves").style.display = "";
    else document.getElementById("mechanic_temperature_xray_waves").style.display = "none";

    // p53: Infrared Waves boost Photons
    if (player.upgrades['p53'].is_active()) document.getElementById("mechanic_temperature_p53_effect").style.display = "";
    else document.getElementById("mechanic_temperature_p53_effect").style.display = "none";

    // achievement 115: Temperature is no longer reduced on Vacuumic
    if (player.achievements['115'].complete) document.getElementById("mechanic_temperature_vacuumic_reduction").style.display = "none";
    else document.getElementById("mechanic_temperature_vacuumic_reduction").style.display = "";
}