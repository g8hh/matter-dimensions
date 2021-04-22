function screen_update_settings() {
    // achievement 143: unlock autobuyer and auto-assigner for Collision Points
    for (let element of document.getElementsByClassName("unlock-on-auto-assigner")) {
        if (player.achievements['143'].complete) element.style.display = "";
        else element.style.display = "none";
    }
}