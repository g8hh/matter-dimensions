var free_atom_levels = {};
var alpha_reactions_active = 0;

function update_collider_first() {
    for (let key of Object.keys(MECHANIC_COLLIDER_REACTION_LIST)) {
        if (key in player.active_reactions && player.active_reactions[key]) 
            document.getElementById("mechanic_collider_reaction_checkbox_" + key).checked = true;
    }
}

function get_atom_level(key) {
    if (!(key in free_atom_levels)) free_atom_levels[key] = big(0);
    if (!functions[player.upgrades[key].availability_function]()) return big(0);
    return big(player.upgrades[key].amt).add(free_atom_levels[key]);
}

function element_unlock_limit() {
    let base_limit = 6;
    // evolution b05: unlock elements up to Oxygen
    if (player.evolutions['b05'].is_active()) base_limit = 8;
    // evolution b11: unlock elements up to Silicon
    if (player.evolutions['b11'].is_active()) base_limit = 14;
    return base_limit;
}

function highest_unlocked_element() {
    let base_limit = 1;
    let max_limit = element_unlock_limit();

    let element_effect = base_limit + player.collision_points_in_synthesis;
    // evolution b04: get free level of Synthesis
    if (player.evolutions['b04'].is_active()) element_effect += 1;
    // evolution b07: get free level of Synthesis
    if (player.evolutions['b07'].is_active()) element_effect += 1;

    return Math.min(element_effect, max_limit);
}

function next_ck_hint(amt) {
    let resource_need = big(amt).add(1);

    // experiments boost CK gain
    if (player.evolutions['b12'].is_active()) resource_need = resource_need.pow(big(1).div(get_current_experiment_effect()));

    // a03_1: increase CK gain
    if (player.milestones['a03_1'].is_active()) resource_need = resource_need.div(player.milestones['a03_1'].get_effect());
    // achievement 121: double gain
    if (player.achievements['121'].complete) resource_need = resource_need.div(2);

    return resource_need.mult(2).max(2).pow(1024);
}

function change_collision_categories(id, amt) {
    // Ctrl
    if (pressed_buttons['ctrl']) {
        if (amt < 0) amt = -Infinity;
        else amt = Infinity;
    }

    amt = Math.min(amt, player.collision_points);
    if (id == 1) amt = Math.max(amt, -player.collision_points_in_reaction);
    if (id == 2) amt = Math.max(amt, -player.collision_points_in_synthesis);
    if (id == 3) amt = Math.max(amt, -player.collision_points_in_generation);

    player.collision_points -= amt;
    if (id == 1) player.collision_points_in_reaction += amt;
    if (id == 2) player.collision_points_in_synthesis += amt;
    if (id == 3) player.collision_points_in_generation += amt;

    // Disable auto-assigner
    if (amt != 0 && player.achievements['143'].complete && player.auto_assigner_enabled && player.settings['auto_disable_auto_assigner']) player.auto_assigner_enabled = false;
}

function reaction_points_effect_photons() {
    return free_atom_levels['ph'].pow(0.5).add(1);
}
function reaction_points_effect_neutrons() {
    return free_atom_levels['n'].pow(0.5).add(1);
}

function generation_points_effect() {
    let base_effect = big(player.collision_points_in_generation);
    // evolution b04: get free levels of Generation
    if (player.evolutions['b04'].is_active()) base_effect = base_effect.add(player.evolutions['b04'].get_effect());
    // a10_1: get free levels of Generation
    if (player.milestones['a10_1'].is_active()) base_effect = base_effect.add(player.milestones['a10_1'].get_effect());

    // a10: make all Generation more effective
    base_effect = base_effect.mult(player.upgrades['a10'].get_effect()).rounddown();

    return base_effect;
}

const MECHANIC_COLLIDER_ELEMENT_NAMES = ["Hydrogen", "Helium", 
    "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
    "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon",
    "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron"];
const MECHANIC_COLLIDER_ELEMENT_ABBRS = ["H", "He", 
    "Li", "Be", "B", "C", "N", "O", "F", "Ne", 
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe"];
const MECHANIC_COLLIDER_REACTION_LIST = {
    'cr1': [['a01', 'a01'], ['a02', 'ph']], // Proton-proton chain
    'cr2': [['a02', 'a02'], ['a02', 'a01', 'a01']],
    'cr3': [['a02', 'a02'], ['a04', 'ph']],
    'cr4': [['a03', 'a01'], ['a02', 'a02']],
    'cr5': [['a04', 'a01'], ['a05', 'ph']],
    'cr6': [['a04'], ['a02', 'a02']],
    'cr7': [['a06', 'a01'], ['a07', 'ph']], // Carbon-nitrogen-oxygen cycle
    'cr8': [['a07', 'a01'], ['a08', 'ph']],
    'cr9': [['a07', 'a01'], ['a06', 'a02']],
    'cr10': [['a08', 'a01'], ['a09', 'ph']],
    'cr11': [['a08', 'a01'], ['a07', 'a02']],
    'cr12': [['a09', 'a01'], ['a10', 'ph']],
    'cr13': [['a02', 'a02'], ['a04']], // Triple-alpha process
    'cr14': [['a04', 'a02'], ['a06', 'ph', 'ph']],
    'cr15': [['a06', 'a02'], ['a08', 'ph']], // Alpha process
    'cr16': [['a08', 'a02'], ['a10', 'ph']],
    'cr17': [['a10', 'a02'], ['a12', 'ph']],
    'cr18': [['a12', 'a02'], ['a14', 'ph']],
    /*'cr19': [['a14', 'a02'], ['a16', 'ph']],
    'cr20': [['a16', 'a02'], ['a18', 'ph']],
    'cr21': [['a18', 'a02'], ['a20', 'ph']],
    'cr22': [['a20', 'a02'], ['a22', 'ph']],
    'cr23': [['a22', 'a02'], ['a24', 'ph']],
    'cr24': [['a24', 'a02'], ['a26', 'ph']],*/
    'cr25': [['a06', 'a06'], ['a10', 'a02']], // Carbon burning
    'cr26': [['a06', 'a06'], ['a11', 'a01']],
    'cr27': [['a06', 'a06'], ['a12', 'n']],
    'cr28': [['a06', 'a06'], ['a12', 'ph']],
    'cr29': [['a06', 'a06'], ['a08', 'a02', 'a02']],
    'cr30': [['a10', 'a02'], ['a12', 'n']], // Neon burning
    'cr31': [['a08', 'a08'], ['a14', 'a02']], // Oxygen burning
    /*'cr32': [['a08', 'a08'], ['a15', 'a01']],
    'cr33': [['a08', 'a08'], ['a16', 'n']],*/
    'cr34': [['a08', 'a08'], ['a14', 'a01', 'a01']],
    /*'cr35': [['a08', 'a08'], ['a15', 'a01']],
    'cr36': [['a08', 'a08'], ['a16', 'ph']],*/
    'cr37': [['a08', 'a08'], ['a12', 'a02', 'a02']]
};

function format_element(num) {
    return MECHANIC_COLLIDER_ELEMENT_NAMES[num - 1] + " (" + num + ")";
}

function levels_passed_through_reaction_ratio() {
    let base = big(0.5);
    // achievement 151: reactions are 2% more effective
    if (player.achievements['151'].complete) base = base.mult(1.02);
    
    return base;
}

function switch_auto_assigner_status() {
    player.auto_assigner_enabled = !player.auto_assigner_enabled;
}

function is_alpha_reaction(key) {
    return 13 <= Number(key.substr(2)) && Number(key.substr(2)) <= 24;
}

function update_collider() {
    // achievement 143: unlock autobuyer and auto-assigner for Collision Points
    if (player.achievements['143'].complete && player.auto_assigner_enabled && player.collision_points > 0) {
        let checked_reactions = 0;
        for (let key of Object.keys(MECHANIC_COLLIDER_REACTION_LIST)) {
            if (!document.getElementById("mechanic_collider_reaction_checkbox_" + key).checked) continue;
    
            let reaction_visible = true;
            for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][0].length; i++) {
                if (MECHANIC_COLLIDER_REACTION_LIST[key][0][i].includes('a') 
                && !functions[player.upgrades[MECHANIC_COLLIDER_REACTION_LIST[key][0][i]].availability_function]()) {
                    reaction_visible = false;
                    break;
                }
            }
            for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][1].length; i++) {
                if (MECHANIC_COLLIDER_REACTION_LIST[key][1][i].includes('a') 
                && !functions[player.upgrades[MECHANIC_COLLIDER_REACTION_LIST[key][1][i]].availability_function]()) {
                    reaction_visible = false;
                    break;
                }
            }
            if (reaction_visible) checked_reactions++;
        }
        if (checked_reactions > player.collision_points_in_reaction) {
            player.collision_points_in_reaction++;
            player.collision_points--;
        }
        else {
            if (highest_unlocked_element() < element_unlock_limit()) {
                player.collision_points_in_synthesis++;
                player.collision_points--;
            }
            else {
                player.collision_points_in_generation++;
                player.collision_points--;
            }
        }
    }

    let generation_levels = generation_points_effect();

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a')) {
            free_atom_levels[key] = big(0);
            if (functions[player.upgrades[key].availability_function]()) free_atom_levels[key] = generation_levels;
        }
    }
    free_atom_levels['ph'] = big(0);
    free_atom_levels['n'] = big(0);

    // evolution b11: get more base Oxygen levels
    if (functions[player.upgrades['a08'].availability_function]() && player.evolutions['b11'].is_active()) {
        free_atom_levels['a08'] = free_atom_levels['a08'].add(player.evolutions['b11'].get_effect().subtract(1).mult(player.upgrades['a08'].amt).rounddown());
    }


    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a')) {
            if (!(functions[player.upgrades[key].availability_function]())) continue;
            let element_level = Number(key.substr(1));

            // a14_1: get free levels of elements up to Carbon
            if (player.milestones['a14_1'].is_active() && element_level <= 6) {
                free_atom_levels[key] = free_atom_levels[key].add(player.milestones['a14_1'].get_effect());
            }
        }
    }

    alpha_reactions_active = 0;

    if (!player.upgrades['v211'].is_active()) {
        document.getElementById("mechanic_collider_ck_prebreak").style.display = "";
        document.getElementById("mechanic_collider_next_ck_hint").style.display = "none";
    }
    else {
        document.getElementById("mechanic_collider_ck_prebreak").style.display = "none";
        document.getElementById("mechanic_collider_next_ck_hint").style.display = "";
    }
    document.getElementById("mechanic_collider_next_ck_at").textContent = format_number(next_ck_hint(prestige_earn_collision_knowledge()));
    if (prestige_earn_collision_knowledge(player).gt(100)) {
        document.getElementById("mechanic_collider_next_ck_hint").style.display = "none";
    }

    if (player.collision_points == 0) {
        document.getElementById("mechanic_collider_reaction_inc").className = "upgrade disabled";
        document.getElementById("mechanic_collider_synthesis_inc").className = "upgrade disabled";
        document.getElementById("mechanic_collider_generation_inc").className = "upgrade disabled";
    }
    else {
        document.getElementById("mechanic_collider_reaction_inc").className = "upgrade";
        document.getElementById("mechanic_collider_synthesis_inc").className = "upgrade";
        document.getElementById("mechanic_collider_generation_inc").className = "upgrade";
    }
    if (player.collision_points_in_reaction == 0) document.getElementById("mechanic_collider_reaction_dec").className = "upgrade disabled";
    else document.getElementById("mechanic_collider_reaction_dec").className = "upgrade";
    if (player.collision_points_in_synthesis == 0) document.getElementById("mechanic_collider_synthesis_dec").className = "upgrade disabled";
    else document.getElementById("mechanic_collider_synthesis_dec").className = "upgrade";
    if (player.collision_points_in_generation == 0) document.getElementById("mechanic_collider_generation_dec").className = "upgrade disabled";
    else document.getElementById("mechanic_collider_generation_dec").className = "upgrade";

    document.getElementById("mechanic_collider_synthesis_limit").textContent = format_element(element_unlock_limit());
    document.getElementById("mechanic_collider_synthesis_effect").textContent = format_element(highest_unlocked_element());
    document.getElementById("mechanic_collider_generation_effect").textContent = format_number(generation_levels);

    let unlocked_elements = highest_unlocked_element();
    let elements = document.getElementsByClassName("collider-periodic-table-element");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).style.visibility = "hidden";
    }
    for (let i = 1; i <= unlocked_elements; i++) {
        document.getElementById("mechanic_collider_element_" + i).style.visibility = "";
    }

    let transfer_ratio = levels_passed_through_reaction_ratio();
    document.getElementById("mechanic_collider_free_level_transfer").textContent = format_number(transfer_ratio.mult(100));

    let activated_reactions = 0;
    for (let key of Object.keys(MECHANIC_COLLIDER_REACTION_LIST)) {
        player.active_reactions[key] = document.getElementById("mechanic_collider_reaction_checkbox_" + key).checked;
        document.getElementById("mechanic_collider_reaction_" + key).className = "collider-reaction-formula";

        let reaction_visible = true;
        for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][0].length; i++) {
            if (MECHANIC_COLLIDER_REACTION_LIST[key][0][i].includes('a') 
            && !functions[player.upgrades[MECHANIC_COLLIDER_REACTION_LIST[key][0][i]].availability_function]()) {
                reaction_visible = false;
                break;
            }
        }
        for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][1].length; i++) {
            if (MECHANIC_COLLIDER_REACTION_LIST[key][1][i].includes('a') 
            && !functions[player.upgrades[MECHANIC_COLLIDER_REACTION_LIST[key][1][i]].availability_function]()) {
                reaction_visible = false;
                break;
            }
        }
        if (reaction_visible) document.getElementById("mechanic_collider_reaction_" + key).style.display = "";
        else document.getElementById("mechanic_collider_reaction_" + key).style.display = "none";

        if (reaction_visible && player.active_reactions[key] && activated_reactions < player.collision_points_in_reaction) {
            activated_reactions += 1;
            if (is_alpha_reaction(key)) alpha_reactions_active += 1;
            
            let total_free_levels = big(0);
            for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][0].length; i++) {
                total_free_levels = total_free_levels.add(get_atom_level(MECHANIC_COLLIDER_REACTION_LIST[key][0][i]));
            }

            let reaction_power = big(transfer_ratio);
            // a09: alpha is more effective
            if (is_alpha_reaction(key)) reaction_power = reaction_power.mult(player.upgrades['a09'].get_effect()); 

            total_free_levels = total_free_levels.mult(reaction_power).add(1e-6).rounddown();

            for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][1].length; i++) {
                free_atom_levels[MECHANIC_COLLIDER_REACTION_LIST[key][1][i]] = free_atom_levels[MECHANIC_COLLIDER_REACTION_LIST[key][1][i]].add(total_free_levels);
            }
            document.getElementById("mechanic_collider_reaction_" + key).className = "collider-reaction-formula active";
        }
    }
    if (unlocked_elements < 2) document.getElementById("mechanic_collider_reactions_section_1").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_1").style.display = "";
    if (unlocked_elements < 7) document.getElementById("mechanic_collider_reactions_section_2").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_2").style.display = "";
    if (unlocked_elements < 4) document.getElementById("mechanic_collider_reactions_section_3").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_3").style.display = "";
    if (unlocked_elements < 8) document.getElementById("mechanic_collider_reactions_section_4").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_4").style.display = "";
    if (unlocked_elements < 8) document.getElementById("mechanic_collider_reactions_section_5").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_5").style.display = "";
    if (unlocked_elements < 12) document.getElementById("mechanic_collider_reactions_section_6").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_6").style.display = "";
    if (unlocked_elements < 12) document.getElementById("mechanic_collider_reactions_section_7").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_7").style.display = "";

    document.getElementById("mechanic_collider_reaction_photons").textContent = format_number(reaction_points_effect_photons());
    document.getElementById("mechanic_collider_reaction_neutrons").textContent = format_number(reaction_points_effect_neutrons());

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a')) {
            if (!functions[player.upgrades[key].availability_function]()) free_atom_levels[key] = big(0);
            document.getElementById("mechanic_collider_" + key + "_level").textContent = format_number(get_atom_level(key));
            document.getElementById("upgrade_" + key + "_total_level").textContent = format_number(get_atom_level(key));
        }
    }

    // achievement 143: unlock autobuyer and auto-assigner for Collision Points
    if (!player.achievements['143'].complete) document.getElementById('mechanic_collider_auto_assigner').style.display = 'none';
    else {
        document.getElementById('mechanic_collider_auto_assigner').style.display = '';
        if (player.auto_assigner_enabled) {
            document.getElementById('mechanic_collider_auto_assigner_state').textContent = "enabled";
            document.getElementById('mechanic_collider_auto_assigner_button_text').textContent = "Disable";
        }
        else {
            document.getElementById('mechanic_collider_auto_assigner_state').textContent = "disabled";
            document.getElementById('mechanic_collider_auto_assigner_button_text').textContent = "Enable";
        }
    }
}