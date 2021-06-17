function update_experiments_first() {
    for (let key of Object.keys(player.experiments)) {
        player.experiments[key].update_first();
    }
}

function get_current_experiment_effect() {
    let effect_total = big(1);

    for (let key of Object.keys(player.experiments)) {
        effect_total = effect_total.mult(player.experiments[key].get_effect());
    }

    return effect_total;
}

function get_selected_experiment_effect() {
    let effect_total = big(1);

    for (let key of Object.keys(player.experiments)) {
        effect_total = effect_total.mult(player.experiments[key].get_effect(player.experiments[key].selected_level));
    }

    return effect_total;
}

function start_experiments(automatic=false) {
    if (!automatic && player.settings['prestige_confirmation_experiments']) {
        let result = confirm("Are you sure you want to start Experiments? This will trigger an Atomic reset.\n(This warning can be disabled in Settings)");
        if (!result) return;
    }

    reset_atomic(true);

    for (let key of Object.keys(player.experiments)) {
        player.experiments[key].enter();
    }
}

function exit_experiments() {
    for (let key of Object.keys(player.experiments)) {
        player.experiments[key].exit();
    }
}

function update_experiments() {
    // Experiment levels display
    for (let element of document.getElementById("mechanic_experiments_current_list").getElementsByClassName("level")) {
        element.textContent = format_number(player.experiments[element.attributes.experiment.value].current_level);
    }

    for (let element of document.getElementById("mechanic_experiments_selected_list").getElementsByClassName("level")) {
        element.textContent = format_number(player.experiments[element.attributes.experiment.value].selected_level);
    }

    document.getElementById("mechanic_experiments_current_effect").textContent = format_number(get_current_experiment_effect());
    document.getElementById("mechanic_experiments_selected_effect").textContent = format_number(get_selected_experiment_effect());
}