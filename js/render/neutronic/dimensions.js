function screen_update_neutronic_dimensions() {
    elements = document.getElementsByClassName("power_stars_tickspeed");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_stars_tickspeed());
    }

    elements = document.getElementsByClassName("power_stars_light_effect");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_stars_light_effect());
    }

    // stars boost 1st Photonic Dimension
    if (player.upgrades['v192'].is_active()) {
        document.getElementById("power_stars_photonic_dim_info").style.display = "";
        elements = document.getElementsByClassName("power_stars_photonic_dim");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['v192'].get_effect());
        }
    }
    else document.getElementById("power_stars_photonic_dim_info").style.display = "none";

    // stars produce black holes
    if (player.upgrades['v193'].is_active()) {
        document.getElementById("power_stars_black_holes_info").style.display = "";
        elements = document.getElementsByClassName("power_stars_black_holes");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['v193'].get_effect());
        }
    }
    else document.getElementById("power_stars_black_holes_info").style.display = "none";
}