functions["check_11"] = () => {
    return me.dimensions["matter_1"].amt_bought > 0;
};

functions["check_12"] = () => {
    return me.overall_time >= 1000;
};

functions["check_13"] = () => {
    return !me.energy.lt(1);
};

functions["check_14"] = () => {
    return me.upgrades["p11"].amt > 0 && me.upgrades["p12"].amt > 0 && me.upgrades["p13"].amt > 0 && me.upgrades["p14"].amt > 0 && me.upgrades["p15"].amt > 0;
};

functions["check_15"] = () => {
    return false; // external call
};

functions["check_16"] = () => {
    return me.matter.gt(6-1e-6);
};

functions["check_17"] = () => {
    return me.antimatter.gt(100-1e-6);
};

functions["check_18"] = () => {
    return me.matter.lt(1e-9);
};

functions["check_21"] = () => {
    return me.dimensions["matter_2"].amt_bought > 0;
};

functions["check_22"] = () => {
    return me.overall_time >= 60 * 1000;
};

functions["check_23"] = () => {
    return me.light.gt(1e-3);
};

functions["check_24"] = () => {
    return me.dimensions["matter_1"].amt.gt(2.001);
};

functions["check_25"] = () => {
    return false; // external call
};

functions["check_26"] = () => {
    return false; // external call
};

functions["check_27"] = () => {
    return false; // external call
};

functions["check_28"] = () => {
    return me.antimatter.lt(1e-9);
};

functions["check_31"] = () => {
    return me.dimensions["matter_3"].amt_bought > 0;
};

functions["check_32"] = () => {
    return false; // external call
};

functions["check_33"] = () => {
    return me.dimensions["photonic_3"].amt_bought > 0;
};

functions["check_34"] = () => {
    return false; // external call
};

functions["check_35"] = () => {
    return false; // external call
};

functions["check_36"] = () => {
    return false; // external call
};

functions["check_37"] = () => {
    return false; // external call
};

functions["check_38"] = () => {
    return me.photonic_resets >= 1000;
};

functions["check_41"] = () => {
    return me.dimensions["matter_4"].amt_bought > 0;
};

functions["check_42"] = () => {
    return !me.matter.lt(1e10);
};

functions["check_43"] = () => {
    return me.dimensions["photonic_4"].amt_bought > 0;
};

functions["check_44"] = () => {
    return me.upgrades["TICKSPEED"].amt > 0;
};

functions["check_45"] = () => {
    return false; // external call
};

functions["check_46"] = () => {
    return power_light_production(me).gt(me.challenge_strength_4);
};

functions["check_47"] = () => {
    return false; // external call
};

functions["check_48"] = () => {
    return me.antimatter.lt(1e-9) && me.time_gravitonic < 30;
};

functions["check_51"] = () => {
    return me.proton_power.gt(1e-9) || me.electron_power.gt(1e-9) || me.boson_power.gt(1e-9);
};

functions["check_52"] = () => {
    return me.dimensions['protons'].amt_bought >= 10 && me.dimensions['electrons'].amt_bought >= 10 && me.dimensions['bosons'].amt_bought >= 10;
};

functions["check_53"] = () => {
    return me.challenges['p1'].fastest_time < 60;
};

functions["check_54"] = () => {
    return false; // external call
};

functions["check_55"] = () => {
    return false; // external call
};

functions["check_56"] = () => {
    return !me.dimensions['matter_1'].amt.lt(1e6);
};

functions["check_57"] = () => {
    return me.gravitonic_resets >= 100;
};

functions["check_58"] = () => {
    return get_space_production(me).gt(100);
};


functions["check_61"] = () => {
    return me.dimensions['matter_4'].amt_bought >= 9.5;
};

functions["check_62"] = () => {
    return !me.matter.lt(1e80);
};

functions["check_63"] = () => {
    return !me.black_holes.lt(1000);
};

functions["check_64"] = () => {
    return !me.matter.lt(1e100) && me.current_challenge["gravitonic"] != "";
};

functions["check_65"] = () => {
    return me.current_challenge["photonic"] != "" && me.current_challenge["gravitonic"] != "";
};

functions["check_66"] = () => {
    return false; // external call
};

functions["check_67"] = () => {
    let completed_challenges = 0;
    for (let key of Object.keys(me.challenges)) {
        if (me.challenges[key].completed) completed_challenges += 1;
    }
    return completed_challenges >= 12;
};

functions["check_68"] = () => {
    return me.space_theorems.add(space_theorems_invested(me)).gt(9.5);
};


functions["check_71"] = () => {
    return me.dimensions["matter_5"].amt_bought > 0;
};

functions["check_72"] = () => {
    return me.dimensions["matter_6"].amt_bought > 0;
};

functions["check_73"] = () => {
    return me.dimensions["neutronic_1"].amt_bought > 0;
};

functions["check_74"] = () => {
    return !me.upgrades["TICKSPEED"].get_effect().lt(1e29);
};

functions["check_75"] = () => {
    return !me.matter.lt(1e200);
};

functions["check_76"] = () => {
    return false; // external call
};

functions["check_77"] = () => {
    return (me.challenges['n1'].completions >= 1 && me.challenges['n2'].completions >= 1 
         && me.challenges['n3'].completions >= 1 && me.challenges['n4'].completions >= 1 
         && me.challenges['n5'].completions >= 1 && me.challenges['n6'].completions >= 1 
         && me.challenges['n7'].completions >= 1 && me.challenges['n8'].completions >= 1);
};

functions["check_78"] = () => {
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('0') && me.challenges[key].completed) return true;
    }
    return false;
};


functions["check_81"] = () => {
    return me.dimensions["matter_7"].amt_bought > 0;
};

functions["check_82"] = () => {
    return me.upgrades['v211'].amt > 0;
};

functions["check_83"] = () => {
    return get_temperature(me).gt(2.73);
};

functions["check_84"] = () => {
    return me.red_waves.gt(0.5);
};

functions["check_85"] = () => {
    return me.challenges['g1'].completed || me.challenges['g2'].completed;
};

functions["check_86"] = () => {
    let meta_challenges = 0;
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('0') && me.challenges[key].inC()) meta_challenges += 1;
    }
    return meta_challenges >= 2;
};

functions["check_87"] = () => {
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('n') && me.challenges[key].completions >= 2) return true;
    }
    return false;
};

functions["check_88"] = () => {
    return me.challenge_strength_4.gt(big(2).pow(1024));
};


functions["check_91"] = () => {
    return me.atomic_resets > 0.5;
};

functions["check_92"] = () => {
    return me.atomic_resets > 1.5;
};

functions["check_93"] = () => {
    return me.atomic_resets > 2.5;
};

functions["check_94"] = () => {
    return me.blue_waves.gt(0.5);
};

functions["check_95"] = () => {
    return get_temperature(me).gt(273.15);
};

functions["check_96"] = () => {
    return false; // external call
};

functions["check_97"] = () => {
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('n') && me.challenges[key].completions >= 3) return true;
    }
    return false;
};

functions["check_98"] = () => {
    return !me.upgrades["TICKSPEED"].get_effect().lt(big(2).pow(1024));
};


functions["check_101"] = () => {
    return me.upgrades['COLLISION_POINT'].amt >= 5;
};

functions["check_102"] = () => {
    return !me.photons.lt(1e26);
};

functions["check_103"] = () => {
    return !power_stars_tickspeed(me).lt(50);
};

functions["check_104"] = () => {
    return !me.matter.lt(1e100) && me.challenges['g0'].inC();
};

functions["check_105"] = () => {
    let automation_bought = 0;
    for (let key of Object.keys(me.upgrades)) {
        if (key.includes('AUTO') && me.upgrades[key].amt > 0) automation_bought += 1;
    }

    return automation_bought >= 11;
};

functions["check_106"] = () => {
    return false; // external call
};

functions["check_107"] = () => {
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('n') && me.challenges[key].completions >= 4) return true;
    }
    return false;
};

functions["check_108"] = () => {
    return !me.vacuum_energy.lt(big(2).pow(1024));
};


functions["check_111"] = () => {
    return false; // external call
};

functions["check_112"] = () => {
    return get_atom_level('a05').gt(0.5);
};

functions["check_113"] = () => {
    return me.challenges['p1'].fastest_time == 0;
};

functions["check_114"] = () => {
    return !me.light.lt(big(2).pow(1024));
};

functions["check_115"] = () => {
    return get_temperature(me).gt(666);
};

functions["check_116"] = () => {
    return false; // external call
};

functions["check_117"] = () => {
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('n') && me.challenges[key].completions >= 5) return true;
    }
    return false;
};

functions["check_118"] = () => {
    return me.space.gt(me.challenge_strength_4);
};


functions["check_121"] = () => {
    return false; // external call
};

functions["check_122"] = () => {
    return me.atoms.gt(me.challenge_strength_4);
};

functions["check_123"] = () => {
    return me.upgrades["TICKSPEED"].get_effect().gt("1e9000");
};

functions["check_124"] = () => {
    return me.challenges['g0'].completed;
};

functions["check_125"] = () => {
    return me.dimensions['protons'].amt_bought >= 200 && me.dimensions['electrons'].amt_bought >= 200 && me.dimensions['bosons'].amt_bought >= 200;
};

functions["check_126"] = () => {
    return me.matter.gt("9.999e9999");
};

functions["check_127"] = () => {
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('v') && me.challenges[key].completed) return true;
    }
    return false;
};

functions["check_128"] = () => {
    let meta_challenges = 0;
    for (let key of Object.keys(me.challenges)) {
        if (key.includes('0') && me.challenges[key].inC()) meta_challenges += 1;
    }
    return meta_challenges >= 3;
};


functions["check_132"] = () => {
    return get_atom_level('a08').gt(0.5);
};

functions["check_133"] = () => {
    return player.matter.gt("6.9e420") && me.upgrades['v211'].amt == 0;
};

functions["check_134"] = () => {
    return false; // external call
};

functions["check_135"] = () => {
    return false; // external call
};

functions["check_138"] = () => {
    return generation_points_effect().gt(9.9);
};