var vacuumic_tree_connections = {
    "v11_v21": [["v11", "v21"]],
    "v21_f1s": [["v21", "v31"], ["v21", "v32"]],
    "f1s_l": [["v21", "v31"]],
    "f1s_r": [["v21", "v32"]],
    "f1s_v31": [["v21", "v31"]],
    "f1s_v32": [["v21", "v32"]],
    "v31_v41": [["v31", "v41"]],
    "v32_v42": [["v32", "v42"]],
    "v41_f1e": [["v41", "v51"]],
    "v42_f1e": [["v42", "v51"]],
    "l_f1e": [["v41", "v51"]],
    "r_f1e": [["v42", "v51"]],
    "f1e_v51": [["v41", "v51"], ["v42", "v51"]],
    "v51_v61": [["v51", "v61"]],
    "v61_v71": [["v61", "v71"]],
    "v71_v72": [["v71", "v72"]],
    "v71_f2s": [["v71", "v81"], ["v71", "v82"], ["v71", "v83"]],
    "f2s_l": [["v71", "v81"]],
    "f2s_r": [["v71", "v83"]],
    "f2s_v81": [["v71", "v81"]],
    "f2s_v82": [["v71", "v82"]],
    "f2s_v83": [["v71", "v83"]],
    "v81_v91": [["v81", "v91"]],
    "v82_v92": [["v82", "v92"]],
    "v83_v93": [["v83", "v93"]],
    "v91_v101": [["v91", "v101"]],
    "v92_v102": [["v92", "v102"]],
    "v93_v103": [["v93", "v103"]],
    "v101_f3s": [["v101", "v111"]],
    "v102_f3s": [["v102", "v111"], ["v102", "v112"]],
    "v103_f3s": [["v103", "v112"]],
    "f3s_l2": [["v101", "v111"]],
    "f3s_l1": [["v102", "v111"]],
    "f3s_m": [["v102", "v111"], ["v102", "v112"]],
    "f3s_r1": [["v102", "v112"]],
    "f3s_r2": [["v103", "v112"]],
    "f3s_v111": [["v101", "v111"], ["v102", "v111"]],
    "f3s_v112": [["v102", "v112"], ["v103", "v112"]],
    "v111_v121": [["v111", "v121"]],
    "v112_v122": [["v112", "v122"]],
    "v121_f3e": [["v121", "v131"]],
    "v122_f3e": [["v122", "v131"]],
    "l_f3e": [["v121", "v131"]],
    "r_f3e": [["v122", "v131"]],
    "f3e_v131": [["v121", "v131"], ["v122", "v131"]],
    "v131_v142": [["v131", "v142"]],
    "v142_v141": [["v142", "v141"]],
    "v142_v143": [["v142", "v143"]],
    "v142_v151": [["v142", "v151"]],
    "v151_f4s": [["v151", "v161"], ["v151", "v162"], ["v151", "v163"], ["v151", "v164"]],
    "f4s_l3": [["v151", "v161"]],
    "f4s_l2": [["v151", "v161"], ["v151", "v162"]],
    "f4s_l1": [["v151", "v161"], ["v151", "v162"]],
    "f4s_r1": [["v151", "v163"], ["v151", "v164"]],
    "f4s_r2": [["v151", "v163"], ["v151", "v164"]],
    "f4s_r3": [["v151", "v164"]],
    "f4s_v161": [["v151", "v161"]],
    "f4s_v162": [["v151", "v162"]],
    "f4s_v163": [["v151", "v163"]],
    "f4s_v164": [["v151", "v164"]],
    "v161_v171": [["v161", "v171"]],
    "v162_v172": [["v162", "v172"]],
    "v163_v173": [["v163", "v173"]],
    "v164_v174": [["v164", "v174"]],
    "v171_v181": [["v171", "v181"]],
    "v172_v182": [["v172", "v182"]],
    "v173_v183": [["v173", "v183"]],
    "v174_v184": [["v174", "v184"]],
    "v181_v191": [["v181", "v191"]],
    "v182_v192": [["v182", "v192"]],
    "v183_v193": [["v183", "v193"]],
    "v184_v194": [["v184", "v194"]],
    "v191_f4e": [["v191", "v201"]],
    "v192_f4e": [["v192", "v201"]],
    "v193_f4e": [["v193", "v201"]],
    "v194_f4e": [["v194", "v201"]],
    "l3_f4e": [["v191", "v201"]],
    "l2_f4e": [["v191", "v201"], ["v192", "v201"]],
    "l1_f4e": [["v191", "v201"], ["v192", "v201"]],
    "r1_f4e": [["v193", "v201"], ["v194", "v201"]],
    "r2_f4e": [["v193", "v201"], ["v194", "v201"]],
    "r3_f4e": [["v194", "v201"]],
    "f4e_v201": [["v191", "v201"], ["v192", "v201"], ["v193", "v201"], ["v194", "v201"]],
    "v201_v211": [["v201", "v211"]],
};

function update_vacuumic_tree() {
    for (let key of Object.keys(vacuumic_tree_connections)) {
        let visible = false;
        let possible = false;
        let picked = false;

        for (let i = 0; i < vacuumic_tree_connections[key].length; i++) {
            if (functions[player.upgrades[vacuumic_tree_connections[key][i][0]].availability_function]() && functions[player.upgrades[vacuumic_tree_connections[key][i][1]].availability_function]()) visible = true;
            if (player.upgrades[vacuumic_tree_connections[key][i][0]].amt > 0) {
                if (player.upgrades[vacuumic_tree_connections[key][i][1]].amt > 0) picked = true;
                if (functions[player.upgrades[vacuumic_tree_connections[key][i][1]].unlock_function]()) possible = true;
            }
        }

        if (visible) document.getElementById("vacuumic_tree_line_" + key).style.visibility = "";
        else document.getElementById("vacuumic_tree_line_" + key).style.visibility = "hidden";

        if (picked) document.getElementById("vacuumic_tree_line_" + key).className = "vacuumic-tree-line active";
        else if (possible) document.getElementById("vacuumic_tree_line_" + key).className = "vacuumic-tree-line possible";
        else document.getElementById("vacuumic_tree_line_" + key).className = "vacuumic-tree-line";
    }
}

function update_vacuumic_tree_old() {
    if (player.upgrades['v11'].amt > 0) {
        if (player.upgrades['v21'].amt > 0) document.getElementById("vacuumic_tree_line_v11_v21").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v11_v21").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v11_v21").className = "vacuumic-tree-line";

    if (player.upgrades['v21'].amt > 0) {
        if (player.upgrades['v31'].amt > 0 || player.upgrades['v32'].amt > 0) document.getElementById("vacuumic_tree_line_v21_f1s").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v21_f1s").className = "vacuumic-tree-line possible";

        if (player.upgrades['v31'].amt > 0) {
            document.getElementById("vacuumic_tree_line_f1s_l").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_f1s_v31").className = "vacuumic-tree-line active";
        }
        else if (functions[player.upgrades['v31'].unlock_function]()) {
            document.getElementById("vacuumic_tree_line_f1s_l").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_f1s_v31").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_f1s_l").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_f1s_v31").className = "vacuumic-tree-line";
        }

        if (player.upgrades['v32'].amt > 0) {
            document.getElementById("vacuumic_tree_line_f1s_r").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_f1s_v32").className = "vacuumic-tree-line active";
        }
        else if (functions[player.upgrades['v32'].unlock_function]()) {
            document.getElementById("vacuumic_tree_line_f1s_r").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_f1s_v32").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_f1s_r").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_f1s_v32").className = "vacuumic-tree-line";
        }
    }
    else {
        document.getElementById("vacuumic_tree_line_v21_f1s").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f1s_l").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f1s_r").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f1s_v31").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f1s_v32").className = "vacuumic-tree-line";
    }

    if (player.upgrades['v31'].amt > 0) {
        if (player.upgrades['v41'].amt > 0) document.getElementById("vacuumic_tree_line_v31_v41").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v31_v41").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v31_v41").className = "vacuumic-tree-line";

    if (player.upgrades['v32'].amt > 0) {
        if (player.upgrades['v42'].amt > 0) document.getElementById("vacuumic_tree_line_v32_v42").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v32_v42").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v32_v42").className = "vacuumic-tree-line";

    if (player.upgrades['v41'].amt > 0 || player.upgrades['v42'].amt > 0) {
        if (player.upgrades['v51'].amt > 0) document.getElementById("vacuumic_tree_line_f1e_v51").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_f1e_v51").className = "vacuumic-tree-line possible";

        if (player.upgrades['v41'].amt > 0 && player.upgrades['v51'].amt > 0) {
            document.getElementById("vacuumic_tree_line_l_f1e").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_v41_f1e").className = "vacuumic-tree-line active";
        }
        else if (player.upgrades['v41'].amt > 0) {
            document.getElementById("vacuumic_tree_line_l_f1e").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_v41_f1e").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_l_f1e").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_v41_f1e").className = "vacuumic-tree-line";
        }

        if (player.upgrades['v42'].amt > 0 && player.upgrades['v51'].amt > 0) {
            document.getElementById("vacuumic_tree_line_r_f1e").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_v42_f1e").className = "vacuumic-tree-line active";
        }
        else if (player.upgrades['v42'].amt > 0) {
            document.getElementById("vacuumic_tree_line_r_f1e").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_v42_f1e").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_r_f1e").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_v42_f1e").className = "vacuumic-tree-line";
        }
    }
    else {
        document.getElementById("vacuumic_tree_line_f1e_v51").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_l_f1e").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_r_f1e").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_v41_f1e").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_v42_f1e").className = "vacuumic-tree-line";
    }

    if (player.upgrades['v51'].amt > 0) {
        if (player.upgrades['v61'].amt > 0) document.getElementById("vacuumic_tree_line_v51_v61").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v51_v61").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v51_v61").className = "vacuumic-tree-line";

    if (player.upgrades['v61'].amt > 0) {
        if (player.upgrades['v71'].amt > 0) document.getElementById("vacuumic_tree_line_v61_v71").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v61_v71").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v61_v71").className = "vacuumic-tree-line";

    if (player.upgrades['v71'].amt > 0) {
        if (player.upgrades['v72'].amt > 0) document.getElementById("vacuumic_tree_line_v71_v72").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v71_v72").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v71_v72").className = "vacuumic-tree-line";

    if (player.upgrades['v71'].amt > 0) {
        if (player.upgrades['v81'].amt > 0 || player.upgrades['v82'].amt > 0 || player.upgrades['v83'].amt > 0) document.getElementById("vacuumic_tree_line_v71_f2s").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v71_f2s").className = "vacuumic-tree-line possible";

        if (player.upgrades['v81'].amt > 0) {
            document.getElementById("vacuumic_tree_line_f2s_l").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_f2s_v81").className = "vacuumic-tree-line active";
        }
        else if (functions[player.upgrades['v81'].unlock_function]()) {
            document.getElementById("vacuumic_tree_line_f2s_l").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_f2s_v81").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_f2s_l").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_f2s_v81").className = "vacuumic-tree-line";
        }

        if (player.upgrades['v82'].amt > 0) {
            document.getElementById("vacuumic_tree_line_f2s_v82").className = "vacuumic-tree-line active";
        }
        else if (functions[player.upgrades['v82'].unlock_function]()) {
            document.getElementById("vacuumic_tree_line_f2s_v82").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_f2s_v82").className = "vacuumic-tree-line";
        }

        if (player.upgrades['v83'].amt > 0) {
            document.getElementById("vacuumic_tree_line_f2s_r").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_f2s_v83").className = "vacuumic-tree-line active";
        }
        else if (functions[player.upgrades['v83'].unlock_function]()) {
            document.getElementById("vacuumic_tree_line_f2s_r").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_f2s_v83").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_f2s_r").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_f2s_v83").className = "vacuumic-tree-line";
        }
    }
    else {
        document.getElementById("vacuumic_tree_line_v71_f2s").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f2s_l").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f2s_r").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f2s_v81").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f2s_v82").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_f2s_v83").className = "vacuumic-tree-line";
    }

    if (player.upgrades['v81'].amt > 0) {
        if (player.upgrades['v91'].amt > 0) document.getElementById("vacuumic_tree_line_v81_v91").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v81_v91").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v81_v91").className = "vacuumic-tree-line";

    if (player.upgrades['v82'].amt > 0) {
        if (player.upgrades['v92'].amt > 0) document.getElementById("vacuumic_tree_line_v82_v92").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v82_v92").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v82_v92").className = "vacuumic-tree-line";

    if (player.upgrades['v83'].amt > 0) {
        if (player.upgrades['v93'].amt > 0) document.getElementById("vacuumic_tree_line_v83_v93").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v83_v93").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v83_v93").className = "vacuumic-tree-line";

    if (player.upgrades['v91'].amt > 0) {
        if (player.upgrades['v101'].amt > 0) document.getElementById("vacuumic_tree_line_v91_v101").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v91_v101").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v91_v101").className = "vacuumic-tree-line";

    if (player.upgrades['v92'].amt > 0) {
        if (player.upgrades['v102'].amt > 0) document.getElementById("vacuumic_tree_line_v92_v102").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v92_v102").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v92_v102").className = "vacuumic-tree-line";

    if (player.upgrades['v93'].amt > 0) {
        if (player.upgrades['v103'].amt > 0) document.getElementById("vacuumic_tree_line_v93_v103").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v93_v103").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v93_v103").className = "vacuumic-tree-line";

    if (player.upgrades['v101'].amt > 0) {
        if (player.upgrades['v111'].amt > 0 || player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_v101_f3s").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v101_f3s").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v101_f3s").className = "vacuumic-tree-line";

    if (player.upgrades['v102'].amt > 0) {
        if (player.upgrades['v111'].amt > 0 || player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_v102_f3s").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v102_f3s").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v102_f3s").className = "vacuumic-tree-line";

    if (player.upgrades['v103'].amt > 0) {
        if (player.upgrades['v111'].amt > 0 || player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_v103_f3s").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v103_f3s").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v103_f3s").className = "vacuumic-tree-line";

    if (player.upgrades['v101'].amt > 0) {
        if (player.upgrades['v111'].amt > 0 || player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_f3s_l2").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_f3s_l2").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_f3s_l2").className = "vacuumic-tree-line";

    if (player.upgrades['v102'].amt > 0) {
        if (player.upgrades['v111'].amt > 0) document.getElementById("vacuumic_tree_line_f3s_l1").className = "vacuumic-tree-line active";
        else if (player.upgrades['v112'].amt == 0) document.getElementById("vacuumic_tree_line_f3s_l1").className = "vacuumic-tree-line possible";
        else document.getElementById("vacuumic_tree_line_f3s_l1").className = "vacuumic-tree-line";
    }
    else document.getElementById("vacuumic_tree_line_f3s_l1").className = "vacuumic-tree-line";

    if (player.upgrades['v102'].amt > 0) {
        if (player.upgrades['v111'].amt > 0 || player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_f3s_m").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_f3s_m").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_f3s_m").className = "vacuumic-tree-line";

    if (player.upgrades['v102'].amt > 0) {
        if (player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_f3s_r1").className = "vacuumic-tree-line active";
        else if (player.upgrades['v111'].amt == 0) document.getElementById("vacuumic_tree_line_f3s_r1").className = "vacuumic-tree-line possible";
        else document.getElementById("vacuumic_tree_line_f3s_r1").className = "vacuumic-tree-line";
    }
    else document.getElementById("vacuumic_tree_line_f3s_r1").className = "vacuumic-tree-line";

    if (player.upgrades['v103'].amt > 0) {
        if (player.upgrades['v111'].amt > 0 || player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_f3s_r2").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_f3s_r2").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_f3s_r2").className = "vacuumic-tree-line";

    if (player.upgrades['v101'].amt > 0 || player.upgrades['v102'].amt > 0) {
        if (player.upgrades['v111'].amt > 0) document.getElementById("vacuumic_tree_line_f3s_v111").className = "vacuumic-tree-line active";
        else if (player.upgrades['v112'].amt == 0) document.getElementById("vacuumic_tree_line_f3s_v111").className = "vacuumic-tree-line possible";
        else document.getElementById("vacuumic_tree_line_f3s_v111").className = "vacuumic-tree-line";
    }
    else document.getElementById("vacuumic_tree_line_f3s_v111").className = "vacuumic-tree-line";

    if (player.upgrades['v102'].amt > 0 || player.upgrades['v103'].amt > 0) {
        if (player.upgrades['v112'].amt > 0) document.getElementById("vacuumic_tree_line_f3s_v112").className = "vacuumic-tree-line active";
        else if (player.upgrades['v111'].amt == 0) document.getElementById("vacuumic_tree_line_f3s_v112").className = "vacuumic-tree-line possible";
        else document.getElementById("vacuumic_tree_line_f3s_v112").className = "vacuumic-tree-line";
    }
    else document.getElementById("vacuumic_tree_line_f3s_v112").className = "vacuumic-tree-line";

    if (player.upgrades['v111'].amt > 0) {
        if (player.upgrades['v121'].amt > 0) document.getElementById("vacuumic_tree_line_v111_v121").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v111_v121").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v111_v121").className = "vacuumic-tree-line";

    if (player.upgrades['v112'].amt > 0) {
        if (player.upgrades['v122'].amt > 0) document.getElementById("vacuumic_tree_line_v112_v122").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v112_v122").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v112_v122").className = "vacuumic-tree-line";

    if (player.upgrades['v121'].amt > 0 || player.upgrades['v122'].amt > 0) {
        if (player.upgrades['v131'].amt > 0) document.getElementById("vacuumic_tree_line_f3e_v131").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_f3e_v131").className = "vacuumic-tree-line possible";

        if (player.upgrades['v121'].amt > 0 && player.upgrades['v131'].amt > 0) {
            document.getElementById("vacuumic_tree_line_l_f3e").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_v121_f3e").className = "vacuumic-tree-line active";
        }
        else if (player.upgrades['v121'].amt > 0) {
            document.getElementById("vacuumic_tree_line_l_f3e").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_v121_f3e").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_l_f3e").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_v121_f3e").className = "vacuumic-tree-line";
        }

        if (player.upgrades['v122'].amt > 0 && player.upgrades['v131'].amt > 0) {
            document.getElementById("vacuumic_tree_line_r_f3e").className = "vacuumic-tree-line active";
            document.getElementById("vacuumic_tree_line_v122_f3e").className = "vacuumic-tree-line active";
        }
        else if (player.upgrades['v122'].amt > 0) {
            document.getElementById("vacuumic_tree_line_r_f3e").className = "vacuumic-tree-line possible";
            document.getElementById("vacuumic_tree_line_v122_f3e").className = "vacuumic-tree-line possible";
        }
        else {
            document.getElementById("vacuumic_tree_line_r_f3e").className = "vacuumic-tree-line";
            document.getElementById("vacuumic_tree_line_v122_f3e").className = "vacuumic-tree-line";
        }
    }
    else {
        document.getElementById("vacuumic_tree_line_f3e_v131").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_l_f3e").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_r_f3e").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_v121_f3e").className = "vacuumic-tree-line";
        document.getElementById("vacuumic_tree_line_v122_f3e").className = "vacuumic-tree-line";
    }

    if (player.upgrades['v131'].amt > 0) {
        if (player.upgrades['v142'].amt > 0) document.getElementById("vacuumic_tree_line_v131_v142").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v131_v142").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v131_v142").className = "vacuumic-tree-line";

    if (player.upgrades['v142'].amt > 0) {
        if (player.upgrades['v141'].amt > 0) document.getElementById("vacuumic_tree_line_v142_v141").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v142_v141").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v142_v141").className = "vacuumic-tree-line";

    if (player.upgrades['v142'].amt > 0) {
        if (player.upgrades['v143'].amt > 0) document.getElementById("vacuumic_tree_line_v142_v143").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v142_v143").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v142_v143").className = "vacuumic-tree-line";

    if (player.upgrades['v142'].amt > 0) {
        if (player.upgrades['v151'].amt > 0) document.getElementById("vacuumic_tree_line_v142_v151").className = "vacuumic-tree-line active";
        else document.getElementById("vacuumic_tree_line_v142_v151").className = "vacuumic-tree-line possible";
    }
    else document.getElementById("vacuumic_tree_line_v142_v151").className = "vacuumic-tree-line";
}