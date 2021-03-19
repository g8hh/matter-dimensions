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


    elements = document.getElementsByClassName("power_light_production");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_light_production());
    }

    elements = document.getElementsByClassName("power_black_holes_tickspeed");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_black_holes_tickspeed());
    }

    elements = document.getElementsByClassName("power_stars_tickspeed");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_stars_tickspeed());
    }

    elements = document.getElementsByClassName("power_stars_light_effect");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_stars_light_effect());
    }

    elements = document.getElementsByClassName("power_inflation_matter");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(power_inflation_matter());
    }

    let manifold_power = power_manifolds();
    elements = document.getElementsByClassName("power_manifolds");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(manifold_power);
    }
    for (let i = 1; i <= player.challenge_strength_6; i++) {
        document.getElementById("dimensional_boost_" + i).textContent = format_number(manifold_power.pow(player.dimensions["dimensional_" + i].amt_bought));
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

    // light boosts which dimension
    if (!me.upgrades['g23'].is_active()) document.getElementById("light_boosts_which_dimension").textContent = "1st Matter Dimension";
    else document.getElementById("light_boosts_which_dimension").textContent = "1st and 2nd Matter Dimensions";

    // light boosts time
    if (me.challenges['p4'].inC()) {
        document.getElementById("power_light_time_info").style.display = "";
        elements = document.getElementsByClassName("power_light_time");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(power_light_time().pow(-1));
        }
    }
    else if (me.upgrades['g24'].is_active()) {
        document.getElementById("power_light_time_info").style.display = "";
        elements = document.getElementsByClassName("power_light_time");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(power_light_time());
        }
    }
    else document.getElementById("power_light_time_info").style.display = "none";

    // black holes give gravitons
    if (me.upgrades['v83'].is_active()) {
        document.getElementById("power_black_holes_gravitons_info").style.display = "";
        elements = document.getElementsByClassName("power_black_holes_gravitons");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(me.upgrades['v83'].get_effect());
        }
    }
    else document.getElementById("power_black_holes_gravitons_info").style.display = "none";

    // particle powers
    if (!player.upgrades['n04'].is_active()) document.getElementById("power_block_proton").style.visibility = "hidden";
    else document.getElementById("power_block_proton").style.visibility = "";
    if (!player.upgrades['n05'].is_active()) document.getElementById("power_block_electron").style.visibility = "hidden";
    else document.getElementById("power_block_electron").style.visibility = "";
    if (!player.upgrades['n06'].is_active()) document.getElementById("power_block_boson").style.visibility = "hidden";
    else document.getElementById("power_block_boson").style.visibility = "";

    // tickspeed
    if (!functions[player.upgrades['TICKSPEED'].availability_function]()) document.getElementById("tickspeed_wrapper").style.display = "none";
    else document.getElementById("tickspeed_wrapper").style.display = "";
    document.getElementById("upgrade_TICKSPEED_reduction").textContent = format_number(get_tickspeed_power());

    // vacuumic tree
    document.getElementById("respec_space_theorems").textContent = format_number(space_theorems_invested());
    update_vacuumic_tree();

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

    // gravitonic challenges that remove blocks
    if (me.challenges['g0'].inC()) document.getElementById("block_gravitonic_0").style.display = "none";
    else document.getElementById("block_gravitonic_0").style.display = "";
    if (me.challenges['g1'].inC()) document.getElementById("block_gravitonic_1").style.display = "none";
    else document.getElementById("block_gravitonic_1").style.display = "";
    if (me.challenges['g2'].inC()) document.getElementById("block_gravitonic_2").style.display = "none";
    else document.getElementById("block_gravitonic_2").style.display = "";
    if (me.challenges['g3'].inC()) document.getElementById("block_gravitonic_3").style.display = "none";
    else document.getElementById("block_gravitonic_3").style.display = "";
    if (me.challenges['g4'].inC()) document.getElementById("block_gravitonic_4").style.display = "none";
    else document.getElementById("block_gravitonic_4").style.display = "";

    // achievement 62: unlock buy max photonic upgrades
    if (player.achievements['62'].complete || player.achievements['72'].complete) {
        document.getElementById("upgrades_photonic_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_photonic_buy_max").style.display = "none";
    }

    // tickspeed compound type
    if (me.challenges['n3'].inC()) document.getElementById("tickspeed_compound_type").textContent = "+";
    else document.getElementById("tickspeed_compound_type").textContent = "×";

    // black holes boost resource limit
    if (me.upgrades['v183'].is_active()) {
        document.getElementById("power_black_holes_resource_limit_info").style.display = "";
        elements = document.getElementsByClassName("power_black_holes_resource_limit");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(me.upgrades['v183'].get_effect());
        }
    }
    else document.getElementById("power_black_holes_resource_limit_info").style.display = "none";

    // stars boost 1st Photonic Dimension
    if (me.upgrades['v192'].is_active()) {
        document.getElementById("power_stars_photonic_dim_info").style.display = "";
        elements = document.getElementsByClassName("power_stars_photonic_dim");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(me.upgrades['v192'].get_effect());
        }
    }
    else document.getElementById("power_stars_photonic_dim_info").style.display = "none";

    // stars produce black holes
    if (me.upgrades['v193'].is_active()) {
        document.getElementById("power_stars_black_holes_info").style.display = "";
        elements = document.getElementsByClassName("power_stars_black_holes");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(me.upgrades['v193'].get_effect());
        }
    }
    else document.getElementById("power_stars_black_holes_info").style.display = "none";

    // v211: BREAK INFINITY
    if (player.upgrades['v211'].is_active()) document.getElementById("challenge_strength_4").style.display = "none";
    else document.getElementById("challenge_strength_4").style.display = "";

    // Gravitonic unlocks
    if (!player.challenges['p1'].completed) document.getElementById("pc1_unlock_upgrade").style.display = "";
    else document.getElementById("pc1_unlock_upgrade").style.display = "none";
    if (!player.challenges['p2'].completed) document.getElementById("pc2_unlock_upgrade").style.display = "";
    else document.getElementById("pc2_unlock_upgrade").style.display = "none";
    if (!player.challenges['p3'].completed) document.getElementById("pc3_unlock_upgrade").style.display = "";
    else document.getElementById("pc3_unlock_upgrade").style.display = "none";
    if (!player.challenges['p4'].completed) document.getElementById("pc4_unlock_upgrade").style.display = "";
    else document.getElementById("pc4_unlock_upgrade").style.display = "none";
    if (!player.challenges['p5'].completed) document.getElementById("pc5_unlock_upgrade").style.display = "";
    else document.getElementById("pc5_unlock_upgrade").style.display = "none";
    if (!player.challenges['p6'].completed) document.getElementById("pc6_unlock_upgrade").style.display = "";
    else document.getElementById("pc6_unlock_upgrade").style.display = "none";
    if (!player.challenges['p7'].completed) document.getElementById("pc7_unlock_upgrade").style.display = "";
    else document.getElementById("pc7_unlock_upgrade").style.display = "none";
    if (!player.challenges['p8'].completed) document.getElementById("pc8_unlock_upgrade").style.display = "";
    else document.getElementById("pc8_unlock_upgrade").style.display = "none";

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

    // Dilation
    if (!player.experienced_dilation) document.getElementById("challenge_strength_11").style.display = "none";
    else document.getElementById("challenge_strength_11").style.display = "";
    
    // inflation boosts 1st and 2nd Photonic Dimension
    if (me.upgrades['d101'].is_active()) {
        document.getElementById("power_inflation_photonic_info").style.display = "";
        elements = document.getElementsByClassName("power_inflation_photonic");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(me.upgrades['d101'].get_effect());
        }
    }
    else document.getElementById("power_inflation_photonic_info").style.display = "none";

    // ST autobuyers
    if (me.milestones['a01_3'].is_active()) me.unlocked_st_autobuyers = true;
    if (me.unlocked_st_autobuyers) {
        document.getElementById("st_autobuyer_toggle").style.display = "";
        if (me.activated_st_autobuyers) {
            document.getElementById("st_autobuyer_toggle_status").textContent = "enabled";
            document.getElementById("st_autobuyer_button_text").textContent = "Disable";
        }
        else {
            document.getElementById("st_autobuyer_toggle_status").textContent = "disabled";
            document.getElementById("st_autobuyer_button_text").textContent = "Enable";
        }
    }
    else document.getElementById("st_autobuyer_toggle").style.display = "none";

    // achievement 64: unlock buy max gravitonic upgrades
    if (player.achievements['64'].complete || player.upgrades['AUTO1_5'].is_active()) {
        document.getElementById("upgrades_gravitonic_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_gravitonic_buy_max").style.display = "none";
    }

    // Wave autobuyers
    if (me.milestones['a04_1'].is_active()) me.unlocked_wave_autobuyers = true;

    // Show IDs
    if (me.settings['show_ids']) {
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

    // inflation boosts first three Gravitonic Dimension
    if (me.upgrades['d111'].is_active()) {
        document.getElementById("power_inflation_gravitonic_info").style.display = "";
        elements = document.getElementsByClassName("power_inflation_gravitonic");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(me.upgrades['d111'].get_effect());
        }
    }
    else document.getElementById("power_inflation_gravitonic_info").style.display = "none";

    // inflation boosts first four Neutronic Dimension
    if (me.upgrades['d112'].is_active()) {
        document.getElementById("power_inflation_neutronic_info").style.display = "";
        elements = document.getElementsByClassName("power_inflation_neutronic");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = format_number(me.upgrades['d112'].get_effect());
        }
    }
    else document.getElementById("power_inflation_neutronic_info").style.display = "none";

    // achievement 97: unlock buy max neutronic upgrades
    if (player.achievements['97'].complete || player.upgrades['AUTO2_5'].is_active()) {
        document.getElementById("upgrades_neutronic_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_neutronic_buy_max").style.display = "none";
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

    update_unlocked_menus();
    update_unlock_hint();
    update_hotkey_visibility();
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
    document.getElementById("menu_button_atomic").style.display = "none";
    document.getElementById("menu_button_atomic_upgrades").style.display = "none";
    document.getElementById("menu_button_atomic_collider").style.display = "none";
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
    if (me.upgrades['g20'].is_active()) {
        document.getElementById("menu_button_photonic").style.display = "";
        document.getElementById("menu_button_photonic_dimensions").style.display = "";
    }

    // Photonic challenges
    if (me.upgrades['g40'].is_active()) {
        document.getElementById("menu_button_photonic").style.display = "";
        document.getElementById("menu_button_photonic_challenges").style.display = "";
    }

    // Gravitonic dimensions and challenges
    if (me.upgrades['n33'].is_active()) {
        document.getElementById("menu_button_gravitonic").style.display = "";
        document.getElementById("menu_button_gravitonic_dimensions").style.display = "";
        document.getElementById("menu_button_gravitonic_challenges").style.display = "";
    }

    // Neutronic dimensions
    if (me.upgrades['v142'].is_active()) {
        document.getElementById("menu_button_neutronic").style.display = "";
        document.getElementById("menu_button_neutronic_dimensions").style.display = "";
    }

    // Neutronic challenges
    if (me.upgrades['v141'].is_active()) {
        document.getElementById("menu_button_neutronic").style.display = "";
        document.getElementById("menu_button_neutronic_challenges").style.display = "";
    }

    // Vacuumic dimensions
    if (me.upgrades['d71'].is_active()) {
        document.getElementById("menu_button_vacuumic").style.display = "";
        document.getElementById("menu_button_vacuumic_dimensions").style.display = "";
    }

    // Temperature
    if (me.upgrades['d91'].is_active()) {
        document.getElementById("menu_button_vacuumic").style.display = "";
        document.getElementById("menu_button_vacuumic_temperature").style.display = "";
    }

    // Automation Shop
    if (me.achievements['32'].complete) {
        document.getElementById("menu_button_automation").style.display = "";
    }

    // Collider
    if (me.achievements['93'].complete) {
        document.getElementById("menu_button_atomic").style.display = "";
        document.getElementById("menu_button_atomic_collider").style.display = "";
    }

    // Vacuumic challenges
    if (me.upgrades['d114'].is_active()) {
        document.getElementById("menu_button_vacuumic").style.display = "";
        document.getElementById("menu_button_vacuumic_challenges").style.display = "";
    }

    // Dimensional dimensions
    if (me.milestones['a06_1'].is_active()) {
        document.getElementById("menu_button_dimensional").style.display = "";
        document.getElementById("menu_button_dimensional_dimensions").style.display = "";
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

    let tickspeed_effectiveness = big(1);
    // Neutronic Challenge 3 reward: Tickspeed Upgrades are more effective
    tickspeed_effectiveness = tickspeed_effectiveness.mult(me.challenges['n3'].get_effect());
    // a02_1: Tickspeed Upgrades are 10% more effective
    if (me.milestones['a02_1'].is_active()) tickspeed_effectiveness = tickspeed_effectiveness.mult(me.milestones['a02_1'].get_effect());
    // x-ray waves boost tickspeed efficiency
    if (me.milestones['a04_2'].is_active()) tickspeed_effectiveness = tickspeed_effectiveness.mult(wave_effect('xray').div(100).add(1));

    // Neutronic Challenge 3: Tickspeed Upgrade effect is additive
    if (me.challenges['n3'].inC()) base_pow = base_pow.mult(tickspeed_effectiveness);
    else base_pow = base_pow.pow(tickspeed_effectiveness);

    return base_pow;
}
function space_theorems_invested() {
    let space_theorems = big(0);
    
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("v0")) {
            space_theorems = space_theorems.add(player.upgrades[key].amt);
        }
    }

    space_theorems = space_theorems.subtract(me.space_theorems);

    return space_theorems;
}
function respec_vacuumic_tree() {
    if (me.settings['prestige_confirmation_vacuumic_tree']) {
        let default_limit = big(1e10);
        // achievement 42: you can store 2 times more resources
        if (player.achievements['42'].complete) default_limit = default_limit.mult(2);
        // achievement 91: you can store 1e10 times more resources
        if (player.achievements['91'].complete) default_limit = default_limit.mult(1e10);

        if (player.vacuum_energy.gt(default_limit) && !me.achievements['108'].complete) {
            let result = confirm("Are you sure you want to reset Space Theorem tree? You will lose Vacuum Energy due to the reduced resource limit!\n(This warning can be disabled in Settings)");
            if (!result) return;
        }
    }

    // Challenge 4: all resources are capped
    player.space_theorems = player.space_theorems.add(space_theorems_invested()).round().min(me.challenge_strength_4);

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes("v") && !key.includes("v0")) {
            // achievement 88: keep all automation upgrades
            if (me.achievements['88'].complete && (key == "v71" || key == "v72")) continue;
            player.upgrades[key].reset();
        }
    }

    if (player.unlocked_st_autobuyers) player.activated_st_autobuyers = false;

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
    player.shards = player.shards.min(player.challenge_strength_4);
    // a05_2: Atoms and Collision Knowledge are not affected by resource limit
    if (!player.milestones['a05_2'].is_active()) {
        player.atoms = player.atoms.min(player.challenge_strength_4);
        player.collision_knowledge = player.collision_knowledge.min(player.challenge_strength_4);
    }

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

    for (let key of Object.keys(me.dimensions)) {
        me.dimensions[key].amt = me.dimensions[key].amt.min(player.challenge_strength_4);
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
    for (let key of Object.keys(me.upgrades)) {
        if (key.includes(level)) {
            me.upgrades[key].buy(me.upgrades[key].binary_search_max());

            // AUTO1_4: instantly gain Grations upon reset
            // just QoL
            if (level == 'g' && me.upgrades['AUTO1_4'].is_active() && me.upgrades['AUTO1_4'].enabled) {
                if (can_gravitonic(me)) {
                    let gravitons_gained = prestige_earn_gravitons(me);
                    // Challenge 4: all resources are capped
                    me.gravitons = me.gravitons.add(gravitons_gained).round().min(me.challenge_strength_4);

                    me.max_gravitons = me.max_gravitons.max(me.gravitons);
                    me.max_gravitons_in_nc = me.max_gravitons_in_nc.max(me.gravitons);
                }
            }
        }
    }
}