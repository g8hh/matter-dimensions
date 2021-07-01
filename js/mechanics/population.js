const FERTILITY_EVOLUTIONS = ["b01", "b05", "b09"];

function update_population_first() {

}

function mortality_rate() {
    let base = player.population.max(1).log(10);

    // b03: reduce mortality rate
    if (player.upgrades['b03'].is_active()) base = base.div(player.upgrades['b03'].get_effect());

    return base;
}

function population_total_positive_change() {
    let base = big(0);
    for (let i = 0; i < FERTILITY_EVOLUTIONS.length; i++) {
        if (player.evolutions[FERTILITY_EVOLUTIONS[i]].is_active()) base = base.add(player.evolutions[FERTILITY_EVOLUTIONS[i]].get_effect());
    }
    return base;
}

function population_total_negative_change() {
    let base = big(0);
    base = base.add(mortality_rate());
    return base;
}

function population_change_speed() {
    let base = big(1);
    if (population_total_positive_change().add(population_total_negative_change()).gt(0)) base = big(2).mult(population_total_positive_change()).div(population_total_positive_change().add(population_total_negative_change())).pow(2.070389328).add(0.21).pow(0.5).subtract(0.1);
    
    // b04: speed up population change
    if (player.upgrades['b04'].is_active()) base = base.pow(player.upgrades['b04'].get_effect());

    return base;
}

function population_power_multiplier() {
    let base = big(1);
    base = base.mult(extinction_effect());
    // a12: population power is increased
    base = base.mult(player.upgrades['a12'].get_effect());
    return base;
}

function extinction_effect(x=player.population_sacrificed) {
    return x.pow(0.1).min(x.pow(0.01).mult(8)).add(1);
}

function power_population_time() {
    return player.population.mult(population_power_multiplier()).add(1).log(2);
}

function update_population() {
    document.getElementById("mechanic_population_change_population").textContent = "-" + format_number(mortality_rate(), true);

    document.getElementById("mechanic_population_change_positive").textContent = "+" + format_number(population_total_positive_change(), true);
    document.getElementById("mechanic_population_change_negative").textContent = "-" + format_number(population_total_negative_change(), true);

    if (population_change_speed().lt(1)) {
        document.getElementById("mechanic_population_change_percent").className = "neutronic-number-matter large-number";
        document.getElementById("mechanic_population_change_percent").textContent = "-" + format_number(big(1).subtract(population_change_speed()).mult(100), true) + "%";
    }
    else {
        document.getElementById("mechanic_population_change_percent").className = "neutronic-number-gravitonic large-number";
        document.getElementById("mechanic_population_change_percent").textContent = "+" + format_number(population_change_speed().subtract(1).mult(100), true) + "%";
    }

    document.getElementById("mechanic_population_extinction_current").textContent = format_number(extinction_effect(), true);
    document.getElementById("mechanic_population_extinction_next").textContent = format_number(extinction_effect(player.population_sacrificed.add(player.population.subtract(1))), true);

    document.getElementById("mechanic_population_total_power").textContent = format_number(player.population.mult(population_power_multiplier()), true);

    document.getElementById("mechanic_population_power_time").textContent = format_number(power_population_time(), true);

    for (let i = 0; i < FERTILITY_EVOLUTIONS.length; i++) {
        if (player.evolutions[FERTILITY_EVOLUTIONS[i]].is_active()) document.getElementById("mechanic_population_line_" + FERTILITY_EVOLUTIONS[i]).style.display = "";
        else document.getElementById("mechanic_population_line_" + FERTILITY_EVOLUTIONS[i]).style.display = "none";

        document.getElementById("mechanic_population_change_" + FERTILITY_EVOLUTIONS[i]).textContent = "+" + format_number(player.evolutions[FERTILITY_EVOLUTIONS[i]].get_effect(), true);
    }

    let boost_descriptions = document.getElementsByClassName("population-boost");
    for (let i = 0; i < boost_descriptions.length; i++) {
        if (boost_descriptions[i].attributes.upgrade !== undefined) {
            if (player.evolutions[boost_descriptions[i].attributes.upgrade.value].is_active()) boost_descriptions[i].style.display = "";
            else boost_descriptions[i].style.display = "none";
            if (boost_descriptions[i].getElementsByClassName("upgrade-effect").length > 0)
                boost_descriptions[i].getElementsByClassName("upgrade-effect")[0].textContent = format_number(player.evolutions[boost_descriptions[i].attributes.upgrade.value].get_effect(), true);
        }
    }
}
