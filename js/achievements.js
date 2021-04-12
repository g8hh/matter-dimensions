class Achievement {
    constructor(id, name, desc, complete_function, additional_class="") { // complete_function: () -> complete
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.complete_function = complete_function;
        this.additional_class = additional_class;

        this.complete = false;
    }

    update() {
        if (!this.complete && functions[this.complete_function]()) this.award();
        document.getElementById("achievement_" + this.id + "_name").textContent = this.name;
        document.getElementById("achievement_" + this.id).setAttribute("data-desc", this.desc);
        if (this.complete) {
            document.getElementById("achievement_" + this.id).className = "achievement complete " + this.additional_class;
        }
        else {
            document.getElementById("achievement_" + this.id).className = "achievement " + this.additional_class;
        }
    }

    award() {
        if (!this.complete) { 
            this.complete = true;
            let popup = document.createElement('p');
            popup.id = "achievement_popup_" + this.id;
            popup.onclick = function() { destroy_achievement_popup(this.id) };
            popup.innerHTML = this.name;

            setTimeout(fade_achievement_popup, 4000, popup.id);

            let container = document.getElementById("achievement_track");
            container.appendChild(popup);
        }
    }

    create_save() {
        return this.complete;
    }

    load_save(data) {
        this.complete = data;
    }
}

function get_achievements_multiplier() {
    var base_bonus = big(1.1);
    // Temperature Milestone 1: achievement bonus is increased
    if (player.milestones['temperature_1'].is_active()) base_bonus = player.milestones['temperature_1'].get_effect();

    var res = new BigNumber(1);

    for (let key of Object.keys(player.achievements)) {
        if (player.achievements[key].complete) res = res.mult(base_bonus);
    }

    return res;
}