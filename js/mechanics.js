function update_mechanics_first() {
    update_inertia_first();
    update_temperature_first();
    update_collider_first();
    update_population_first();
    update_settings_first();
    update_experiments_first();

    update_mechanics();
}

function update_mechanics() {
    update_inertia();
    update_temperature();
    update_collider();
    update_population();
    update_settings();
    update_experiments();
}

// Settings

function update_settings_first() {
    for (let key of Object.keys(player.settings)) {
        radio_set_setting(key, player.settings[key]);
    }

    let elements = document.getElementsByName("notation");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            document.getElementById("settings_notation_view_" + elements[i].value).textContent = format_number(1.23e45, false, true, elements[i].value);
        }
    }
}

function update_settings() {

}