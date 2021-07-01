function screen_update_vacuumic_upgrades() {
    // vacuumic tree
    document.getElementById("respec_space_theorems").textContent = format_number(space_theorems_invested());
    update_vacuumic_tree();

    // Next Vacuumic costs
    if (functions[player.upgrades['v01'].availability_function]()) {
        document.getElementById("vacuumic_next_costs_with_ve").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_ve_1").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_ve_2").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_ve_1").textContent = format_number(player.upgrades['v01'].get_cost(2).subtract(player.upgrades['v01'].get_cost(1)));
        document.getElementById("vacuumic_next_costs_with_ve_2").textContent = format_number(player.upgrades['v01'].get_cost(3).subtract(player.upgrades['v01'].get_cost(2)));
    }
    else {
        document.getElementById("vacuumic_next_costs_with_ve").style.visibility = "hidden";
        document.getElementById("vacuumic_next_costs_with_ve_1").style.visibility = "hidden";
        document.getElementById("vacuumic_next_costs_with_ve_2").style.visibility = "hidden";
    }

    if (functions[player.upgrades['v02'].availability_function]()) {
        document.getElementById("vacuumic_next_costs_with_md3").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_md3_1").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_md3_2").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_md3_1").textContent = format_number(player.upgrades['v02'].get_cost(2).subtract(player.upgrades['v02'].get_cost(1)));
        document.getElementById("vacuumic_next_costs_with_md3_2").textContent = format_number(player.upgrades['v02'].get_cost(3).subtract(player.upgrades['v02'].get_cost(2)));
    }
    else {
        document.getElementById("vacuumic_next_costs_with_md3").style.visibility = "hidden";
        document.getElementById("vacuumic_next_costs_with_md3_1").style.visibility = "hidden";
        document.getElementById("vacuumic_next_costs_with_md3_2").style.visibility = "hidden";
    }

    if (functions[player.upgrades['v03'].availability_function]()) {
        document.getElementById("vacuumic_next_costs_with_ntr").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_ntr_1").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_ntr_2").style.visibility = "";
        document.getElementById("vacuumic_next_costs_with_ntr_1").textContent = format_number(player.upgrades['v03'].get_cost(2).subtract(player.upgrades['v03'].get_cost(1)));
        document.getElementById("vacuumic_next_costs_with_ntr_2").textContent = format_number(player.upgrades['v03'].get_cost(3).subtract(player.upgrades['v03'].get_cost(2)));
    }
    else {
        document.getElementById("vacuumic_next_costs_with_ntr").style.visibility = "hidden";
        document.getElementById("vacuumic_next_costs_with_ntr_1").style.visibility = "hidden";
        document.getElementById("vacuumic_next_costs_with_ntr_2").style.visibility = "hidden";
    }

    // ST autobuyers
    if (player.unlocked_st_autobuyers) {
        document.getElementById("st_autobuyer_toggle").style.display = "";
        document.getElementsByClassName("unlock-on-st-autobuyers")[0].style.display = "";
        if (player.activated_st_autobuyers) {
            document.getElementById("st_autobuyer_toggle_status").textContent = "enabled";
            document.getElementById("st_autobuyer_button_text").textContent = "Disable";
        }
        else {
            document.getElementById("st_autobuyer_toggle_status").textContent = "disabled";
            document.getElementById("st_autobuyer_button_text").textContent = "Enable";
        }
    }
    else {
        document.getElementById("st_autobuyer_toggle").style.display = "none";
        document.getElementsByClassName("unlock-on-st-autobuyers")[0].style.display = "none";
    }

    // ST presets
    for (let element of document.getElementsByClassName("unlock-on-st-presets")) {
        if (player.upgrades['AUTO3_5'].is_active()) element.style.display = "";
        else element.style.display = "none";
    }
    for (let i = 0; i < 3; i++) render_st_preset(i);

    // saving vtree presets
    for (let element of document.getElementsByClassName("vtree-preset-save")) {
        if (player.settings["hide_saving_vtree_presets"]) element.style.display = "none";
        else element.style.display = "";
    }
}