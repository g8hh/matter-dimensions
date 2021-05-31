class Autobuyer {
    constructor(id, obj, availability_function, visible=true) {
        this.id = id;
        this.obj = obj;
        this.availability_function = availability_function;
        this.visible = visible;

        this.enabled = false;

        if (typeof this.obj === 'string' || this.obj instanceof String) {
            this.buy_type = "amt";
            this.param = 0;
        }
    }

    update() {
        if (!functions[this.availability_function]()) return;
        if (!this.enabled) return;

        if (this.id.includes('VTREE') && !player.activated_st_autobuyers) return;

        if (typeof this.obj === 'string' || this.obj instanceof String) {
            if (this.obj == "photonic_upgrades") max_buy_upgrades('p');
            if (this.obj == "gravitonic_upgrades") max_buy_upgrades('g');
            if (this.obj == "neutronic_upgrades") max_buy_upgrades('n');
        }

        if (player.time_passed == 0 && (typeof this.obj === 'string' || this.obj instanceof String)) return;

        if (this.obj instanceof Dimension || this.obj instanceof Upgrade) {
            this.obj.buy(this.obj.binary_search_max());
        }

        if (typeof this.obj === 'string' || this.obj instanceof String) {
            if (this.buy_type == "amt") {
                var pp_amt = big(0);
                if (this.obj == "photonic") pp_amt = prestige_earn_photons();
                if (this.obj == "gravitonic") pp_amt = prestige_earn_gravitons();
                if (this.obj == "neutronic") pp_amt = prestige_earn_neutrons();
                if (this.obj == "vacuumic") pp_amt = prestige_earn_vacuum_energy();
                if (this.obj == "dimensional") pp_amt = prestige_earn_shards();
                if (this.obj.includes("temperature")) pp_amt = wave_gain(this.obj.substr("temperature".length + 1));

                if (!pp_amt.lt(this.param)) {
                    if (this.obj == "photonic") reset_photonic(false, false, true);
                    if (this.obj == "gravitonic") reset_gravitonic(false, false, true);
                    if (this.obj == "neutronic") reset_neutronic(false, false, true);
                    if (this.obj == "vacuumic") reset_vacuumic(false, false, true);
                    if (this.obj == "dimensional") reset_dimensional(false, false, true);
                    if (this.obj.includes("temperature")) reset_temperature(this.obj.substr("temperature".length + 1));
                }
            }
        }
    }

    update_params() {
        if (document.body.contains(document.getElementById("autobuyer_" + this.id + "_toggle"))) {
            if (document.getElementById("autobuyer_" + this.id + "_toggle").checked) this.enabled = true;
            else this.enabled = false;
        }
        if (document.body.contains(document.getElementById("autobuyer_" + this.id + "_param"))) {
            this.param = document.getElementById("autobuyer_" + this.id + "_param").value;
        }
    }

    screen_update() {
        if (this.visible) {
            if (!functions[this.availability_function]()) document.getElementById("autobuyer_" + this.id).style.visibility = "hidden";
            else document.getElementById("autobuyer_" + this.id).style.visibility = "";
        }
        else {
            if (!functions[this.availability_function]()) document.getElementById("autobuyer_" + this.id).style.display = "none";
            else document.getElementById("autobuyer_" + this.id).style.display = "";
        }
    }

    screen_update_first() {
        this.screen_update();

        if (document.body.contains(document.getElementById("autobuyer_" + this.id + "_toggle"))) {
            if (this.enabled) document.getElementById("autobuyer_" + this.id + "_toggle").checked = true;
            else document.getElementById("autobuyer_" + this.id + "_toggle").checked = false;
        }
        if (document.body.contains(document.getElementById("autobuyer_" + this.id + "_param"))) {
            document.getElementById("autobuyer_" + this.id + "_param").value = new String(this.param);
        }
    }

    create_save() {
        let data = [];
        
        let object_data = [];
        if (this.obj instanceof Dimension) {
            object_data.push(0);
            object_data.push(this.obj.id);
        }
        if (this.obj instanceof Upgrade) {
            object_data.push(1);
            object_data.push(this.obj.id);
        }
        if (typeof this.obj === 'string' || this.obj instanceof String) {
            object_data.push(2);
            object_data.push(this.obj);
        }
        data.push(object_data);

        //data.push(this.availability_function);
        data.push("");
        data.push(this.enabled);

        if (typeof this.obj === 'string' || this.obj instanceof String) {
            data.push(this.buy_type);
            data.push(unescape(encodeURIComponent(this.param)));
        }

        return data;
    }

    load_save(data) {     
        if (data[0][0] == 0) {
            this.obj = player.dimensions[data[0][1]];
        }
        if (data[0][0] == 1) {
            this.obj = player.upgrades[data[0][1]];
        }
        if (data[0][0] == 2) {
            this.obj = data[0][1];
        }

        //this.availability_function = data[1];
        this.enabled = data[2];

        if (typeof this.obj === 'string' || this.obj instanceof String) {
            this.buy_type = data[3];
            try {
                this.param = decodeURIComponent(escape(data[4]));
            }
            catch (e) {
                this.param = data[4];
            }
        }

        this.screen_update_first();
    }
}