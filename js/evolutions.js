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
    custom_buy_function: the name of function() that makes any actions when the Evolution is bought. Default: none
    availability_function: the name of function() that returns whether the upgrade is visible. Default: true
    unlock_function: the name of function() that returns whether any additional conditions are met. Default: true
    */
    constructor(id, cost_function, currency, currency_display_name, based_on, advantage, power_function, secondary_power_function="", custom_buy_function="", availability_function="", unlock_function="") {
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

        this,bought = false;
        this.progress = 0;
    }

    get_cost() {
        var base_cost = functions[this.cost_function]();
        // Challenge 9: all costs are raised to a power
        base_cost = base_cost.pow(me.challenge_strength_9).round().max(1);
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

    eta(to_point = 0.9, progress=this.progress) {
        return base_evolution_time().mult(sigmoid_rev(to_point).subtract(progress));
    }

    get_default_progress() {
        let progress = 0;
        if (this.based_on instanceof Dimension) {
            progress = sigmoid_rev(this.currency.amt.pow(-1).max(1));
        }
        else progress = sigmoid_rev(player[this.currency].pow(-1).max(1));
        return progress;
    }

    buy() {
        if (!this.can_buy()) return;

        if (this.currency instanceof Dimension) {
            this.currency.amt = this.currency.amt.subtract(this.get_cost()).max(0);
        }
        else player[this.currency] = player[this.currency].subtract(this.get_cost()).max(0);

        this.bought = true;
        this.progress = this.get_default_progress();
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
        data.push([this.currency_display_name_singular, this.currency_display_name_plural]);

        if (data[0][0] == 0) {
            this.currency = player.dimensions[data[0][1]];
        }
        else {
            this.currency = data[0][1];
        }

        this.currency_display_name_singular = data[1][0];
        this.currency_display_name_plural = data[1][1];

        if (data[2][0] == 0) {
            this.currency = player.dimensions[data[2][1]];
        }
        else {
            this.currency = data[2][1];
        }

        this.bought = data[3];
        this.progress = data[4];
    }
}

function base_evolution_time() {
    let base = big(1000);

    // b02: Evolutions are applied faster
    if (player.upgrades['b02'].is_active()) base = base.div(player.upgrades['b02'].get_effect());

    return base;
}