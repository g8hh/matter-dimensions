functions["check_11"] = () => {
    return player.dimensions["matter_1"].amt_bought > 0;
};

functions["check_12"] = () => {
    return player.overall_time >= 1000;
};

functions["check_13"] = () => {
    return !player.energy.lt(1);
};

functions["check_14"] = () => {
    return player.upgrades["p11"].amt > 0 && player.upgrades["p12"].amt > 0 && player.upgrades["p13"].amt > 0 && player.upgrades["p14"].amt > 0 && player.upgrades["p15"].amt > 0;
};

functions["check_15"] = () => {
    return false; // external call
};

functions["check_16"] = () => {
    return player.matter.gt(6-1e-6);
};

functions["check_17"] = () => {
    return player.antimatter.gt(100-1e-6);
};

functions["check_18"] = () => {
    return player.matter.lt(1e-9);
};

functions["check_21"] = () => {
    return player.dimensions["matter_2"].amt_bought > 0;
};

functions["check_22"] = () => {
    return player.overall_time >= 60 * 1000;
};

functions["check_23"] = () => {
    return player.light.gt(1e-3);
};

functions["check_24"] = () => {
    return player.dimensions["matter_1"].amt.gt(2.001);
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
    return player.antimatter.lt(1e-9);
};

functions["check_31"] = () => {
    return player.dimensions["matter_3"].amt_bought > 0;
};

functions["check_32"] = () => {
    return false; // external call
};

functions["check_33"] = () => {
    return player.dimensions["photonic_3"].amt_bought > 0;
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
    return player.photonic_resets >= 1000;
};

functions["check_41"] = () => {
    return player.dimensions["matter_4"].amt_bought > 0;
};

functions["check_42"] = () => {
    return !player.matter.lt(1e10);
};

functions["check_43"] = () => {
    return player.dimensions["photonic_4"].amt_bought > 0;
};

functions["check_44"] = () => {
    return player.upgrades["TICKSPEED"].amt > 0;
};

functions["check_45"] = () => {
    return false; // external call
};

functions["check_46"] = () => {
    return power_light_production().gt(player.challenge_strength_4);
};

functions["check_47"] = () => {
    return false; // external call
};

functions["check_48"] = () => {
    return player.antimatter.lt(1e-9) && player.time_gravitonic < 30;
};

functions["check_51"] = () => {
    return player.proton_power.gt(1e-9) || player.electron_power.gt(1e-9) || player.boson_power.gt(1e-9);
};

functions["check_52"] = () => {
    return player.dimensions['protons'].amt_bought >= 10 && player.dimensions['electrons'].amt_bought >= 10 && player.dimensions['bosons'].amt_bought >= 10;
};

functions["check_53"] = () => {
    return player.challenges['p1'].fastest_time < 60;
};

functions["check_54"] = () => {
    return false; // external call
};

functions["check_55"] = () => {
    return false; // external call
};

functions["check_56"] = () => {
    return !player.dimensions['matter_1'].amt.lt(1e6);
};

functions["check_57"] = () => {
    return player.gravitonic_resets >= 100;
};

functions["check_58"] = () => {
    return get_space_production().gt(100);
};


functions["check_61"] = () => {
    return player.dimensions['matter_4'].amt_bought >= 9.5;
};

functions["check_62"] = () => {
    return !player.matter.lt(1e80);
};

functions["check_63"] = () => {
    return !player.black_holes.lt(1000);
};

functions["check_64"] = () => {
    return !player.matter.lt(1e100) && player.current_challenge["gravitonic"] != "";
};

functions["check_65"] = () => {
    return player.current_challenge["photonic"] != "" && player.current_challenge["gravitonic"] != "";
};

functions["check_66"] = () => {
    return false; // external call
};

functions["check_67"] = () => {
    let completed_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (player.challenges[key].completed) completed_challenges += 1;
    }
    return completed_challenges >= 12;
};

functions["check_68"] = () => {
    return player.space_theorems.add(space_theorems_invested()).gt(9.5);
};


functions["check_71"] = () => {
    return player.dimensions["matter_5"].amt_bought > 0;
};

functions["check_72"] = () => {
    return player.dimensions["matter_6"].amt_bought > 0;
};

functions["check_73"] = () => {
    return player.dimensions["neutronic_1"].amt_bought > 0;
};

functions["check_74"] = () => {
    return !player.upgrades["TICKSPEED"].get_effect().lt(1e29);
};

functions["check_75"] = () => {
    return !player.matter.lt(1e200);
};

functions["check_76"] = () => {
    return false; // external call
};

functions["check_77"] = () => {
    return (player.challenges['n1'].completions >= 1 && player.challenges['n2'].completions >= 1 
         && player.challenges['n3'].completions >= 1 && player.challenges['n4'].completions >= 1 
         && player.challenges['n5'].completions >= 1 && player.challenges['n6'].completions >= 1 
         && player.challenges['n7'].completions >= 1 && player.challenges['n8'].completions >= 1);
};

functions["check_78"] = () => {
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('0') && player.challenges[key].completed) return true;
    }
    return false;
};


functions["check_81"] = () => {
    return player.dimensions["matter_7"].amt_bought > 0;
};

functions["check_82"] = () => {
    return player.upgrades['v211'].amt > 0;
};

functions["check_83"] = () => {
    return get_temperature().gt(2.73);
};

functions["check_84"] = () => {
    return player.red_waves.gt(0.5);
};

functions["check_85"] = () => {
    return player.challenges['g1'].completed || player.challenges['g2'].completed;
};

functions["check_86"] = () => {
    let meta_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('0') && player.challenges[key].inC()) meta_challenges += 1;
    }
    return meta_challenges >= 2;
};

functions["check_87"] = () => {
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('n') && player.challenges[key].completions >= 2) return true;
    }
    return false;
};

functions["check_88"] = () => {
    return player.challenge_strength_4.gt(big(2).pow(1024));
};


functions["check_91"] = () => {
    return player.atomic_resets > 0.5;
};

functions["check_92"] = () => {
    return player.atomic_resets > 1.5;
};

functions["check_93"] = () => {
    return player.atomic_resets > 2.5;
};

functions["check_94"] = () => {
    return player.blue_waves.gt(0.5);
};

functions["check_95"] = () => {
    return get_temperature().gt(273.15);
};

functions["check_96"] = () => {
    return false; // external call
};

functions["check_97"] = () => {
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('n') && player.challenges[key].completions >= 3) return true;
    }
    return false;
};

functions["check_98"] = () => {
    return !player.upgrades["TICKSPEED"].get_effect().lt(big(2).pow(1024));
};


functions["check_101"] = () => {
    return player.upgrades['COLLISION_POINT'].amt >= 5;
};

functions["check_102"] = () => {
    return !player.photons.lt(1e26);
};

functions["check_103"] = () => {
    return !power_stars_tickspeed().lt(50);
};

functions["check_104"] = () => {
    return !player.matter.lt(1e100) && player.challenges['g0'].inC();
};

functions["check_105"] = () => {
    let automation_bought = 0;
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('AUTO') && player.upgrades[key].amt > 0) automation_bought += 1;
    }

    return automation_bought >= 11;
};

functions["check_106"] = () => {
    return false; // external call
};

functions["check_107"] = () => {
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('n') && player.challenges[key].completions >= 4) return true;
    }
    return false;
};

functions["check_108"] = () => {
    return !player.vacuum_energy.lt(big(2).pow(1024));
};


functions["check_111"] = () => {
    return false; // external call
};

functions["check_112"] = () => {
    return get_atom_level('a05').gt(0.5);
};

functions["check_113"] = () => {
    return player.challenges['p1'].fastest_time == 0;
};

functions["check_114"] = () => {
    return !player.light.lt(big(2).pow(1024));
};

functions["check_115"] = () => {
    return get_temperature().gt(666);
};

functions["check_116"] = () => {
    return false; // external call
};

functions["check_117"] = () => {
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('n') && player.challenges[key].completions >= 5) return true;
    }
    return false;
};

functions["check_118"] = () => {
    return player.space.gt(player.challenge_strength_4);
};


functions["check_121"] = () => {
    return false; // external call
};

functions["check_122"] = () => {
    return player.atoms.gt(player.challenge_strength_4);
};

functions["check_123"] = () => {
    return player.upgrades["TICKSPEED"].get_effect().gt("1e9000");
};

functions["check_124"] = () => {
    return player.challenges['g0'].completed;
};

functions["check_125"] = () => {
    return player.dimensions['protons'].amt_bought >= 200 && player.dimensions['electrons'].amt_bought >= 200 && player.dimensions['bosons'].amt_bought >= 200;
};

functions["check_126"] = () => {
    return player.matter.gt("9.999e9999");
};

functions["check_127"] = () => {
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('v') && player.challenges[key].completed) return true;
    }
    return false;
};

functions["check_128"] = () => {
    let meta_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('0') && player.challenges[key].inC()) meta_challenges += 1;
    }
    return meta_challenges >= 3;
};


functions["check_131"] = () => {
    return player.upgrades["b01"].amt > 0 || player.upgrades["b02"].amt > 0 || player.upgrades["b03"].amt > 0 || player.upgrades["b04"].amt > 0;
};

functions["check_132"] = () => {
    return get_atom_level('a08').gt(0.5);
};

functions["check_133"] = () => {
    return player.matter.gt("6.9e420") && player.upgrades['v211'].amt == 0;
};

functions["check_134"] = () => {
    return false; // external call
};

functions["check_135"] = () => {
    return false; // external call
};

functions["check_136"] = () => {
    return get_temperature().gt(5800);
};

functions["check_137"] = () => {
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a') && get_atom_level(key).gt(999.5)) {
            return true;
        }
    }
    return false;
};

functions["check_138"] = () => {
    return generation_points_effect().gt(9.9);
};


functions["check_141"] = () => {
    return player.dimensions["matter_8"].amt_bought > 0;
};

functions["check_142"] = () => {
    return !player.population.lt(1e6);
};

functions["check_143"] = () => {
    return !player.matter.lt("1e30000") && player.upgrades["COLLISION_POINT"].amt == 0;
};

functions["check_144"] = () => {
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('d') && player.challenges[key].completed) return true;
    }
    return false;
};

functions["check_145"] = () => {
    return !mortality_rate().lt(2.5);
};

functions["check_146"] = () => {
    let meta_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('0') && player.challenges[key].inC()) meta_challenges += 1;
    }
    return meta_challenges >= 4;
};

functions["check_147"] = () => {
    let completed_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('n') && player.challenges[key].completions >= 5) completed_challenges++;
    }
    return completed_challenges >= 2;
};

functions["check_148"] = () => {
    return player.space_theorems.add(space_theorems_invested()).gt(49.5);
};


functions["check_151"] = () => {
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a') && get_atom_level(key).gt(1e5)) return true;
    }
    return false;
};

functions["check_152"] = () => {
    return player.matter.gt("1e1000000");
};

functions["check_153"] = () => {
    return player.challenges['g0'].fastest_time == 0;
};

functions["check_154"] = () => {
    let completed_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('d') && player.challenges[key].completed) completed_challenges++;
    }
    return completed_challenges >= 3;
};

functions["check_155"] = () => {
    return !player.population.lt(100) && !population_change_speed().lt(2);
};

functions["check_156"] = () => {
    return false; // external call
};

functions["check_157"] = () => {
    let completed_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (key.includes('n') && player.challenges[key].completions >= 5) completed_challenges++;
    }
    return completed_challenges >= 3;
};

functions["check_158"] = () => {
    return !player.atoms.lt(big(2).pow(1024));
};


functions["check_161"] = () => {
    return player.dimensions["matter_9"].amt_bought > 0;
};

functions["check_162"] = () => {
    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a') && get_atom_level(key).gt(1e6)) return true;
    }
    return false;
};

functions["check_163"] = () => {
    return false; // external call
};

functions["check_165"] = () => {
    return !player.population_sacrificed.lt(1e10);
};

functions["check_167"] = () => {
    let completed_challenges = 0;
    for (let key of Object.keys(player.challenges)) {
        if (player.challenges[key].completions == player.challenges[key].max_completions) completed_challenges += 1;
    }
    return completed_challenges >= 36;
};

functions["check_168"] = () => {
    return player.challenges['n0'].completed;
};