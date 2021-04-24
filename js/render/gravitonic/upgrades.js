function screen_update_gravitonic_upgrades() {
    // gravitonic challenges that remove blocks
    if (player.challenges['g0'].inC()) document.getElementById("block_gravitonic_0").style.display = "none";
    else document.getElementById("block_gravitonic_0").style.display = "";
    if (player.challenges['g1'].inC()) document.getElementById("block_gravitonic_1").style.display = "none";
    else document.getElementById("block_gravitonic_1").style.display = "";
    if (player.challenges['g2'].inC()) document.getElementById("block_gravitonic_2").style.display = "none";
    else document.getElementById("block_gravitonic_2").style.display = "";
    if (player.challenges['g3'].inC()) document.getElementById("block_gravitonic_3").style.display = "none";
    else document.getElementById("block_gravitonic_3").style.display = "";
    if (player.challenges['g4'].inC()) document.getElementById("block_gravitonic_4").style.display = "none";
    else document.getElementById("block_gravitonic_4").style.display = "";

    // Gravitonic unlocks
    if (!player.challenges['p1'].completed) document.getElementById("pc1_unlock_upgrade").style.display = "";
    else document.getElementById("pc1_unlock_upgrade").style.display = "none";
    if (!player.challenges['p2'].completed) document.getElementById("pc2_unlock_upgrade").style.display = "";
    else document.getElementById("pc2_unlock_upgrade").style.display = "none";
    if (!player.challenges['p3'].completed) document.getElementById("pc3_unlock_upgrade").style.display = "";
    else document.getElementById("pc3_unlock_upgrade").style.display = "none";
    if (!player.challenges['p4'].completed) document.getElementById("pc4_unlock_upgrade").style.display = "";
    else document.getElementById("pc4_unlock_upgrade").style.display = "none";
    if (!player.challenges['p5'].completed) document.getElementById("pc5_unlock_upgrade").style.display = "";
    else document.getElementById("pc5_unlock_upgrade").style.display = "none";
    if (!player.challenges['p6'].completed) document.getElementById("pc6_unlock_upgrade").style.display = "";
    else document.getElementById("pc6_unlock_upgrade").style.display = "none";
    if (!player.challenges['p7'].completed) document.getElementById("pc7_unlock_upgrade").style.display = "";
    else document.getElementById("pc7_unlock_upgrade").style.display = "none";
    if (!player.challenges['p8'].completed) document.getElementById("pc8_unlock_upgrade").style.display = "";
    else document.getElementById("pc8_unlock_upgrade").style.display = "none";

    // achievement 64: unlock buy max gravitonic upgrades
    if (player.achievements['64'].complete || player.upgrades['AUTO1_5'].is_active()) {
        document.getElementById("upgrades_gravitonic_buy_max").style.display = "";
    }
    else {
        document.getElementById("upgrades_gravitonic_buy_max").style.display = "none";
    }
}