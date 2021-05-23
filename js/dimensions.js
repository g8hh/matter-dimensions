class Dimension {
    constructor(id, tab, level, cost_function, power_function, unlock_function, currency, currency_display_name, produces, unconventional=false) { // cost_function: (amt_bought) -> cost; power_function: (amt_bought, amt) -> power; unlock_function: () -> unlock
        this.id = id;
        this.tab = tab;
        this.level = level;
        this.cost_function = cost_function;
        this.power_function = power_function;
        this.unlock_function = unlock_function;
        this.currency = currency;
        this.currency_display_name = currency_display_name;
        this.produces = produces;
        this.unconventional = unconventional;

        this.amt = new BigNumber(0);
        this.amt_bought = 0;
    }

    get_production_one() {
        var base_production = functions[this.power_function](this.amt_bought, this.amt);

        if (!this.unconventional) {
            base_production = base_production.mult(omniboost());
            // Achievement bonus
            base_production = base_production.mult(player.achievement_multiplier);
            // Challenge 2: all production greater than X is raised to power of Y
            if (base_production.gt(player.challenge_addinfo_2)) {
                base_production = player.challenge_addinfo_2.mult(base_production.div(player.challenge_addinfo_2).pow(player.challenge_strength_2));
            }
            // Challenge 5: all production is divided
            base_production = base_production.div(player.challenge_strength_5);
            // Challenge 7: all production is divided
            base_production = base_production.div(player.challenge_strength_7);
            // Challenge 11: dilation hurts extremely high multipliers
            if (base_production.gt(big(2).pow(1024))) {
                player.experienced_dilation = true;
                base_production = big(big(2).pow(1024)).pow(base_production.log(big(2).pow(1024)).pow(player.challenge_strength_11));
            }
        }

        return base_production;
    }

    get_production_total(timedelta) {
        var base_production = this.get_production_one().mult(big(timedelta).div(1000));

        if (!this.unconventional) {
            // Challenge 3: each dimension is slower than the previous one
            base_production = base_production.div(big(player.challenge_strength_3).pow(this.level));
            // Challenge 10: diminishing returns of dimensions
            base_production = base_production.mult(this.amt.pow(player.challenge_strength_10));
        }
        else base_production = base_production.mult(this.amt);

        return base_production;
    }

    apply_timedelta(timedelta) {
        //if (this.amt_bought == 0) return;
        if (!functions[this.unlock_function]()) return;

        if (!this.unconventional) {
            // Challenge 8: dimensions collapse
            this.amt = this.amt.mult(big(1 - 1 / player.challenge_strength_8).pow(big(timedelta).div(1000)));
        }

        let production_timedelta = big(timedelta);
        // Tickspeed effects on Matter Dimensions
        if (this.id.includes("matter_")) production_timedelta = production_timedelta.mult(player.upgrades['TICKSPEED'].get_effect());
        // v102: Tickspeed effects on Photonic Dimensions
        if (player.upgrades['v102'].is_active() && this.id.includes("photonic_")) production_timedelta = production_timedelta.mult(player.upgrades['v102'].get_effect());
        // a02_3: Tickspeed effects on Neutronic Dimensions
        if (player.milestones['a02_3'].is_active() && this.id.includes("neutronic_")) production_timedelta = production_timedelta.mult(player.milestones['a02_3'].get_effect());

        // Challenge 4: all resources are capped
        if (this.produces instanceof Dimension) {
            this.produces.amt = this.produces.amt.add(this.get_production_total(production_timedelta)).min(player.challenge_strength_4);
        }
        else player[this.produces] = player[this.produces].add(this.get_production_total(production_timedelta)).min(player.challenge_strength_4);
    }

    get_cost(buy_amt = 1) {
        var base_cost = new BigNumber(0);
        for (var i = buy_amt - 1; i >= 0; i--) {
            // Cheating. Hopefully, nobody will notice
            if (buy_amt - i > 5) break;
            // Challenge 9: all costs are raised to a power
            var one_cost = functions[this.cost_function](this.amt_bought + i).pow(player.challenge_strength_9).round().max(1);
            if (base_cost.gt(one_cost.mult(1e20))) break;
            base_cost = base_cost.add(one_cost);
        }

        return base_cost.round();
    }

    can_buy(buy_amt = 1) {
        if (!functions[this.unlock_function]()) return false;

        if (this.currency instanceof Dimension) {
            return !(this.currency.amt.lt(this.get_cost(buy_amt)));
        }
        else return !(player[this.currency].lt(this.get_cost(buy_amt)));
    }

    buy(buy_amt = 1) {
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
        // Challenge 4: all resources are capped
        this.amt = this.amt.add(buy_amt).min(player.challenge_strength_4);
        this.amt_bought += buy_amt;
    }

    binary_search_max() {
        if (!this.can_buy()) return 0;

        var r = 1;
        var iter = 0;
        while (this.can_buy(r) && iter < 100) {
            r *= 2;
            iter += 1;
        }
        var l = 0;
        for (var i = 0; i < iter && l + 1 < r; i++) {
            if (this.can_buy(Math.round((r + l) / 2))) l = Math.round((r + l) / 2);
            else r = Math.round((r + l) / 2);
        }
        return l;
    }

    reset() {
        this.amt = new BigNumber(0);
        this.amt_bought = 0;
    }

    screen_update() {
        if (get_current_menu() != this.tab) return;
        if (!functions[this.unlock_function]()) document.getElementById("dimension_" + this.id).style.display = "none";
        else {
            document.getElementById("dimension_" + this.id).style.display = "";
            if (!this.unconventional) document.getElementById("dimension_" + this.id + "_prod").textContent = format_number(this.get_production_one(), true);
            else document.getElementById("dimension_" + this.id + "_prod").textContent = format_number(this.get_production_one().mult(this.amt), true);
            document.getElementById("dimension_" + this.id + "_amt").textContent = format_number(this.amt, !this.unconventional);
            if (!this.unconventional) document.getElementById("dimension_" + this.id + "_bought").textContent = format_number(this.amt_bought);
            document.getElementById("dimension_" + this.id + "_cost").textContent = format_number(this.get_cost()) + this.currency_display_name;
            if (!this.can_buy()) document.getElementById("dimension_" + this.id + "_buy").className = "dimension-cost disabled";
            else document.getElementById("dimension_" + this.id + "_buy").className = "dimension-cost";
        }
    }

    create_save() {
        let data = [];
        data.push(this.level);
        data.push(this.cost_function);
        data.push(this.power_function);
        data.push(this.unlock_function);

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
        data.push(this.currency_display_name);

        let produces_data = [];
        if (this.produces instanceof Dimension) {
            produces_data.push(0);
            produces_data.push(this.produces.id);
        }
        else {
            produces_data.push(1);
            produces_data.push(this.produces);
        }
        data.push(produces_data);

        data.push(this.unconventional);

        data.push(this.amt.create_save());
        data.push(this.amt_bought);

        return data;
    }

    load_save(data) {
        this.level = data[0];
        this.cost_function = data[1];
        this.power_function = data[2];
        this.unlock_function = data[3];

        if (data[4][0] == 0) {
            this.currency = player.dimensions[data[4][1]];
        }
        else {
            this.currency = data[4][1];
        }
        this.currency_display_name = data[5];

        if (data[6][0] == 0) {
            this.produces = player.dimensions[data[6][1]];
        }
        else {
            this.produces = data[6][1];
        }

        this.unconventional = data[7];

        this.amt.load_save(data[8]);
        this.amt_bought = data[9];
    }
}

function omniboost() {
    let boost = big(1);

    // "Quantum Entanglement" experiment: all dimension multipliers are smaller
    if (player.evolutions['b12'].is_active()) boost = boost.div(player.experiments['quantum_entanglement'].get_nerf());

    return boost;
}