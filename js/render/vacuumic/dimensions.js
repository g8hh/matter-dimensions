function screen_update_vacuumic_dimensions() {
    elements = document.getElementsByClassName("power_inflation_matter");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_inflation_matter());
    }

    // inflation boosts 1st and 2nd Photonic Dimension
    if (player.upgrades['d101'].is_active()) {
        document.getElementById("power_inflation_photonic_info").style.display = "";
        elements = document.getElementsByClassName("power_inflation_photonic");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['d101'].get_effect());
        }
    }
    else document.getElementById("power_inflation_photonic_info").style.display = "none";

    // inflation boosts first three Gravitonic Dimension
    if (player.upgrades['d111'].is_active()) {
        document.getElementById("power_inflation_gravitonic_info").style.display = "";
        elements = document.getElementsByClassName("power_inflation_gravitonic");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['d111'].get_effect());
        }
    }
    else document.getElementById("power_inflation_gravitonic_info").style.display = "none";

    // inflation boosts first four Neutronic Dimension
    if (player.upgrades['d112'].is_active()) {
        document.getElementById("power_inflation_neutronic_info").style.display = "";
        elements = document.getElementsByClassName("power_inflation_neutronic");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['d112'].get_effect());
        }
    }
    else document.getElementById("power_inflation_neutronic_info").style.display = "none";

    // inflation boosts all Vacuumic Dimension
    if (player.upgrades['d121'].is_active()) {
        document.getElementById("power_inflation_vacuumic_info").style.display = "";
        elements = document.getElementsByClassName("power_inflation_vacuumic");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(player.upgrades['d121'].get_effect());
        }
    }
    else document.getElementById("power_inflation_vacuumic_info").style.display = "none";
}