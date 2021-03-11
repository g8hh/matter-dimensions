function update_challenges_power(player) {
    player.challenge_strength_1 = 256;//1000;
    // Photonic Challenge 7: time is 256x slower
    if (player.challenges['p7'].inC()) player.challenge_strength_1 *= 256;
    // p11: time is faster
    player.challenge_strength_1 /= player.upgrades["p11"].get_effect().toInt();
    // Photonic Challenge 4: light slows down time
    if (player.challenges['p4'].inC()) player.challenge_strength_1 *= power_light_time(player).toInt();
    // g24: light speeds up time
    if (player.upgrades['g24'].is_active()) player.challenge_strength_1 /= player.upgrades['g24'].get_effect().toInt();

    player.challenge_addinfo_2 = new BigNumber(1);
    // g10: production below x10 is protected
    player.challenge_addinfo_2 = player.upgrades['g10'].get_effect();
    // g12: more production is protected
    if (player.upgrades['g12'].is_active()) player.challenge_addinfo_2 = player.upgrades['g12'].get_effect();
    
    player.challenge_strength_2 = 0.2;
    // g11: power is increased base on unspent Gravitons
    player.challenge_strength_2 = player.upgrades['g11'].get_effect().toInt();

    player.challenge_strength_3 = 100;
    // n02: slowdown of higher-tier dimensions is reduced
    player.challenge_strength_3 = me.upgrades['n02'].get_effect().toInt();

    player.challenge_strength_4 = new BigNumber(1e10);
    // achievement 42: you can store 2 times more resources
    if (player.achievements['42'].complete) player.challenge_strength_4 = player.challenge_strength_4.mult(2);
    // achievement 91: you can store 1e10 times more resources
    if (player.achievements['91'].complete) player.challenge_strength_4 = player.challenge_strength_4.mult(1e10);
    // v21: you can store 1e10 times more resources
    player.challenge_strength_4 = player.challenge_strength_4.mult(me.upgrades['v21'].get_effect());
    // v61: you can store 1e48 times more resources
    player.challenge_strength_4 = player.challenge_strength_4.mult(me.upgrades['v61'].get_effect());
    // v81: you can store 1e40 times more resources
    player.challenge_strength_4 = player.challenge_strength_4.mult(me.upgrades['v81'].get_effect());
    // v92: you can store 1e80 times more resources
    player.challenge_strength_4 = player.challenge_strength_4.mult(me.upgrades['v92'].get_effect());
    // v103: you can store 1e120 times more resources
    player.challenge_strength_4 = player.challenge_strength_4.mult(me.upgrades['v103'].get_effect());
    // v143: you can store 1e10 times more resources for each unspent Space Theorem
    player.challenge_strength_4 = player.challenge_strength_4.mult(me.upgrades['v143'].get_effect());
    // v183: you can store more resources based on Black Holes
    if (me.upgrades['v183'].is_active()) player.challenge_strength_4 = player.challenge_strength_4.mult(me.upgrades['v183'].get_effect());
    // v211: BREAK INFINITY
    if (me.upgrades['v211'].is_active()) player.challenge_strength_4 = me.upgrades['v211'].get_effect();

    let nerf_5_power = big(0.5);
    // a01: reduce nerf 5 power
    nerf_5_power = me.upgrades['a01'].get_effect();

    player.challenge_strength_5 = player.matter.add(1).pow(nerf_5_power);

    player.challenge_strength_6 = 4;
    // d21: unlock new Dimension
    if (player.upgrades['d21'].is_active()) player.challenge_strength_6 += 1;
    // d41: unlock new Dimension
    if (player.upgrades['d41'].is_active()) player.challenge_strength_6 += 1;
    // d81: unlock new Dimension
    if (player.upgrades['d81'].is_active()) player.challenge_strength_6 += 1;

    player.challenge_strength_7 = new BigNumber(3);
    player.challenge_strength_7 = player.challenge_strength_7.pow(Math.pow((player.time_passed / 1000) + 1, 0.5) * Math.pow(2, player.time_passed / 60000) - 1);

    player.challenge_strength_8 = 100;

    player.challenge_strength_9 = 2;

    player.challenge_strength_10 = 0.5;

    player.challenge_strength_11 = 0.5;
}