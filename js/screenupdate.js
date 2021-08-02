function format_time(milliseconds) {
    if (milliseconds instanceof BigNumber) return format_time(milliseconds.toInt());
    milliseconds = Math.round(milliseconds);

    if (milliseconds < 1000) return String(Math.floor(milliseconds)) + " milliseconds";
    if (milliseconds < 60000) return String(round_prec(milliseconds / 1000, 1000)) + " seconds";

    var seconds = Math.floor(milliseconds / 1000);

    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    var hours = Math.floor(minutes / 60);
    minutes -= hours * 60;

    var days = Math.floor(hours / 24);
    hours -= days * 24;

    var years = Math.floor(days / 365);
    days -= years * 365;

    let time_arr = [years, days, hours, minutes, seconds];
    let period_single = ["year", "day", "hour", "minute", "second"];
    let period_plural = ["years", "days", "hours", "minutes", "seconds"];

    var non_nil_vars = 0;
    for (var i = 0; i < time_arr.length; i++) if (time_arr[i] > 0 || (i == time_arr.length - 1 && non_nil_vars == 0)) non_nil_vars++;

    var result = "";
    for (var i = 0; i < time_arr.length; i++) {
        if (time_arr[i] > 0 || (i == time_arr.length - 1 && non_nil_vars == 1)) {
            non_nil_vars--;
            result += String(time_arr[i]) + " ";
            if (time_arr[i] == 1) result += period_single[i];
            else result += period_plural[i];
            if (non_nil_vars == 1) result += " and ";
            if (non_nil_vars > 1) result += ", ";
        }
    }

    return result;
}

function screen_update() {
    let resources = ["space_theorems",
                    "challenge_strength_1", "challenge_addinfo_2", "challenge_strength_2", "challenge_strength_3", "challenge_strength_4", 
                    "challenge_strength_6", "challenge_strength_8", "challenge_strength_9",
                    "challenge_strength_10", "challenge_strength_11",
                    "photonic_resets", "gravitonic_resets", "neutronic_resets", "vacuumic_resets", "dimensional_resets", "atomic_resets", "biological_resets",
                    "inertia_multiplier",
                    "max_matter", "max_photons_at_once", "max_gravitons", "max_gravitons_in_nc",
                    "infrared_waves", "red_waves", "green_waves", "blue_waves", "ultraviolet_waves", "xray_waves",
                    "collision_knowledge", "collision_points", "collision_points_in_reaction", "collision_points_in_synthesis", "collision_points_in_generation"];
    
    resources.forEach(res => {
        document.getElementById("resource_" + res).textContent = format_number(player[res]);
    });


    let resources_fixed = ["matter", "antimatter", "energy", "light", "space", "black_holes", "stars", "inflation", "manifolds",
                    "challenge_strength_5", "challenge_strength_7",
                    "proton_power", "electron_power", "boson_power"];

    resources_fixed.forEach(res => {
        document.getElementById("resource_" + res).textContent = format_number(player[res], true);
    });

    // Reworked system for on-demand drawing
    let var_elements = document.getElementsByClassName("variable-value");
    for (let i = 0; i < var_elements.length; i++) {
        if (var_elements.item(i).attributes.rounded !== undefined) var_elements.item(i).textContent = format_number(big(player[var_elements.item(i).attributes.name.value]).round(), true, false, "", true);
        else if (var_elements.item(i).attributes.fixed !== undefined) var_elements.item(i).textContent = format_number(player[var_elements.item(i).attributes.name.value], true);
        else var_elements.item(i).textContent = format_number(player[var_elements.item(i).attributes.name.value]);
    }

    let timers = ["overall_time", "time_passed", "time_photonic", "time_gravitonic", "time_neutronic", "time_vacuumic", "time_dimensional", "time_atomic", "time_biological",
                 "fastest_photonic", "fastest_gravitonic", "fastest_neutronic", "fastest_vacuumic", "fastest_dimensional", "fastest_atomic", "fastest_biological",
                 "total_realtime", "online_realtime",
                 "inertia"];

    timers.forEach(res => {
        document.getElementById("timer_" + res).textContent = format_time(player[res]);
    });

    let static_numbers = document.getElementsByClassName("static-number");
    for (let i = 0; i < static_numbers.length; i++) {
        static_numbers.item(i).textContent = format_number(static_numbers.item(i).attributes.extra.value, false, static_numbers.item(i).attributes.finite !== undefined);
    }

    for (let key of Object.keys(player.dimensions)) {
        player.dimensions[key].screen_update();
    }

    for (let key of Object.keys(player.upgrades)) {
        player.upgrades[key].screen_update();
    }

    for (let key of Object.keys(player.challenges)) {
        player.challenges[key].screen_update();
    }

    for (let key of Object.keys(player.autobuyers)) {
        player.autobuyers[key].screen_update();
    }

    for (let key of Object.keys(player.milestones)) {
        player.milestones[key].screen_update();
    }

    for (let key of Object.keys(player.evolutions)) {
        player.evolutions[key].screen_update();
    }

    for (let key of Object.keys(player.experiments)) {
        player.experiments[key].screen_update();
    }

    let body_class = "theme-" + player.settings['theme'] + " font-" + player.settings['font'];
    if (player.settings['show_newsticker']) body_class += " has-newsticker";
    if (!player.settings['show_flavor_names']) body_class += " no-flavor-names";
    if (!player.settings['newline_after_prestige_currency']) body_class += " no-prestige-currency-newline";
    document.body.className = body_class;

    document.getElementById("achievement_bonus").textContent = format_number(player.achievement_multiplier);

    update_prestige();
}