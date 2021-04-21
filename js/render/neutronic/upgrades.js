function screen_update_neutronic_upgrades() {
    // particle powers
    if (!player.upgrades['n04'].is_active()) document.getElementById("power_block_proton").style.visibility = "hidden";
    else document.getElementById("power_block_proton").style.visibility = "";
    if (!player.upgrades['n05'].is_active()) document.getElementById("power_block_electron").style.visibility = "hidden";
    else document.getElementById("power_block_electron").style.visibility = "";
    if (!player.upgrades['n06'].is_active()) document.getElementById("power_block_boson").style.visibility = "hidden";
    else document.getElementById("power_block_boson").style.visibility = "";

    // achievement 52: unlock buy max neutronic particles
    if (player.achievements['52'].complete) {
        document.getElementById("dimension_protons_buy_max").style.display = "";
        document.getElementById("dimension_electrons_buy_max").style.display = "";
        document.getElementById("dimension_bosons_buy_max").style.display = "";
    }
    else {
        document.getElementById("dimension_protons_buy_max").style.display = "none";
        document.getElementById("dimension_electrons_buy_max").style.display = "none";
        document.getElementById("dimension_bosons_buy_max").style.display = "none";
    }

    // achievement 97: unlock buy max neutronic upgrades
    if (player.achievements['97'].complete || player.upgrades['AUTO2_5'].is_active()) {
        document.getElementById("upgrades_neutronic_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_neutronic_buy_max").style.display = "none";
    }
}