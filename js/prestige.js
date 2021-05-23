function update_prestige() {
    let elements;

    elements = document.getElementsByClassName("prestige_currency_photonic");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(player['photons']);
    }
    elements = document.getElementsByClassName("prestige_currency_gravitonic");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(player['gravitons']);
    }
    elements = document.getElementsByClassName("prestige_currency_neutronic");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(player['neutrons']);
    }
    elements = document.getElementsByClassName("prestige_currency_vacuumic");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(player['vacuum_energy']);
    }
    elements = document.getElementsByClassName("prestige_currency_dimensional");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(player['shards']);
    }
    elements = document.getElementsByClassName("prestige_currency_atomic");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(player['atoms']);
    }
    elements = document.getElementsByClassName("prestige_currency_biological");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(player['genes']);
    }

    let photons_earned = prestige_earn_photons();
    elements = document.getElementsByClassName("prestige_currency_photonic_gain");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(photons_earned);
    }
    let gravitons_earned = prestige_earn_gravitons();
    elements = document.getElementsByClassName("prestige_currency_gravitonic_gain");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(gravitons_earned);
    }
    let neutrons_earned = prestige_earn_neutrons();
    elements = document.getElementsByClassName("prestige_currency_neutronic_gain");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(neutrons_earned);
    }
    let vacuum_energy_earned = prestige_earn_vacuum_energy();
    elements = document.getElementsByClassName("prestige_currency_vacuumic_gain");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(vacuum_energy_earned);
    }
    let shards_earned = prestige_earn_shards();
    elements = document.getElementsByClassName("prestige_currency_dimensional_gain");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(shards_earned);
    }
    let atoms_earned = prestige_earn_atoms();
    elements = document.getElementsByClassName("prestige_currency_atomic_gain");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(atoms_earned);
    }
    let collision_knowledge_earned = prestige_earn_collision_knowledge();
    elements = document.getElementsByClassName("prestige_currency_atomic_gain_ck");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(collision_knowledge_earned);
    }
    let genes_earned = prestige_earn_genes();
    elements = document.getElementsByClassName("prestige_currency_biological_gain");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(genes_earned);
    }


    if (can_photonic()) {
        document.getElementById("prestige_layer_photonic_reset").className = "prestige-layer-ascend";
        document.getElementById("prestige_layer_photonic_gain").style.display = "";
        document.getElementById("prestige_layer_photonic_hint").style.display = "none";
        if (photons_earned.gt(100)) {
            document.getElementById("prestige_layer_photonic_hint_next").style.display = "none";
        }
        else {
            document.getElementById("prestige_layer_photonic_hint_next").style.display = "";
            document.getElementById("prestige_layer_photonic_hint_next_amt").textContent = format_number(photonic_hint_next(photons_earned));
        }
        if (!player.unlocked_photonic) player.unlocked_photonic = true;
    }
    else {
        document.getElementById("prestige_layer_photonic_reset").className = "prestige-layer-ascend disabled";
        document.getElementById("prestige_layer_photonic_gain").style.display = "none";
        document.getElementById("prestige_layer_photonic_hint").style.display = "";
        document.getElementById("prestige_layer_photonic_hint_amt").textContent = format_number(photonic_hint());
        document.getElementById("prestige_layer_photonic_hint_next").style.display = "none";
    }
    if (player.unlocked_photonic) {
        document.getElementById("timer_photonic").style.display = "";
        document.getElementById("prestige_layer_photonic").style.display = "";
        document.getElementById("statistics_photonic_resets").style.display = "";
        document.getElementById("statistics_fastest_photonic").style.display = "";
    }
    else {
        document.getElementById("timer_photonic").style.display = "none";
        document.getElementById("prestige_layer_photonic").style.display = "none";
        document.getElementById("statistics_photonic_resets").style.display = "none";
        document.getElementById("statistics_fastest_photonic").style.display = "none";
    }

    if (can_gravitonic()) {
        document.getElementById("prestige_layer_gravitonic_reset").className = "prestige-layer-ascend";
        document.getElementById("prestige_layer_gravitonic_gain").style.display = "";
        document.getElementById("prestige_layer_gravitonic_hint").style.display = "none";
        if (gravitons_earned.gt(100)) {
            document.getElementById("prestige_layer_gravitonic_hint_next").style.display = "none";
        }
        else {
            document.getElementById("prestige_layer_gravitonic_hint_next").style.display = "";
            document.getElementById("prestige_layer_gravitonic_hint_next_amt").textContent = format_number(gravitonic_hint_next(gravitons_earned));
        }
        if (!player.unlocked_gravitonic) player.unlocked_gravitonic = true;
    }
    else {
        document.getElementById("prestige_layer_gravitonic_reset").className = "prestige-layer-ascend disabled";
        document.getElementById("prestige_layer_gravitonic_gain").style.display = "none";
        document.getElementById("prestige_layer_gravitonic_hint").style.display = "";
        document.getElementById("prestige_layer_gravitonic_hint_amt").textContent = format_number(gravitonic_hint());
        document.getElementById("prestige_layer_gravitonic_hint_next").style.display = "none";
    }
    if (player.unlocked_gravitonic) {
        document.getElementById("timer_gravitonic").style.display = "";
        document.getElementById("prestige_layer_gravitonic").style.display = "";
        document.getElementById("statistics_gravitonic_resets").style.display = "";
        document.getElementById("statistics_fastest_gravitonic").style.display = "";
    }
    else {
        document.getElementById("timer_gravitonic").style.display = "none";
        document.getElementById("prestige_layer_gravitonic").style.display = "none";
        document.getElementById("statistics_gravitonic_resets").style.display = "none";
        document.getElementById("statistics_fastest_gravitonic").style.display = "none";
    }

    document.getElementById("matter_needed_to_retain_gravitons").textContent = format_number(prestige_earn_gravitons_base());

    if (can_neutronic()) {
        document.getElementById("prestige_layer_neutronic_reset").className = "prestige-layer-ascend";
        document.getElementById("prestige_layer_neutronic_gain").style.display = "";
        document.getElementById("prestige_layer_neutronic_hint").style.display = "none";
        if (neutrons_earned.gt(100)) {
            document.getElementById("prestige_layer_neutronic_hint_next").style.display = "none";
        }
        else {
            document.getElementById("prestige_layer_neutronic_hint_next").style.display = "";
            document.getElementById("prestige_layer_neutronic_hint_next_amt").textContent = format_number(neutronic_hint_next(neutrons_earned));
        }
        if (!player.unlocked_neutronic) player.unlocked_neutronic = true;
    }
    else {
        document.getElementById("prestige_layer_neutronic_reset").className = "prestige-layer-ascend disabled";
        document.getElementById("prestige_layer_neutronic_gain").style.display = "none";
        document.getElementById("prestige_layer_neutronic_hint").style.display = "";
        document.getElementById("prestige_layer_neutronic_hint_amt").textContent = format_number(neutronic_hint());
        document.getElementById("prestige_layer_neutronic_hint_next").style.display = "none";
    }
    if (player.unlocked_neutronic) {
        document.getElementById("timer_neutronic").style.display = "";
        document.getElementById("prestige_layer_neutronic").style.display = "";
        document.getElementById("statistics_neutronic_resets").style.display = "";
        document.getElementById("statistics_fastest_neutronic").style.display = "";
    }
    else {
        document.getElementById("timer_neutronic").style.display = "none";
        document.getElementById("prestige_layer_neutronic").style.display = "none";
        document.getElementById("statistics_neutronic_resets").style.display = "none";
        document.getElementById("statistics_fastest_neutronic").style.display = "none";
    }

    if (can_vacuumic()) {
        document.getElementById("prestige_layer_vacuumic_reset").className = "prestige-layer-ascend";
        document.getElementById("prestige_layer_vacuumic_gain").style.display = "";
        document.getElementById("prestige_layer_vacuumic_hint").style.display = "none";
        if (vacuum_energy_earned.gt(100)) {
            document.getElementById("prestige_layer_vacuumic_hint_next").style.display = "none";
        }
        else {
            document.getElementById("prestige_layer_vacuumic_hint_next").style.display = "";
            document.getElementById("prestige_layer_vacuumic_hint_next_amt").textContent = format_number(vacuumic_hint_next(vacuum_energy_earned));
        }
        if (!player.unlocked_vacuumic) player.unlocked_vacuumic = true;
    }
    else {
        document.getElementById("prestige_layer_vacuumic_reset").className = "prestige-layer-ascend disabled";
        document.getElementById("prestige_layer_vacuumic_gain").style.display = "none";
        document.getElementById("prestige_layer_vacuumic_hint").style.display = "";
        document.getElementById("prestige_layer_vacuumic_hint_amt").textContent = format_number(vacuumic_hint());
        document.getElementById("prestige_layer_vacuumic_hint_next").style.display = "none";
    }
    if (player.unlocked_vacuumic) {
        document.getElementById("space_production").style.display = "";
        document.getElementById("timer_vacuumic").style.display = "";
        document.getElementById("prestige_layer_vacuumic").style.display = "";
        document.getElementById("statistics_vacuumic_resets").style.display = "";
        document.getElementById("statistics_fastest_vacuumic").style.display = "";
    }
    else {
        document.getElementById("space_production").style.display = "none";
        document.getElementById("timer_vacuumic").style.display = "none";
        document.getElementById("prestige_layer_vacuumic").style.display = "none";
        document.getElementById("statistics_vacuumic_resets").style.display = "none";
        document.getElementById("statistics_fastest_vacuumic").style.display = "none";
    }

    if (can_dimensional()) {
        document.getElementById("prestige_layer_dimensional_reset").className = "prestige-layer-ascend";
        document.getElementById("prestige_layer_dimensional_gain").style.display = "";
        document.getElementById("prestige_layer_dimensional_hint").style.display = "none";
        if (!player.unlocked_dimensional) player.unlocked_dimensional = true;
    }
    else {
        document.getElementById("prestige_layer_dimensional_reset").className = "prestige-layer-ascend disabled";
        document.getElementById("prestige_layer_dimensional_gain").style.display = "none";
        document.getElementById("prestige_layer_dimensional_hint").style.display = "";
        document.getElementById("prestige_layer_dimensional_hint_amt").textContent = format_number(dimensional_hint());
    }
    if (player.unlocked_dimensional) {
        document.getElementById("timer_dimensional").style.display = "";
        document.getElementById("prestige_layer_dimensional").style.display = "";
        document.getElementById("statistics_dimensional_resets").style.display = "";
        document.getElementById("statistics_fastest_dimensional").style.display = "";
    }
    else {
        document.getElementById("timer_dimensional").style.display = "none";
        document.getElementById("prestige_layer_dimensional").style.display = "none";
        document.getElementById("statistics_dimensional_resets").style.display = "none";
        document.getElementById("statistics_fastest_dimensional").style.display = "none";
    }

    if (player.upgrades['v211'].is_active()) player.unlocked_atomic = true;
    if (can_atomic()) {
        document.getElementById("prestige_layer_atomic_reset").className = "prestige-layer-ascend";
        document.getElementById("prestige_layer_atomic_gain").style.display = "";
        document.getElementById("prestige_layer_atomic_hint_prebreak").style.display = "none";
        document.getElementById("prestige_layer_atomic_hint_postbreak").style.display = "none";
        if (atoms_earned.gt(100)) {
            document.getElementById("prestige_layer_atomic_hint_next").style.display = "none";
        }
        else {
            document.getElementById("prestige_layer_atomic_hint_next").style.display = "";
            document.getElementById("prestige_layer_atomic_hint_next_amt").textContent = format_number(atomic_hint_next(atoms_earned));
        }
        if (player.achievements['93'].complete) document.getElementById("prestige_layer_atomic_gain_ck").style.display = "";
        else document.getElementById("prestige_layer_atomic_gain_ck").style.display = "none";
    }
    else {
        document.getElementById("prestige_layer_atomic_reset").className = "prestige-layer-ascend disabled";
        document.getElementById("prestige_layer_atomic_gain").style.display = "none";
        document.getElementById("prestige_layer_atomic_gain_ck").style.display = "none";
        if (player.upgrades['v211'].is_active()) {
            document.getElementById("prestige_layer_atomic_hint_prebreak").style.display = "none";
            document.getElementById("prestige_layer_atomic_hint_postbreak").style.display = "";
        }
        else {
            document.getElementById("prestige_layer_atomic_hint_prebreak").style.display = "";
            document.getElementById("prestige_layer_atomic_hint_postbreak").style.display = "none";
        }
        document.getElementById("prestige_layer_atomic_hint_amt").textContent = format_number(atomic_hint());
        document.getElementById("prestige_layer_atomic_hint_next").style.display = "none";
    }
    if (player.unlocked_atomic) {
        document.getElementById("timer_atomic").style.display = "";
        document.getElementById("prestige_layer_atomic").style.display = "";
        document.getElementById("statistics_atomic_resets").style.display = "";
        document.getElementById("statistics_fastest_atomic").style.display = "";
    }
    else {
        document.getElementById("timer_atomic").style.display = "none";
        document.getElementById("prestige_layer_atomic").style.display = "none";
        document.getElementById("statistics_atomic_resets").style.display = "none";
        document.getElementById("statistics_fastest_atomic").style.display = "none";
    }

    if (can_biological()) {
        document.getElementById("prestige_layer_biological_reset").className = "prestige-layer-ascend";
        document.getElementById("prestige_layer_biological_gain").style.display = "";
        document.getElementById("prestige_layer_biological_hint").style.display = "none";
        if (genes_earned.gt(100)) {
            document.getElementById("prestige_layer_biological_hint_next").style.display = "none";
        }
        else {
            document.getElementById("prestige_layer_biological_hint_next").style.display = "";
            document.getElementById("prestige_layer_biological_hint_next_amt").textContent = format_number(biological_hint_next(genes_earned));
        }
        if (!player.unlocked_biological) player.unlocked_biological = true;
    }
    else {
        document.getElementById("prestige_layer_biological_reset").className = "prestige-layer-ascend disabled";
        document.getElementById("prestige_layer_biological_gain").style.display = "none";
        document.getElementById("prestige_layer_biological_hint").style.display = "";
        document.getElementById("prestige_layer_biological_hint_next").style.display = "none";
        document.getElementById("prestige_layer_biological_hint_amt").textContent = format_number(biological_hint());
    }
    if (player.unlocked_biological) {
        document.getElementById("timer_biological").style.display = "";
        document.getElementById("prestige_layer_biological").style.display = "";
        document.getElementById("statistics_biological_resets").style.display = "";
        document.getElementById("statistics_fastest_biological").style.display = "";
    }
    else {
        document.getElementById("timer_biological").style.display = "none";
        document.getElementById("prestige_layer_biological").style.display = "none";
        document.getElementById("statistics_biological_resets").style.display = "none";
        document.getElementById("statistics_fastest_biological").style.display = "none";
    }

    // achievement 62: unlock buy max photonic upgrades
    if (player.achievements['62'].complete || player.achievements['72'].complete) {
        document.getElementById("upgrades_photonic_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_photonic_buy_max").style.display = "none";
    }

    // v211: BREAK INFINITY
    if (player.upgrades['v211'].is_active()) {
        document.getElementById("challenge_strength_4").style.display = "none";
        document.getElementById("challenge_broken_4").style.display = "";
    }
    else {
        document.getElementById("challenge_strength_4").style.display = "";
        document.getElementById("challenge_broken_4").style.display = "none";
    }

    // various stats
    if (player.unlocked_photonic) document.getElementById("statistics_max_photons_at_once").style.display = "";
    else document.getElementById("statistics_max_photons_at_once").style.display = "none";
    if (player.unlocked_gravitonic) {
        if (player.current_challenge['neutronic'] == '') {
            document.getElementById("statistics_max_gravitons").style.display = "";
            document.getElementById("statistics_max_gravitons_in_nc").style.display = "none";
        }
        else {
            document.getElementById("statistics_max_gravitons").style.display = "none";
            document.getElementById("statistics_max_gravitons_in_nc").style.display = "";
        }
    }
    else {
        document.getElementById("statistics_max_gravitons").style.display = "none";
        document.getElementById("statistics_max_gravitons_in_nc").style.display = "none";
    }

    // Matter per second
    if (player.settings["matter_gain"] == "0") document.getElementById("matter_gain_display").style.display = "none";
    else {
        document.getElementById("matter_gain_display").style.display = "";
        let md1_speed = big(0);
        if (player.settings["matter_gain"] == "ms") {
            md1_speed = big(1);
            document.getElementById("matter_per_what").textContent = "millisecond";
        }
        if (player.settings["matter_gain"] == "s") {
            md1_speed = big(1000);
            document.getElementById("matter_per_what").textContent = "second";
        }
        if (player.settings["matter_gain"] == "s_rl") {
            md1_speed = big(1000 / player.challenge_strength_1);
            if (player.inertia_enabled) md1_speed = md1_speed.mult(player.inertia_multiplier);
            document.getElementById("matter_per_what").textContent = "real-life second";
        }
        if (player.settings["matter_gain"] == "min_rl") {
            md1_speed = big(60 * 1000 / player.challenge_strength_1);
            if (player.inertia_enabled) md1_speed = md1_speed.mult(player.inertia_multiplier);
            document.getElementById("matter_per_what").textContent = "real-life minute";
        }

        md1_speed = md1_speed.mult(player.upgrades['TICKSPEED'].get_effect());
        let matter_per_sec = player.dimensions['matter_1'].get_production_total(md1_speed);
        document.getElementById("matter_per_sec").textContent = format_number(matter_per_sec, true);
    }

    // Temperature unlocks menu settings
    if (player.upgrades['d91'].is_active()) document.getElementById("setting_hide_until_temperature").style.display = "";
    else document.getElementById("setting_hide_until_temperature").style.display = "none";

    // achievement 83: smart Temperature distribution
    if (player.achievements['83'].complete) document.getElementById("smart_distribution_checkbox").style.display = "flex";
    else document.getElementById("smart_distribution_checkbox").style.display = "none";

    // Automation Shop layers
    if (player.unlocked_neutronic) document.getElementById("automation_shop_vacuumic").style.visibility = "";
    else document.getElementById("automation_shop_vacuumic").style.visibility = "hidden";
    if (player.unlocked_vacuumic) document.getElementById("automation_shop_vacuumic").textContent = "Vacuumic";
    else document.getElementById("automation_shop_vacuumic").textContent = "???";

    if (player.unlocked_vacuumic) document.getElementById("automation_shop_dimensional").style.visibility = "";
    else document.getElementById("automation_shop_dimensional").style.visibility = "hidden";
    if (player.unlocked_dimensional) document.getElementById("automation_shop_dimensional").textContent = "Dimensional";
    else document.getElementById("automation_shop_dimensional").textContent = "???";

    if (player.unlocked_dimensional) document.getElementById("automation_shop_atomic").style.visibility = "";
    else document.getElementById("automation_shop_atomic").style.visibility = "hidden";
    if (player.unlocked_atomic) document.getElementById("automation_shop_atomic").textContent = "Atomic";
    else document.getElementById("automation_shop_atomic").textContent = "???";

    if (player.unlocked_atomic) document.getElementById("automation_shop_biological").style.visibility = "";
    else document.getElementById("automation_shop_biological").style.visibility = "hidden";
    if (player.unlocked_biological) document.getElementById("automation_shop_biological").textContent = "Biological";
    else document.getElementById("automation_shop_biological").textContent = "???";

    // Dilation
    if (!player.experienced_dilation) document.getElementById("challenge_strength_11").style.display = "none";
    else document.getElementById("challenge_strength_11").style.display = "";
    
    // ST autobuyers
    if (player.milestones['a01_3'].is_active()) player.unlocked_st_autobuyers = true;

    // Wave autobuyers
    if (player.milestones['a04_1'].is_active()) player.unlocked_wave_autobuyers = true;

    // Show IDs
    if (player.settings['show_ids'] || pressed_buttons['shift']) {
        let elements = document.getElementsByClassName('upgrade-id');
        for (let i = 0; i < elements.length; i++) {
            elements.item(i).style.display = '';
        }
    }
    else {
        let elements = document.getElementsByClassName('upgrade-id');
        for (let i = 0; i < elements.length; i++) {
            elements.item(i).style.display = 'none';
        }
    }

    // completed and all achievements
    let completed_achievements = 0;
    let all_achievements = 0;
    for (let key of Object.keys(player.achievements)) {
        all_achievements += 1;
        if (player.achievements[key].complete) completed_achievements += 1;
    }
    document.getElementById("completed_achievements_count").textContent = format_number(completed_achievements);
    document.getElementById("all_achievements_count").textContent = format_number(all_achievements);

    // achievement 127: unlock buy max dimensional upgrades
    if (player.achievements['127'].complete) {
        document.getElementById("upgrades_dimensional_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_dimensional_buy_max").style.display = "none";
    }

    // evolution b06: unlock Extinctions
    if (player.evolutions['b06'].is_active()) {
        document.getElementById("perform_extinction_button").style.display = "";
        document.getElementById("perform_extinction_setting").style.display = "";
    }
    else {
        document.getElementById("perform_extinction_button").style.display = "none";
        document.getElementById("perform_extinction_setting").style.display = "none";
    }

    // achievement 147: unlock buy max atomic upgrades
    if (player.achievements['147'].complete) {
        document.getElementById("upgrades_atomic_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_atomic_buy_max").style.display = "none";
    }

    // Uncapped atoms
    if (player.milestones['a05_2'].is_active()) player.uncapped_atoms = true;

    // Unlocked experiments
    if (player.evolutions['b12'].is_active()) player.experienced_experiments = true;

    // Scrollable prestige menu
    if (player.settings["separate_scroll_right"]) document.getElementsByClassName('prestige-menu')[0].classList.add('scrollable');
    else document.getElementsByClassName('prestige-menu')[0].classList.remove('scrollable');


    if (get_current_menu() == "matter_dimensions") screen_update_matter_dimensions();

    if (get_current_menu() == "photonic_dimensions") screen_update_photonic_dimensions();

    if (get_current_menu() == "gravitonic_upgrades") screen_update_gravitonic_upgrades();
    if (get_current_menu() == "gravitonic_dimensions") screen_update_gravitonic_dimensions();

    if (get_current_menu() == "neutronic_upgrades") screen_update_neutronic_upgrades();
    if (get_current_menu() == "neutronic_dimensions") screen_update_neutronic_dimensions();

    if (get_current_menu() == "vacuumic_upgrades") screen_update_vacuumic_upgrades();
    if (get_current_menu() == "vacuumic_dimensions") screen_update_vacuumic_dimensions();

    if (get_current_menu() == "dimensional_dimensions") screen_update_dimensional_dimensions();

    if (get_current_menu() == "section_settings") screen_update_settings();

    update_unlocked_menus();
    update_unlock_hint();
    update_hotkey_visibility();
    update_autobuyer_toggles();
    process_visibility_classes();
}

function unlocked_layers() {
    let resets = 0;
    if (player.unlocked_photonic) resets += 1;
    if (player.unlocked_gravitonic) resets += 1;
    if (player.unlocked_neutronic) resets += 1;
    if (player.unlocked_vacuumic) resets += 1;
    if (player.unlocked_dimensional) resets += 1;
    if (player.unlocked_atomic) resets += 1;
    if (player.unlocked_biological) resets += 1;
    return resets;
}

function update_unlocked_menus() {
    document.getElementById("menu_button_automation").style.display = "none";
    document.getElementById("menu_button_photonic").style.display = "none";
    document.getElementById("menu_button_photonic_dimensions").style.display = "none";
    document.getElementById("menu_button_photonic_upgrades").style.display = "none";
    document.getElementById("menu_button_photonic_challenges").style.display = "none";
    document.getElementById("menu_button_gravitonic").style.display = "none";
    document.getElementById("menu_button_gravitonic_dimensions").style.display = "none";
    document.getElementById("menu_button_gravitonic_upgrades").style.display = "none";
    document.getElementById("menu_button_gravitonic_challenges").style.display = "none";
    document.getElementById("menu_button_neutronic").style.display = "none";
    document.getElementById("menu_button_neutronic_dimensions").style.display = "none";
    document.getElementById("menu_button_neutronic_upgrades").style.display = "none";
    document.getElementById("menu_button_neutronic_challenges").style.display = "none";
    document.getElementById("menu_button_vacuumic").style.display = "none";
    document.getElementById("menu_button_vacuumic_dimensions").style.display = "none";
    document.getElementById("menu_button_vacuumic_upgrades").style.display = "none";
    document.getElementById("menu_button_vacuumic_challenges").style.display = "none";
    document.getElementById("menu_button_vacuumic_temperature").style.display = "none";
    document.getElementById("menu_button_dimensional").style.display = "none";
    document.getElementById("menu_button_dimensional_dimensions").style.display = "none";
    document.getElementById("menu_button_dimensional_upgrades").style.display = "none";
    document.getElementById("menu_button_dimensional_challenges").style.display = "none";
    document.getElementById("menu_button_atomic").style.display = "none";
    document.getElementById("menu_button_atomic_upgrades").style.display = "none";
    document.getElementById("menu_button_atomic_collider").style.display = "none";
    document.getElementById("menu_button_atomic_experiments").style.display = "none";
    document.getElementById("menu_button_biological").style.display = "none";
    document.getElementById("menu_button_biological_population").style.display = "none";
    document.getElementById("menu_button_biological_evolutions").style.display = "none";

    // Photonic upgrades
    if (player.unlocked_photonic) {
        document.getElementById("menu_button_photonic").style.display = "";
        document.getElementById("menu_button_photonic_upgrades").style.display = "";
    }

    // Gravitonic upgrades
    if (player.unlocked_gravitonic) {
        document.getElementById("menu_button_gravitonic").style.display = "";
        document.getElementById("menu_button_gravitonic_upgrades").style.display = "";
    }

    // Neutronic upgrades
    if (player.unlocked_neutronic) {
        document.getElementById("menu_button_neutronic").style.display = "";
        document.getElementById("menu_button_neutronic_upgrades").style.display = "";
    }

    // Vacuumic upgrades
    if (player.unlocked_vacuumic) {
        document.getElementById("menu_button_vacuumic").style.display = "";
        document.getElementById("menu_button_vacuumic_upgrades").style.display = "";
    }

    // Dimensional upgrades
    if (player.unlocked_dimensional) {
        document.getElementById("menu_button_dimensional").style.display = "";
        document.getElementById("menu_button_dimensional_upgrades").style.display = "";
    }

    // Atomic upgrades
    if (player.unlocked_atomic) {
        document.getElementById("menu_button_atomic").style.display = "";
        document.getElementById("menu_button_atomic_upgrades").style.display = "";
    }

    // Biological upgrades and population
    if (player.unlocked_biological) {
        document.getElementById("menu_button_biological").style.display = "";
        document.getElementById("menu_button_biological_population").style.display = "";
        document.getElementById("menu_button_biological_evolutions").style.display = "";
    }

    // Photonic dimensions
    if (player.upgrades['g20'].is_active()) {
        document.getElementById("menu_button_photonic").style.display = "";
        document.getElementById("menu_button_photonic_dimensions").style.display = "";
    }

    // Photonic challenges
    if (player.upgrades['g40'].is_active()) {
        document.getElementById("menu_button_photonic").style.display = "";
        document.getElementById("menu_button_photonic_challenges").style.display = "";
    }

    // Gravitonic dimensions and challenges
    if (player.upgrades['n33'].is_active()) {
        document.getElementById("menu_button_gravitonic").style.display = "";
        document.getElementById("menu_button_gravitonic_dimensions").style.display = "";
        document.getElementById("menu_button_gravitonic_challenges").style.display = "";
    }

    // Neutronic dimensions
    if (player.upgrades['v142'].is_active()) {
        document.getElementById("menu_button_neutronic").style.display = "";
        document.getElementById("menu_button_neutronic_dimensions").style.display = "";
    }

    // Neutronic challenges
    if (player.upgrades['v141'].is_active()) {
        document.getElementById("menu_button_neutronic").style.display = "";
        document.getElementById("menu_button_neutronic_challenges").style.display = "";
    }

    // Vacuumic dimensions
    if (player.upgrades['d71'].is_active()) {
        document.getElementById("menu_button_vacuumic").style.display = "";
        document.getElementById("menu_button_vacuumic_dimensions").style.display = "";
    }

    // Temperature
    if (player.upgrades['d91'].is_active()) {
        document.getElementById("menu_button_vacuumic").style.display = "";
        document.getElementById("menu_button_vacuumic_temperature").style.display = "";
    }

    // Automation Shop
    if (player.achievements['32'].complete) {
        document.getElementById("menu_button_automation").style.display = "";
    }

    // Collider
    if (player.achievements['93'].complete) {
        document.getElementById("menu_button_atomic").style.display = "";
        document.getElementById("menu_button_atomic_collider").style.display = "";
    }

    // Vacuumic challenges
    if (player.upgrades['d114'].is_active()) {
        document.getElementById("menu_button_vacuumic").style.display = "";
        document.getElementById("menu_button_vacuumic_challenges").style.display = "";
    }

    // Dimensional dimensions
    if (player.milestones['a06_1'].is_active()) {
        document.getElementById("menu_button_dimensional").style.display = "";
        document.getElementById("menu_button_dimensional_dimensions").style.display = "";
    }

    // Dimensional challenges
    if (player.evolutions['b08'].is_active()) {
        document.getElementById("menu_button_dimensional").style.display = "";
        document.getElementById("menu_button_dimensional_challenges").style.display = "";
    }

    // Atomic experiments
    if (player.evolutions['b12'].is_active()) {
        document.getElementById("menu_button_atomic").style.display = "";
        document.getElementById("menu_button_atomic_experiments").style.display = "";
    }
}

function update_unlock_hint() {
    document.getElementById("unlock_hint_photonic").style.display = "none"; 
    document.getElementById("unlock_hint_gravitonic").style.display = "none"; 
    document.getElementById("unlock_hint_neutronic").style.display = "none"; 
    document.getElementById("unlock_hint_vacuumic").style.display = "none"; 
    document.getElementById("unlock_hint_dimensional").style.display = "none"; 
    document.getElementById("unlock_hint_atomic").style.display = "none"; 
    document.getElementById("unlock_hint_biological").style.display = "none"; 

    if (!player.unlocked_photonic) document.getElementById("unlock_hint_photonic").style.display = "";
    else if (!player.unlocked_gravitonic) document.getElementById("unlock_hint_gravitonic").style.display = "";
    else if (!player.unlocked_neutronic) document.getElementById("unlock_hint_neutronic").style.display = "";
    else if (!player.unlocked_vacuumic) document.getElementById("unlock_hint_vacuumic").style.display = "";
    else if (!player.unlocked_dimensional) document.getElementById("unlock_hint_dimensional").style.display = "";
    else if (!player.unlocked_atomic) document.getElementById("unlock_hint_atomic").style.display = "";
    else if (!player.unlocked_biological) document.getElementById("unlock_hint_biological").style.display = "";
}

function update_hotkey_visibility() {
    document.getElementById("hotkey_dimension_2").style.display = "none"; 
    document.getElementById("hotkey_dimension_3").style.display = "none"; 
    document.getElementById("hotkey_dimension_4").style.display = "none"; 
    document.getElementById("hotkey_dimension_5").style.display = "none"; 
    document.getElementById("hotkey_dimension_6").style.display = "none"; 
    document.getElementById("hotkey_dimension_7").style.display = "none"; 
    document.getElementById("hotkey_dimension_8").style.display = "none"; 
    document.getElementById("hotkey_dimension_9").style.display = "none"; 
    document.getElementById("hotkey_dimension_10").style.display = "none"; 
    document.getElementById("hotkey_upgrade_ids").style.display = "none"; 

    if (player.challenge_strength_6 >= 2) document.getElementById("hotkey_dimension_2").style.display = ""; 
    if (player.challenge_strength_6 >= 3) document.getElementById("hotkey_dimension_3").style.display = ""; 
    if (player.challenge_strength_6 >= 4) document.getElementById("hotkey_dimension_4").style.display = ""; 
    if (player.challenge_strength_6 >= 5) document.getElementById("hotkey_dimension_5").style.display = ""; 
    if (player.challenge_strength_6 >= 6) document.getElementById("hotkey_dimension_6").style.display = ""; 
    if (player.challenge_strength_6 >= 7) document.getElementById("hotkey_dimension_7").style.display = ""; 
    if (player.challenge_strength_6 >= 8) document.getElementById("hotkey_dimension_8").style.display = ""; 
    if (player.challenge_strength_6 >= 9) document.getElementById("hotkey_dimension_9").style.display = ""; 
    if (player.challenge_strength_6 >= 10) document.getElementById("hotkey_dimension_10").style.display = ""; 
    if (unlocked_layers(player) > 0) document.getElementById("hotkey_upgrade_ids").style.display = ""; 
}

function process_visibility_classes() {
    let elements_hide; 
    let elements_none;

    // Photonic
    elements_hide = document.getElementsByClassName("visibility-hidden-until-photonic");
    elements_none = document.getElementsByClassName("display-none-until-photonic");
    if (player.unlocked_photonic) {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "";
        }
    }
    else {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "hidden";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "none";
        }
    }

    // Gravitonic
    elements_hide = document.getElementsByClassName("visibility-hidden-until-gravitonic");
    elements_none = document.getElementsByClassName("display-none-until-gravitonic");
    if (player.unlocked_gravitonic) {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "";
        }
    }
    else {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "hidden";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "none";
        }
    }

    // Neutronic
    elements_hide = document.getElementsByClassName("visibility-hidden-until-neutronic");
    elements_none = document.getElementsByClassName("display-none-until-neutronic");
    if (player.unlocked_neutronic) {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "";
        }
    }
    else {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "hidden";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "none";
        }
    }

    // Vacuumic
    elements_hide = document.getElementsByClassName("visibility-hidden-until-vacuumic");
    elements_none = document.getElementsByClassName("display-none-until-vacuumic");
    if (player.unlocked_vacuumic) {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "";
        }
    }
    else {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "hidden";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "none";
        }
    }

    // Dimensional
    elements_hide = document.getElementsByClassName("visibility-hidden-until-dimensional");
    elements_none = document.getElementsByClassName("display-none-until-dimensional");
    if (player.unlocked_dimensional) {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "";
        }
    }
    else {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "hidden";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "none";
        }
    }

    // Atomic
    elements_hide = document.getElementsByClassName("visibility-hidden-until-atomic");
    elements_none = document.getElementsByClassName("display-none-until-atomic");
    if (player.unlocked_atomic) {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "";
        }
    }
    else {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "hidden";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "none";
        }
    }

    // Biological
    elements_hide = document.getElementsByClassName("visibility-hidden-until-biological");
    elements_none = document.getElementsByClassName("display-none-until-biological");
    if (player.unlocked_biological) {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "";
        }
    }
    else {
        for (let i = 0; i < elements_hide.length; i++) {
            elements_hide.item(i).style.visibility = "hidden";
        }
        for (let i = 0; i < elements_none.length; i++) {
            elements_none.item(i).style.display = "none";
        }
    }

    // Fix for changelog lines
    if (player.settings["show_all_changelog"]) {
        let elements = document.getElementsByClassName("changelog-line");
        for (let i = 0; i < elements.length; i++) {
            elements.item(i).style.display = "";
        }
    }
}



function get_tickspeed_power() {
    let base_pow = big(2);

    // black holes boost tickspeed power
    base_pow = base_pow.mult(power_black_holes_tickspeed());
    // p41: tickspeed power is increased
    base_pow = base_pow.mult(player.upgrades['p41'].get_effect());
    // Temperature Milestone 8: tickspeed power is increased
    if (player.milestones['temperature_8'].is_active()) base_pow = base_pow.mult(player.milestones['temperature_8'].get_effect());
    // a11: tickspeed power is increased
    base_pow = base_pow.mult(player.upgrades['a11'].get_effect());

    let tickspeed_effectiveness = big(1);
    // Neutronic Challenge 3 reward: Tickspeed Upgrades are more effective
    tickspeed_effectiveness = tickspeed_effectiveness.mult(player.challenges['n3'].get_effect());
    // a02_1: Tickspeed Upgrades are 10% more effective
    if (player.milestones['a02_1'].is_active()) tickspeed_effectiveness = tickspeed_effectiveness.mult(player.milestones['a02_1'].get_effect());
    // x-ray waves boost tickspeed efficiency
    if (player.milestones['a04_2'].is_active()) tickspeed_effectiveness = tickspeed_effectiveness.mult(wave_effect('xray').div(100).add(1));

    // Neutronic Challenge 3: Tickspeed Upgrade effect is additive
    if (player.challenges['n3'].inC()) base_pow = base_pow.mult(tickspeed_effectiveness);
    else base_pow = base_pow.pow(tickspeed_effectiveness);

    return base_pow;
}
function get_tickspeed_amount(amt=player.upgrades['TICKSPEED'].amt) {
    let base_amt = big(amt);

    // Gravitonic Challenge 5: you gain -10 free tickspeed upgrades
    if (player.challenges['g5'].inC()) base_amt = base_amt.subtract(10);
    // Gravitonic Challenge 5 reward: you gain afree tickspeed upgrade
    if (player.challenges['g5'].completed) base_amt = base_amt.add(1);
    // v91: you gain free tickspeed upgrades based on bought 1st Matter Dimensions
    if (player.upgrades['v91'].is_active()) base_amt = base_amt.add(player.upgrades['v91'].get_effect());
    // v181: gain tickspeed upgrades based on max photons earned at once
    if (player.upgrades['v181'].is_active()) base_amt = base_amt.add(player.upgrades['v181'].get_effect());
    // a02_2: gain 6 Tickspeed Upgrades per Dimensional Shift
    if (player.milestones['a02_2'].is_active()) base_amt = base_amt.add(player.milestones['a02_2'].get_effect());
    
    // Neutronic Challenge 2: you can gain Tickspeed Upgrades only from Stars
    if (player.challenges['n2'].inC()) base_amt = big(0);
    // Stars provide free Tickspeed Upgrades
    base_amt = base_amt.add(power_stars_tickspeed());

    return base_amt;
}
function space_theorems_invested() {
    let space_theorems = big(0);
    
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("v0")) {
            space_theorems = space_theorems.add(player.upgrades[key].amt);
        }
    }

    space_theorems = space_theorems.subtract(player.space_theorems);

    return space_theorems;
}
function respec_vacuumic_tree() {
    if (player.settings['prestige_confirmation_vacuumic_tree']) {
        let default_limit = big(1e10);
        // achievement 42: you can store 2 times more resources
        if (player.achievements['42'].complete) default_limit = default_limit.mult(2);
        // achievement 91: you can store 1e10 times more resources
        if (player.achievements['91'].complete) default_limit = default_limit.mult(1e10);

        if (player.vacuum_energy.gt(default_limit) && !player.achievements['108'].complete) {
            let result = confirm("Are you sure you want to reset Space Theorem tree? You will lose Vacuum Energy due to the reduced resource limit!\n(This warning can be disabled in Settings)");
            if (!result) return;
        }
    }

    // Challenge 4: all resources are capped
    player.space_theorems = player.space_theorems.add(space_theorems_invested()).round().min(player.challenge_strength_4);

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("v") && !key.includes("v0")) {
            // achievement 88: keep all automation upgrades
            if (player.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
            player.upgrades[key].reset();
        }
    }

    if (player.unlocked_st_autobuyers && player.settings["auto_disable_vtree_autobuyer"]) player.activated_st_autobuyers = false;

    reset_vacuumic(true);
}

function cap_resources() {
    update_challenges_power();

    player.matter = player.matter.min(player.challenge_strength_4);
    player.antimatter = player.antimatter.min(player.challenge_strength_4);
    player.energy = player.energy.min(player.challenge_strength_4);
    // achievement 108: Space is not affected by resource limit
    if (!player.achievements['108'].complete) player.space = player.space.min(player.challenge_strength_4);

    player.photons = player.photons.min(player.challenge_strength_4);
    player.gravitons = player.gravitons.min(player.challenge_strength_4);
    player.neutrons = player.neutrons.min(player.challenge_strength_4);
    // achievement 108: Vacuum Energy is not affected by resource limit
    if (!player.achievements['108'].complete) player.vacuum_energy = player.vacuum_energy.min(player.challenge_strength_4);
    // challenge d4: Shards are not affected by resource limit
    if (!(!player.challenges['d0'].inC() && (player.challenges['d4'].inC() || player.challenges['d4'].completed))) {
        player.shards = player.shards.min(player.challenge_strength_4);
    }
    // a05_2: Atoms and Collision Knowledge are not affected by resource limit
    if (!player.milestones['a05_2'].is_active()) {
        player.atoms = player.atoms.min(player.challenge_strength_4);
        player.collision_knowledge = player.collision_knowledge.min(player.challenge_strength_4);
    }
    player.genes = player.genes.min(player.challenge_strength_4);

    // Vacuumic Challenge 5: the resource limit for Light, Black Holes, Stars and Inflation is 1e5. 
    if (!player.challenges['v5'].inC()) {
        player.light = player.light.min(player.challenge_strength_4);
        player.black_holes = player.black_holes.min(player.challenge_strength_4);
        player.stars = player.stars.min(player.challenge_strength_4);
        player.inflation = player.inflation.min(player.challenge_strength_4);
    }
    else {
        player.light = player.light.min(1e5);
        player.black_holes = player.black_holes.min(1e5);
        player.stars = player.stars.min(1e5);
        player.inflation = player.inflation.min(1e5);
    }
    player.manifolds = player.manifolds.min(player.challenge_strength_4);

    player.proton_power = player.proton_power.min(player.challenge_strength_4);
    player.electron_power = player.electron_power.min(player.challenge_strength_4);
    player.boson_power = player.boson_power.min(player.challenge_strength_4);

    player.space_theorems = player.space_theorems.min(player.challenge_strength_4);

    player.infrared_waves = player.infrared_waves.min(player.challenge_strength_4);
    player.red_waves = player.red_waves.min(player.challenge_strength_4);
    player.green_waves = player.green_waves.min(player.challenge_strength_4);
    player.blue_waves = player.blue_waves.min(player.challenge_strength_4);
    player.ultraviolet_waves = player.ultraviolet_waves.min(player.challenge_strength_4);

    for (let key of Object.keys(player.dimensions)) {
        player.dimensions[key].amt = player.dimensions[key].amt.min(player.challenge_strength_4);
    }
}
function get_space_production() {
    let space_production = big(0);
    if (!player.matter.lt(1e10)) space_production = big(2).pow(player.matter.log(10).subtract(10)).mult(0.01);
    // d63: speed up space production
    space_production = space_production.mult(player.upgrades['d63'].get_effect());
    // achievement 118: space production is raised to a power of 1.1, if it is above 1/s
    if (player.achievements['118'].complete && space_production.gt(1)) space_production = space_production.pow(1.1);
    // Vacuumic Challenge 1 reward: space production is raised to a power of 1.1, if it is above 1/s
    if (player.challenges['v1'].completed && space_production.gt(1)) space_production = space_production.pow(1.1);
    // Vacuumic Challenge 1: space gain is raised to the power of 0.1
    if (player.challenges['v1'].inC()) space_production = space_production.pow(0.1);

    return space_production;
}

function max_buy_upgrades(level) {
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes(level)) {
            player.upgrades[key].buy(player.upgrades[key].binary_search_max());

            // AUTO1_4: instantly gain Grations upon reset
            // just QoL
            if (level == 'g' && player.upgrades['AUTO1_4'].is_active() && player.upgrades['AUTO1_4'].enabled) {
                if (can_gravitonic()) {
                    let gravitons_gained = prestige_earn_gravitons();
                    // Challenge 4: all resources are capped
                    player.gravitons = player.gravitons.add(gravitons_gained).round().min(player.challenge_strength_4);

                    player.max_gravitons = player.max_gravitons.max(player.gravitons);
                    player.max_gravitons_in_nc = player.max_gravitons_in_nc.max(player.gravitons);
                }
            }
        }
    }
}

function update_autobuyer_toggles() {
    let elements = document.getElementsByClassName('autobuyer-toggle');
    for (let i = 0; i < elements.length; i++) {
        if (functions[player.autobuyers[elements.item(i).attributes.layer.value + "_1"].availability_function]()) elements.item(i).style.display = "";
        else elements.item(i).style.display = "none";
    }
}