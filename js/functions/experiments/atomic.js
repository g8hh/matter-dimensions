functions["bullet_time_nerf"] = (level) => {
    if (level == 0) return big(1e0);
    if (level == 1) return big(1e1);
    if (level == 2) return big(1e3);
    if (level == 3) return big(1e6);
    if (level == 4) return big(1e10);
}

functions["controlled_reaction_nerf"] = (level) => {
    if (level == 0) return big(1);
    if (level == 1) return big(0.9);
    if (level == 2) return big(0.7);
    if (level == 3) return big(0.4);
    if (level == 4) return big(0);
}

functions["quantum_entanglement_nerf"] = (level) => {
    if (level == 0) return big(1e0);
    if (level == 1) return big(1e10);
    if (level == 2) return big(1e100);
    if (level == 3) return big("1e1000");
    if (level == 4) return big("1e10000");
}

functions["capacity_studies_nerf"] = (level) => {
    if (level == 0) return big(1);
    if (level == 1) return big(0.9);
    if (level == 2) return big(0.7);
    if (level == 3) return big(0.5);
    if (level == 4) return big(0.3);
}

functions["projection_analysis_nerf"] = (level) => {
    if (level == 0) return big(0);
    if (level == 1) return big(1);
    if (level == 2) return big(2);
    if (level == 3) return big(3);
    if (level == 4) return big(4);
}


functions["atomic_experiment_effect"] = (level) => {
    if (level == 0) return big(1);
    if (level == 1) return big(1.15);
    if (level == 2) return big(1.5);
    if (level == 3) return big(2);
    if (level == 4) return big(3);
}