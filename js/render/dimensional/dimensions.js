function screen_update_dimensional_dimensions() {
    let manifold_power = power_manifolds();
    elements = document.getElementsByClassName("power_manifolds");
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).textContent = format_number(manifold_power);
    }
    for (let i = 1; i <= player.challenge_strength_6; i++) {
        document.getElementById("dimensional_boost_" + i).textContent = format_number(manifold_power.pow(player.dimensions["dimensional_" + i].amt_bought));
    }

}