class Upgrade {
    constructor(id, tab, max_level, cost_function, power_function, unlock_function, currency, currency_display_name, availability_function, custom_buy_function="", custom_cost_display_function="", unconventional=false) { // cost_function: (amt) -> cost; power_function: (amt) -> power; unlock_function: () -> unlock; availability_function: () -> availability
        this.id = id;
        this.tab = tab;
        this.max_level = max_level;
        this.cost_function = cost_function;
        this.power_function = power_function;
        this.unlock_function = unlock_function;
        this.currency = currency;
        if (typeof currency_display_name === 'string' || currency_display_name instanceof String) {
            this.currency_display_name_singular = currency_display_name;
            this.currency_display_name_plural = currency_display_name;
        }
        else {
            this.currency_display_name_singular = currency_display_name[0];
            this.currency_display_name_plural = currency_display_name[1];
        }
        this.availability_function = availability_function;
        this.custom_buy_function = custom_buy_function;
        this.custom_cost_display_function = custom_cost_display_function;
        this.unconventional = unconventional;

        this.amt = 0;

        this.enabled = true;
        this.block_other_click = false; // technical
    }

    get_effect() {
        if (!functions[this.availability_function]()) return functions[this.power_function](0);
        return functions[this.power_function](this.amt);
    }

    is_active() {
        return this.amt > 0 && functions[this.availability_function]();
    }

    get_cost(buy_amt = 1) {
        var real_amt = buy_amt;
        if (this.max_level != -1) real_amt = Math.min(buy_amt, this.max_level - this.amt);

        var base_cost = new BigNumber(0);
        for (var i = buy_amt - 1; i >= 0; i--) {
            // Cheating. Hopefully, nobody will notice
            if (buy_amt - i > 5) break;
            // Challenge 9: all costs are raised to a power
            let one_cost = big(0);
            if (!this.unconventional) one_cost = functions[this.cost_function](this.amt + i).pow(player.challenge_strength_9).round().max(1);
            else one_cost = functions[this.cost_function](this.amt + i).round();
            if (base_cost.gt(one_cost.mult(1e20))) break; 
            base_cost = base_cost.add(one_cost);
        }

        return base_cost;
    }

    can_buy(buy_amt = 1) {
        if (this.max_level != -1 && this.amt + buy_amt > this.max_level) return false;
        if (!functions[this.unlock_function]()) return false;
        if (!functions[this.availability_function]()) return false;

        if (this.currency instanceof Dimension) {
            return !(this.currency.amt.lt(this.get_cost(buy_amt)));
        }
        else return !(player[this.currency].lt(this.get_cost(buy_amt)));
    }

    buy(buy_amt = 1) {
        if (this.block_other_click) {
            this.block_other_click = false;
            return;
        }
        if (!this.can_buy(buy_amt)) return;

        if (this.currency instanceof Dimension) {
            this.currency.amt = this.currency.amt.subtract(this.get_cost(buy_amt)).max(0);
        }
        else {
            player[this.currency] = player[this.currency].subtract(this.get_cost(buy_amt)).max(0);
            // Rounding fix
            if (this.currency != "matter") {
                player[this.currency] = player[this.currency].round();
            }
        }

        this.amt += buy_amt;
        if (this.max_level != -1) this.amt = Math.min(this.amt, this.max_level);
        if (this.custom_buy_function != "") functions[this.custom_buy_function](buy_amt);

        update_challenges_power();
    }

    binary_search_max() {
        var r = 1;
        var iter = 0;
        while (this.can_buy(r) && iter < 100) {
            r *= 2;
            iter += 1;
        }
        var l = 0;
        for (var i = 0; i < iter; i++) {
            if (this.can_buy(Math.round((r + l) / 2))) l = Math.round((r + l) / 2);
            else r = Math.round((r + l) / 2);
        }
        return l;
    }

    reset() {
        this.amt = 0;
    }

    update() {
        this.block_other_click = true;
        if (document.body.contains(document.getElementById("upgrade_" + this.id + "_toggle"))) {
            if (document.getElementById("upgrade_" + this.id + "_toggle").checked) this.enabled = true;
            else this.enabled = false;
        }
    }

    screen_update() {
        if (get_current_menu() != this.tab) return;
        if (!functions[this.availability_function]()) document.getElementById("upgrade_" + this.id).style.visibility = "hidden";
        else {
            document.getElementById("upgrade_" + this.id).style.visibility = "";

            if (this.amt == this.max_level) document.getElementById("upgrade_" + this.id).className = "upgrade complete";
            else if (!this.can_buy()) document.getElementById("upgrade_" + this.id).className = "upgrade disabled";
            else if (this.amt > 0) document.getElementById("upgrade_" + this.id).className = "upgrade partial";
            else document.getElementById("upgrade_" + this.id).className = "upgrade";

            if (document.body.contains(document.getElementById("upgrade_" + this.id + "_level"))) {
                document.getElementById("upgrade_" + this.id + "_level").textContent = format_number(this.amt);
            }

            if (document.body.contains(document.getElementById("upgrade_" + this.id + "_current_effect"))) {
                document.getElementById("upgrade_" + this.id + "_current_effect").textContent = format_number(this.get_effect());
            }
            if (document.body.contains(document.getElementById("upgrade_" + this.id + "_next_effect"))) {
                document.getElementById("upgrade_" + this.id + "_next_effect").textContent = format_number(functions[this.power_function](this.amt + 1));
            }
            if (document.body.contains(document.getElementById("upgrade_" + this.id + "_next"))) {
                if (this.amt == this.max_level) {
                    document.getElementById("upgrade_" + this.id + "_next").style.visibility = "hidden";
                }
                else {
                    document.getElementById("upgrade_" + this.id + "_next").style.visibility = "";
                }
            }
            if (this.amt == this.max_level) {
                document.getElementById("upgrade_" + this.id + "_next_cost").style.visibility = "hidden";
            }
            else {
                document.getElementById("upgrade_" + this.id + "_next_cost").style.visibility = "";
            }

            if (document.body.contains(document.getElementById("upgrade_" + this.id + "_toggle"))) {
                if (this.enabled) document.getElementById("upgrade_" + this.id + "_toggle").checked = true;
                else document.getElementById("upgrade_" + this.id + "_toggle").checked = false;
            }

            let currency_name = this.currency_display_name_plural;
            let upgrade_cost = this.get_cost();
            if (upgrade_cost.lt(1.5) && upgrade_cost.gt(0.5)) currency_name = this.currency_display_name_singular;

            if (this.custom_cost_display_function == "") document.getElementById("upgrade_" + this.id + "_cost").textContent = format_number(upgrade_cost, true, false, "", true) + currency_name;
            else document.getElementById("upgrade_" + this.id + "_cost").textContent = functions[this.custom_cost_display_function](upgrade_cost) + currency_name;
        }
    }
    
    create_save() {
        let data = [];
        data.push(this.max_level);
        //data.push(this.cost_function);
        //data.push(this.power_function);
        //data.push(this.unlock_function);
        data.push("");
        data.push("");
        data.push("");

        let currency_data = [];
        if (this.currency instanceof Dimension) {
            currency_data.push(0);
            currency_data.push(this.currency.id);
        }
        else {
            currency_data.push(1);
            currency_data.push(this.currency);
        }
        data.push(currency_data);
        data.push([this.currency_display_name_singular, this.currency_display_name_plural]);

        //data.push(this.availability_function);
        data.push("");
        data.push(this.amt);

        data.push(this.enabled);
        //data.push(this.custom_buy_function);
        data.push("");

        return data;
    }

    load_save(data) {
        this.max_level = data[0];
        //this.cost_function = data[1];
        //this.power_function = data[2];
        //this.unlock_function = data[3];

        if (data[4][0] == 0) {
            this.currency = player.dimensions[data[4][1]];
        }
        else {
            this.currency = data[4][1];
        }
        if (!(typeof data[5] === 'string' || data[5] instanceof String)) {
            this.currency_display_name_singular = data[5][0];
            this.currency_display_name_plural = data[5][1];
        }

        //this.availability_function = data[6];
        this.amt = data[7];

        this.enabled = data[8];
        //this.custom_buy_function = data[9];
    }
}