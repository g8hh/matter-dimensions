class Experiment {
    constructor(id, tab, level_nerf_function="", level_effect_function="") {
        this.id = id;
        this.tab = tab;
        this.level_nerf_function = level_nerf_function;
        this.level_effect_function = level_effect_function;

        this.current_level = 0;
        this.selected_level = 0;
    }

    get_nerf(level=this.current_level) {
        if (this.level_nerf_function == "") return big(1);
        else return functions[this.level_nerf_function](level);
    }

    get_effect(level=this.current_level) {
        if (this.level_effect_function == "") return big(1);
        else return functions[this.level_effect_function](level);
    }

    update() {
        let elements = document.getElementsByName("experiment_" + this.id);
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                this.selected_level = Number(elements[i].value);
            }
        }
    }

    update_first() {
        let elements = document.getElementsByName("experiment_" + this.id);
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].value == this.selected_level) {
                elements[i].checked = true;
            }
            else {
                elements[i].checked = false;
            }
        }
    }

    enter() {
        this.current_level = this.selected_level;
    }

    exit() {
        this.current_level = 0;
    }

    screen_update() {
        this.update();

        if (get_current_menu() != this.tab) return;

        let container = document.getElementById("exp_table_" + this.id);
        for (let element of container.children) {
            let exp_level = Number(element.attributes.level.value);

            if (exp_level == this.current_level) element.classList.add('current');
            else element.classList.remove('current');
            if (exp_level == this.selected_level) element.classList.add('selected');
            else element.classList.remove('selected');

            for (let value_el of element.getElementsByClassName("level")) {
                value_el.textContent = format_number(exp_level);
            }
            for (let value_el of element.getElementsByClassName("nerf-value")) {
                value_el.textContent = format_number(this.get_nerf(exp_level));
            }
            for (let value_el of element.getElementsByClassName("effect-value")) {
                value_el.textContent = format_number(this.get_effect(exp_level));
            }
        }
    }

    create_save() {
        let data = [];

        data.push(this.current_level);
        data.push(this.selected_level);

        return data;
    }

    load_save(data) {
        this.current_level = data[0];
        this.selected_level = data[1];
    }
}