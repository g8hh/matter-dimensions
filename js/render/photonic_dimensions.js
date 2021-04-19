function screen_update_photonic_dimensions() {
    elements = document.getElementsByClassName("power_light_production");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_light_production());
    }

    // light boosts which dimension
    if (!player.upgrades['g23'].is_active()) document.getElementById("light_boosts_which_dimension").textContent = "1st Matter Dimension";
    else document.getElementById("light_boosts_which_dimension").textContent = "1st and 2nd Matter Dimensions";

    // light boosts time
    if (player.challenges['p4'].inC()) {
        document.getElementById("power_light_time_info").style.display = "";
        elements = document.getElementsByClassName("power_light_time");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(power_light_time().pow(-1));
        }
    }
    else if (player.upgrades['g24'].is_active()) {
        document.getElementById("power_light_time_info").style.display = "";
        elements = document.getElementsByClassName("power_light_time");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(power_light_time());
        }
    }
    else document.getElementById("power_light_time_info").style.display = "none";
}