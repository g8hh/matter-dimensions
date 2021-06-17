function render_st_preset(index) {
    let container = document.getElementById("st_preset_preview_" + index);
    for (let element of container.children) {
        element.classList.remove("selected");
    }
    for (let upg of player.st_presets[index]) {
        container.getElementsByClassName(upg)[0].classList.add("selected");
    }
}

function save_st_preset(index) {
    player.st_presets[index] = [];
    for (let key of Object.keys(player.autobuyers)) {
        if (key.includes('VTREE') && player.autobuyers[key].enabled) 
            player.st_presets[index].push(player.autobuyers[key].obj.id);
    }
}

function load_st_preset(index) {
    for (let key of Object.keys(player.autobuyers)) {
        if (key.includes('VTREE')) player.autobuyers[key].enabled = false;
    }

    for (let key of player.st_presets[index]) {
        player.autobuyers["VTREE_" + key].enabled = true;
    }

    for (let key of Object.keys(player.autobuyers)) {
        if (key.includes('VTREE')) player.autobuyers[key].screen_update_first();
    }

    if (player.settings["enable_vtree_autobuyer_on_preset_load"]) {
        respec_vacuumic_tree();
        player.activated_st_autobuyers = true;
    }
}