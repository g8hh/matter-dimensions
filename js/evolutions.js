class Evolution {
    /* 
    Evolutions are one-time upgrades that progress with time.

    id: the id of this object. Used for referencing
    cost_function: the name of function() that returns the cost as BigNumber
    currency: the name of currency used to buy the evolution
    currency_display_name: an array [singular, plural] of names of said currency
    based_on: the name of a variable the Evolution progress is tied to
    advantage: the advantage of Evolution (base speed)
    power_function: the name of function(x) that returns the effect of Evolution, when x is player[based_on] * progress
    secondary_power_function: the name of function() that returns the secondary effect of Evolution. Default: 1
    availability_function: the name of function() that returns whether the upgrade is visible. Default: true
    custom_buy_function: the name of function() that makes any actions when the Evolution is bought. Default: none
    unlock_function: the name of function() that returns whether any additional conditions are met. Default: true
    */
    constructor(id, cost_function, currency, currency_display_name, based_on, advantage, power_function, secondary_power_function="", availability_function="", custom_buy_function="", unlock_function="") {
        this.id = id;
        this.cost_function = cost_function;
        this.currency = currency;
        if (typeof currency_display_name === 'string' || currency_display_name instanceof String) {
            this.currency_display_name_singular = currency_display_name;
            this.currency_display_name_plural = currency_display_name;
        }
        else {
            this.currency_display_name_singular = currency_display_name[0];
            this.currency_display_name_plural = currency_display_name[1];
        }
        this.based_on = based_on;
        this.advantage = advantage;
        this.power_function = power_function;
        this.secondary_power_function = secondary_power_function;
        this.custom_buy_function = custom_buy_function;
        this.availability_function = availability_function;
        this.unlock_function = unlock_function;

        this.bought = false;
        this.progress = 0;
    }

    is_active() {
        if (this.availability_function != "" && !functions[this.availability_function]()) return false;
        return this.bought;
    }

    get_cost() {
        var base_cost = functions[this.cost_function]();
        // Challenge 9: all costs are raised to a power
        base_cost = base_cost.pow(player.challenge_strength_9).round().max(1);
        return base_cost;
    }

    can_buy() {
        if (this.bought) return false;
        if (this.availability_function != "" && !functions[this.availability_function]()) return false;
        if (this.unlock_function != "" && !functions[this.unlock_function]()) return false;

        if (this.currency instanceof Dimension) {
            return !(this.currency.amt.lt(this.get_cost()));
        }
        else return !(player[this.currency].lt(this.get_cost()));
    }

    eta(to_point=0.9, progress=this.progress) {
        return base_evolution_time().mult(sigmoid_rev(to_point) - progress).div(this.advantage).max(0);
    }

    get_based_value() {
        if (this.based_on instanceof Dimension) return this.based_on.amt.clone();
        else return player[this.based_on].clone();
    }

    get_default_progress() {
        return sigmoid_rev(this.get_based_value().pow(-1).min(1));
    }

    get_effect(progress=this.progress, ignore_status=false) {
        if (!this.bought && !ignore_status) return functions[this.power_function](big(0));
        else return functions[this.power_function](this.get_based_value().mult(population_power_multiplier()).mult(sigmoid(progress)));
    }

    get_secondary_effect() {
        if (this.secondary_power_function == "") return big(1);
        else return functions[this.secondary_power_function]();
    }

    buy() {
        if (!this.can_buy()) return;

        if (this.currency instanceof Dimension) {
            this.currency.amt = this.currency.amt.subtract(this.get_cost()).max(0);
        }
        else player[this.currency] = player[this.currency].subtract(this.get_cost()).max(0);

        this.bought = true;
        this.progress = this.get_default_progress();
        if (this.custom_buy_function != "") functions[this.custom_buy_function]();
    }

    apply_timedelta(timedelta) {
        if (!this.bought) return;
        this.progress += big(timedelta).mult(this.advantage).div(base_evolution_time()).toInt();
    }

    screen_update() {
        let element = document.getElementById("evolution_" + this.id);
        if (element !== undefined) {
            if (this.availability_function != "" && !functions[this.availability_function]()) element.style.display = "none";
            else element.style.display = "";
            if (this.bought) element.classList.add("complete");
            else element.classList.remove("complete");
            if (!this.can_buy()) element.classList.add("disabled");
            else element.classList.remove("disabled");

            if (element.getElementsByClassName("advantage").length > 0)
            element.getElementsByClassName("advantage")[0].textContent = format_number(this.advantage);

            if (element.getElementsByClassName("primary-effect-prediction-desc").length > 0) {
                if (sigmoid(this.progress).lt(0.9)) element.getElementsByClassName("primary-effect-prediction-desc")[0].style.display = "";
                else element.getElementsByClassName("primary-effect-prediction-desc")[0].style.display = "none";
            }
            if (element.getElementsByClassName("implement-remaining").length > 0) {
                if (sigmoid(this.progress).lt(0.9)) element.getElementsByClassName("implement-remaining")[0].style.display = "";
                else element.getElementsByClassName("implement-remaining")[0].style.display = "none";
            }
            if (element.getElementsByClassName("cost-desc").length > 0) {
                if (!this.bought) element.getElementsByClassName("cost-desc")[0].style.display = "";
                else element.getElementsByClassName("cost-desc")[0].style.display = "none";
            }
            if (element.getElementsByClassName("progress-desc").length > 0) {
                if (this.bought) element.getElementsByClassName("progress-desc")[0].style.display = "";
                else element.getElementsByClassName("progress-desc")[0].style.display = "none";
            }
            if (element.getElementsByClassName("progress-bar-layout").length > 0) {
                if (this.bought) element.getElementsByClassName("progress-bar-layout")[0].style.display = "";
                else element.getElementsByClassName("progress-bar-layout")[0].style.display = "none";
            }
            if (element.getElementsByClassName("progress-bar").length > 0) {
                if (this.bought) element.getElementsByClassName("progress-bar")[0].style.display = "";
                else element.getElementsByClassName("progress-bar")[0].style.display = "none";

                element.getElementsByClassName("progress-bar")[0].style.width = sigmoid(this.progress).mult(100).toInt() + "%";
            }

            if (element.getElementsByClassName("primary-effect").length > 0)
            element.getElementsByClassName("primary-effect")[0].textContent = format_number(this.get_effect(), true);
            if (element.getElementsByClassName("primary-effect-prediction").length > 0)
            element.getElementsByClassName("primary-effect-prediction")[0].textContent = format_number(this.get_effect(sigmoid_rev(big(0.9)), true), true);
            if (element.getElementsByClassName("secondary-effect").length > 0)
            element.getElementsByClassName("secondary-effect")[0].textContent = format_number(this.get_secondary_effect());

            if (element.getElementsByClassName("progress").length > 0)
            element.getElementsByClassName("progress")[0].textContent = format_number(sigmoid(this.progress).mult(100), true) + "%";

            if (element.getElementsByClassName("cost").length > 0) {
                let currency_name = this.currency_display_name_plural;
                let evolution_cost = this.get_cost();
                if (evolution_cost.lt(1.5) && evolution_cost.gt(0.5)) currency_name = this.currency_display_name_singular;

                element.getElementsByClassName("cost")[0].textContent = format_number(evolution_cost) + currency_name;
            }

            if (element.getElementsByClassName("implement-time").length > 0)
            element.getElementsByClassName("implement-time")[0].textContent = format_time(this.eta(0.9, this.get_default_progress()));
            if (element.getElementsByClassName("implement-remaining-time").length > 0)
            element.getElementsByClassName("implement-remaining-time")[0].textContent = format_time(this.eta(0.9));
        }
    }

    reset() {
       this.bought = false;
       this.progress = 0;
    }

    create_save() {
        let data = [];

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

        let based_on_data = [];
        if (this.based_on instanceof Dimension) {
            based_on_data.push(0);
            based_on_data.push(this.based_on.id);
        }
        else {
            based_on_data.push(1);
            based_on_data.push(this.based_on);
        }
        data.push(based_on_data);

        data.push(this.bought);
        data.push(this.progress);

        return data;
    }

    load_save(data) {
        if (data[0][0] == 0) {
            this.currency = player.dimensions[data[0][1]];
        }
        else {
            this.currency = data[0][1];
        }

        this.currency_display_name_singular = data[1][0];
        this.currency_display_name_plural = data[1][1];

        if (data[2][0] == 0) {
            this.based_on = player.dimensions[data[2][1]];
        }
        else {
            this.based_on = data[2][1];
        }

        this.bought = data[3];
        this.progress = data[4];
    }
}

function base_evolution_time() {
    let base = big(314159);

    // b02: Evolutions are applied faster
    if (player.upgrades['b02'].is_active()) base = base.div(player.upgrades['b02'].get_effect());

    return base;
}