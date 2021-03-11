class Milestone {
    constructor(id, availability_function, activation_function, effect_function, goal_function, custom_goal_display_function="") {
        this.id = id;
        this.availability_function = availability_function;
        this.activation_function = activation_function;
        this.effect_function = effect_function;
        this.goal_function = goal_function;

        this.custom_goal_display_function = custom_goal_display_function;
    }

    is_active() {
        return functions[this.availability_function]() && functions[this.activation_function]();
    }

    get_effect() {
        return functions[this.effect_function]();
    }

    screen_update() {
        if (document.body.contains(document.getElementById("milestone_" + this.id))) {
            if (!functions[this.availability_function]()) document.getElementById("milestone_" + this.id).style.display = "none";
            else document.getElementById("milestone_" + this.id).style.display = "";
        }
        if (this.custom_goal_display_function == "") document.getElementById("milestone_" + this.id + "_goal").textContent = format_number(functions[this.goal_function]());
        else document.getElementById("milestone_" + this.id + "_goal").textContent = functions[this.custom_goal_display_function](functions[this.goal_function]());
        if (this.is_active()) document.getElementById("milestone_" + this.id + "_indicator").className = "milestone complete";
        else document.getElementById("milestone_" + this.id + "_indicator").className = "milestone";
        if (document.body.contains(document.getElementById("milestone_" + this.id + "_effect"))) document.getElementById("milestone_" + this.id + "_effect").textContent = format_number(this.get_effect());
    }
}