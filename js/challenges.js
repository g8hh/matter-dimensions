class Challenge {
    constructor(id, name, layer, combines, start_function, goal_check, end_function, max_completions=1, goal_function="", effect_function="") {
        this.id = id;
        this.name = name;
        this.layer = layer;
        this.combines = combines;
        this.start_function = start_function;
        this.goal_check = goal_check;
        this.end_function = end_function;
        this.max_completions = max_completions;
        this.goal_function = goal_function;
        this.effect_function = effect_function;

        this.in_challenge = false;
        this.in_combined_challenge = false;
        this.parent_challenge_id = "";
        this.completed = false;
        this.completions = 0;

        this.fastest_time = 365 * 24 * 60 * 60 * 1000;
    }

    goal(c=Math.min(this.max_completions, this.completions + 1)) {
        return functions[this.goal_function](c);
    }

    get_effect(c=this.completions) {
        return functions[this.effect_function](c);
    }

    start() {
        if (this.in_challenge) return;
        if (this.layer in player.current_challenge && player.current_challenge[this.layer] != "") return;

        functions[this.start_function]();

        this.combines.forEach(challenge_id => {
            player.challenges[challenge_id].start_combined(this.id);
        });

        this.reset_layer();
        this.in_challenge = true;
        player.current_challenge[this.layer] = this.id;

        // achievement 25: start a challenge
        player.achievements['25'].award();
    }

    start_combined(parent) {
        functions[this.start_function]();
        this.in_combined_challenge = true;
        this.parent_challenge_id = parent;

        this.combines.forEach(challenge_id => {
            player.challenges[challenge_id].start_combined(parent);
        });
    }

    inC() {
        return this.in_challenge || this.in_combined_challenge;
    }

    click() {
        if (this.in_combined_challenge) return;
        if (this.in_challenge) this.exit();
        else this.start();

        screen_update();
    }

    update() {
        if (!this.inC()) return;
        if (this.in_challenge && functions[this.goal_check]()) this.complete();
    }

    screen_update() {
        this.update();

        var status = "Not started";
        var btn_text = "Start";
        var color = "challenge-card";

        if (this.completed) {
            status = "Completed";
            if (this.max_completions == 1 || this.completions == this.max_completions) color = "challenge-card complete";
        }
        if (this.inC()) {
            status = "In challenge";
            btn_text = "Exit";
            if (this.in_combined_challenge) {
                status = "In " + player.challenges[this.parent_challenge_id].name;
                btn_text = "In challenge";
            }
            if (color == "challenge-card") color = "challenge-card in-progress";
        }
        else if (this.layer in player.current_challenge && player.current_challenge[this.layer] != "") {
            btn_text = "In challenge";
        }

        document.getElementById("challenge_" + this.id + "_status").textContent = status;
        document.getElementById("challenge_" + this.id + "_button_text").textContent = btn_text;
        document.getElementById("challenge_" + this.id).className = color;
        document.getElementById("challenge_" + this.id + "_name").textContent = this.name;
        if (document.getElementById("challenge_" + this.id + "_current_effect") !== null) document.getElementById("challenge_" + this.id + "_current_effect").textContent = format_number(this.get_effect());
        if (this.goal_function != "") document.getElementById("challenge_" + this.id + "_goal").textContent = format_number(this.goal());
        if (this.max_completions > 1) {
            document.getElementById("challenge_" + this.id + "_name").textContent += "x" + Math.min(this.max_completions, this.completions + 1);
            document.getElementById("challenge_" + this.id + "_next_effect").textContent = format_number(this.get_effect(Math.min(this.max_completions, this.completions + 1)));
            if (this.completions == this.max_completions) document.getElementById("challenge_" + this.id + "_next").style.display = "none";
            else document.getElementById("challenge_" + this.id + "_next").style.display = "";
        }

        if (btn_text == "In challenge") document.getElementById("challenge_" + this.id + "_button").className = "setting-button disabled";
        else document.getElementById("challenge_" + this.id + "_button").className = "setting-button";
    }

    complete() {
        if (this.in_challenge && !functions[this.goal_check]()) return;
        if (this.in_challenge) {
            this.completed = true;
            if (this.completions < this.max_completions) this.completions += 1;
            this.fastest_time = Math.min(this.fastest_time, player.time_passed);

            // achievement 26: complete a challenge
            player.achievements['26'].award();

            // achievement 76: complete PC6 while in GC6 and NC6
            if (this.id == "p6" && player.challenges['g6'].inC() && player.challenges['n6'].inC()) player.achievements['76'].award();
        }

        this.exit(false);
    }

    exit(force=true) {
        if (!this.inC()) return;
        if (this.in_challenge) player.current_challenge[this.layer] = "";
        // Quick reset
        if (force && this.in_challenge) this.reset_layer();
        
        this.in_challenge = false;
        this.in_combined_challenge = false;
        this.parent_challenge_id = "";

        this.combines.forEach(challenge_id => {
            player.challenges[challenge_id].exit(force);
        });
        functions[this.end_function]();
    }

    reset_layer() {
        functions["challenge_reset_" + this.layer]();
    }

    create_save() {
        let data = [];

        data.push(this.in_challenge);
        data.push(this.in_combined_challenge);
        data.push(this.parent_challenge_id);
        data.push(this.completed);
        data.push(this.fastest_time);
        data.push(this.completions);

        return data;
    }

    load_save(data) {
        this.in_challenge = data[0];
        this.in_combined_challenge = data[1];
        this.parent_challenge_id = data[2];
        this.completed = data[3];
        this.fastest_time = data[4];
        if (data.length > 5) this.completions = data[5];
    }
}