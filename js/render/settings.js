function screen_update_settings() {
    // achievement 143: unlock autobuyer and auto-assigner for Collision Points
    for (let element of document.getElementsByClassName("unlock-on-auto-assigner")) {
        if (player.achievements['143'].complete) element.style.display = "";
        else element.style.display = "none";
    }

    // ST presets
    for (let element of document.getElementsByClassName("unlock-on-st-presets")) {
        if (player.upgrades['AUTO3_5'].is_active()) element.style.display = "";
        else element.style.display = "none";
    }

    // Experiments
    for (let element of document.getElementsByClassName("unlock-on-experiments")) {
        if (player.experienced_experiments) element.style.display = "";
        else element.style.display = "none";
    }

    // update settings
    for (let key of Object.keys(player.settings)) {
        player.settings[key] = radio_get_setting(key);
    }
}