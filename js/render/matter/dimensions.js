function screen_update_matter_dimensions() {
    // tickspeed
    if (!functions[player.upgrades['TICKSPEED'].availability_function]()) document.getElementById("tickspeed_wrapper").style.display = "none";
    else document.getElementById("tickspeed_wrapper").style.display = "";
    document.getElementById("upgrade_TICKSPEED_reduction").textContent = format_number(get_tickspeed_power());
    
    // tickspeed compound type
    if (player.challenges['n3'].inC()) document.getElementById("tickspeed_compound_type").textContent = "+";
    else document.getElementById("tickspeed_compound_type").textContent = "×";
}