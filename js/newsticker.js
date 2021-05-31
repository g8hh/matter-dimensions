const NEWSTICKER_SPEED = 0.08;
const NEWSTICKER_GAP = 100;

let newsticker_shift = 0;
let newsticker_last_update_ts = -1;

function choose_newsticker() {
    let possible_newstickers = NEWSTICKER_LINES.length;
    for (let ticker of CONDITIONAL_NEWSTICKER_LINES) {
        if (ticker[0]()) possible_newstickers += 1;
    }

    possible_newstickers = Math.floor(Math.random() * possible_newstickers);
    if (possible_newstickers < NEWSTICKER_LINES.length) return NEWSTICKER_LINES[possible_newstickers];
    else {
        possible_newstickers -= NEWSTICKER_LINES.length;
        for (let ticker of CONDITIONAL_NEWSTICKER_LINES) {
            if (ticker[0]()) {
                if (possible_newstickers == 0) return ticker[1];
                possible_newstickers -= 1;
            }
        }
    }
}

function update_newsticker(ts) {
    if (newsticker_last_update_ts == -1) newsticker.innerHTML = choose_newsticker();

    let timedelta = ts - newsticker_last_update_ts;
    newsticker_last_update_ts = ts;

    if (document.body.classList.contains("has-newsticker")) {
        let newsticker = document.getElementById("newsticker");

        let newsticker_length = newsticker.offsetWidth;
        let current_shift = document.body.offsetWidth - newsticker_shift;

        current_shift -= NEWSTICKER_SPEED * timedelta;
        if (current_shift < -(newsticker_length + 10) - NEWSTICKER_GAP) {
            newsticker.innerHTML = choose_newsticker();
            current_shift = document.body.offsetWidth;
        }

        newsticker_shift = document.body.offsetWidth - current_shift;
        newsticker.style.left = current_shift + "px";
    }

    requestAnimationFrame(update_newsticker);
}

requestAnimationFrame(update_newsticker);