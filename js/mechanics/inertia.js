function inertia_gain_speed() {
    return big(1).div(player.best_time_speed).pow(player.upgrades['INERTIA_2'].get_effect()).mult(player.upgrades['INERTIA_4'].get_effect());
}

function inertia_loss_speed() {
    return big(2).pow(big(player.inertia_multiplier).subtract(1)).subtract(1);
}

function inertia_eta() {
    let inertia_loss = inertia_loss_speed().subtract(inertia_gain_speed().mult(player.upgrades['INERTIA_5'].get_effect().toInt() / 100));
    if (inertia_loss.lt(1e-60)) return "forever";
    else return format_time(player.inertia.div(inertia_loss));  
}

function switch_inertia_status() {
    player.inertia_enabled = !player.inertia_enabled;
    update_inertia(me);
}

function update_inertia_first() {
    player.inertia_multiplier = Math.min(player.upgrades['INERTIA_3'].get_effect().toInt(), Math.max(2, player.inertia_multiplier));

    document.getElementById("mechanic_inertia_slider").max = player.upgrades['INERTIA_3'].get_effect().toInt();
    document.getElementById("mechanic_inertia_slider").value = player.inertia_multiplier;
}

function update_inertia() {
    document.getElementById("mechanic_inertia_per_hour").textContent = format_time(inertia_gain_speed().mult(60 * 60 * 1000));
    document.getElementById("mechanic_inertia_per_hour_online").textContent = format_time(inertia_gain_speed().mult(60 * 60 * 1000).mult(player.upgrades['INERTIA_5'].get_effect().toInt() / 100));
    document.getElementById("mechanic_inertia_cap").textContent = format_time(player.upgrades['INERTIA_1'].get_effect());
    document.getElementById("mechanic_inertia_max_multiplier").textContent = format_number(player.upgrades['INERTIA_3'].get_effect());
    document.getElementById("mechanic_inertia_loss").textContent = format_time(inertia_loss_speed().mult(1000));
    if (inertia_eta() == "forever") document.getElementById("mechanic_inertia_eta").textContent = inertia_eta();
    else document.getElementById("mechanic_inertia_eta").textContent = "for " + inertia_eta();
    if (player.inertia_enabled) {
        document.getElementById("mechanic_inertia_status").textContent = "enabled";
        document.getElementById("mechanic_inertia_button_text").textContent = "Disable";
        document.getElementById("mechanic_inertia_desc").style.display = "";
        document.getElementById("mechanic_inertia_desc_multiplier").textContent = format_number(player.inertia_multiplier);
        if (inertia_eta() == "forever") document.getElementById("mechanic_inertia_desc_time").textContent = inertia_eta();
        else document.getElementById("mechanic_inertia_desc_time").textContent = "for the next " + inertia_eta();
    }
    else {
        document.getElementById("mechanic_inertia_status").textContent = "disabled";
        document.getElementById("mechanic_inertia_button_text").textContent = "Enable";
        document.getElementById("mechanic_inertia_desc").style.display = "none";
    }
    if (player.upgrades['INERTIA_2'].amt == player.upgrades['INERTIA_2'].max_level) document.getElementById("mechanic_inertia_timespeed_remark").style.display = "none";
    else document.getElementById("mechanic_inertia_timespeed_remark").style.display = "";
    if (player.upgrades['INERTIA_5'].amt == player.upgrades['INERTIA_5'].max_level) {
        document.getElementById("mechanic_inertia_offline_remark").style.display = "none";
        document.getElementById("mechanic_inertia_online_gain_desc").style.display = "none";
    }
    else {
        document.getElementById("mechanic_inertia_offline_remark").style.display = "";
        if (player.upgrades['INERTIA_5'].amt == 0) document.getElementById("mechanic_inertia_online_gain_desc").style.display = "none";
        else document.getElementById("mechanic_inertia_online_gain_desc").style.display = "";
    }

    player.inertia_multiplier = document.getElementById("mechanic_inertia_slider").value;
}