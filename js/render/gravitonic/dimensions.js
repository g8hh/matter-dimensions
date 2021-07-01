function screen_update_gravitonic_dimensions() {
    elements = document.getElementsByClassName("power_black_holes_tickspeed");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_black_holes_tickspeed());
    }

    // black holes give gravitons
    if (player.upgrades['v83'].is_active()) {
        document.getElementById("power_black_holes_gravitons_info").style.display = "";
        elements = document.getElementsByClassName("power_black_holes_gravitons");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['v83'].get_effect());
        }
    }
    else document.getElementById("power_black_holes_gravitons_info").style.display = "none";

    // black holes boost resource limit
    if (player.upgrades['v183'].is_active()) {
        document.getElementById("power_black_holes_resource_limit_info").style.display = "";
        elements = document.getElementsByClassName("power_black_holes_resource_limit");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['v183'].get_effect());
        }
    }
    else document.getElementById("power_black_holes_resource_limit_info").style.display = "none";
}