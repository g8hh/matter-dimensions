function round_prec(x, prec) {
    return Math.round(x * prec) / prec;
}

function pad_number(number, extra_digits, fixed=false) {
    let num = String(round_prec(number, Math.pow(10, extra_digits)));
    if (fixed && extra_digits > 0) {
        if (!num.includes('.')) num += '.';
        for (let rem = extra_digits - num.length + num.indexOf('.') + 1; rem > 0; rem--) num += '0';
    }
    return num;
}

function stringify_number_base2(number) {
    if (isNaN(number)) return "NaN";
    if (!isFinite(number)) return "Infinity";
    if (number < 0) return "-" + stringify_number_base2(-number);
    if (number < 2) return String(number);
    return stringify_number_base2(Math.floor(number / 2)) + String(number % 2);
}

function pad_number_base2(number, extra_digits, fixed=false) {
    let num_raw = round_prec(number, Math.pow(2, extra_digits));
    let num_raw_main = Math.floor(num_raw);
    let num_raw_sec = Math.round((num_raw - num_raw_main) * Math.pow(2, extra_digits)) % Math.round(Math.pow(2, extra_digits));
    if (num_raw_sec >= Math.round(Math.pow(2, extra_digits))) num_raw_main += 1;
    num_raw_sec %= Math.round(Math.pow(2, extra_digits));
    num_raw_sec += Math.round(Math.pow(2, extra_digits));
    let num_str = stringify_number_base2(num_raw_main) + '.' + stringify_number_base2(num_raw_sec).slice(1);
    
    if (!fixed || extra_digits == 0) {
        while (num_str.charAt(num_str.length - 1) == '0') num_str = num_str.slice(0, -1);
        if (num_str.charAt(num_str.length - 1) == '.') num_str = num_str.slice(0, -1);
    }
    return num_str;
}

function prettify_integer(number) {
    let num = String(number);
    let result = "";
    for (let i = 0; i < num.length; i++) {
        result += num[i];
        if (i < num.length - 1 && (num.length - i) % 3 == 1) result += "'";
    }
    return result;
}

function modified_log2(number) {
    if (number <= 0) return -Infinity;
    return Math.floor(Math.log2(number)) + number / Math.pow(2, Math.floor(Math.log2(number))) - 1;
}

function format_number(number, fixed=false, ignore_infinity=false, notation="", integer=false) {
    if (notation == "") notation = player.settings["notation"];
    if (notation == "blind") return "";
    if (!(number instanceof BigNumber)) number = new BigNumber(number);

    // Challenge 4: all resources are capped
    if (number.gt(player.challenge_strength_4) && !ignore_infinity && !player.settings["no_resource_limit"]) {
        return "Infinite";
    }

    let result = "";

    let num_lg = number.log(10).toInt();
    let num_sgn = number.sign;

    if (num_lg < -6) num_sgn = true;

    switch (notation) {
        case "default":
            if (!num_sgn) result += "-";

            if (num_lg < 6) { // Non-exponential
                let extra_digits = 0;
                if (num_lg < 5) extra_digits = 1;
                if (num_lg < 4) extra_digits = 2;
                if (num_lg < 3) extra_digits = 3;
                if (integer) extra_digits = 0;

                result += pad_number(Math.pow(10, num_lg), extra_digits, fixed);
            }
            else if (num_lg < 1e12) { // Exponential, 2-digit precision
                if (round_prec(Math.pow(10, num_lg - Math.floor(num_lg)), 100) == 10) num_lg = Math.round(num_lg);

                result += pad_number(Math.pow(10, num_lg - Math.floor(num_lg)), 2, fixed);
                result += "e";
                result += prettify_integer(Math.floor(num_lg));
            }
            else { // Double-exponential, 3-digit precision
                result += "ee" + pad_number(Math.log10(num_lg), 3, fixed);
            }
            break;
        case "alternate_default":
            result = format_number(number, fixed, ignore_infinity, "default", integer);
            result = result.split('e').join('ᴇ');
            break;
        case "scientific":
            if (!num_sgn) result += "-";

            if (num_lg < 6) result = format_number(number, fixed, ignore_infinity, "default", integer);
            else if (num_lg < 1e12) {
                result = format_number(number, fixed, ignore_infinity, "default", integer);
                result = result.split('e').join("·10^");
            }
            else {
                result += "10^";
                result += format_number(num_lg, fixed, ignore_infinity, "default");
            }
            break;
        case "logarithm":
            if (!num_sgn) result += "-";

            if (num_lg < 3) {
                result = format_number(number, fixed, ignore_infinity, "default", integer);
            }
            else result += "e" + format_number(num_lg, fixed, ignore_infinity, "default");

            break;
        case "infinity":
            if (!num_sgn) result += "-";

            if (num_lg < 3) {
                result = format_number(number, fixed, ignore_infinity, "default", integer);
            }
            else result += format_number(number.log(big(2).pow(1024)), fixed, ignore_infinity, "default") + "∞";

            break;
        case "binary":
            num_lg = number.log(2).toInt();

            if (num_lg < 10) { // Non-exponential
                let extra_digits = 0;
                if (num_lg < 7) extra_digits = 1;
                if (num_lg < 5) extra_digits = 2;
                if (num_lg < 3) extra_digits = 3;
                if (integer) extra_digits = 0;

                result += pad_number_base2(Math.pow(2, num_lg), extra_digits, fixed);
            }
            else if (num_lg < 4096) { // Exponential, 2-digit precision
                if (round_prec(Math.pow(2, num_lg - Math.floor(num_lg)), 4) == 2) num_lg = Math.round(num_lg);

                result += pad_number_base2(Math.pow(2, num_lg - Math.floor(num_lg)), 2, fixed);
                result += "b";
                result += prettify_integer(stringify_number_base2(Math.floor(num_lg)));
            }
            else { // Double-exponential, 3-digit precision
                result += "bb" + pad_number_base2(Math.log2(num_lg), 3, fixed);
            }

            break;
        case "hex":
            const HEX_SYMBOLS = "0123456789ABCDEF";
            let hex_repr = 1;
            num_lg = number.log(2).toInt() - 2 / 3;
            if (num_lg < -1e100) num_lg = -Infinity;
            for (let i = 0; i < 31; i++) {
                hex_repr *= 2;
                if (num_lg >= 0) {
                    hex_repr += 1;
                    num_lg = modified_log2(num_lg);
                }
                else {
                    num_lg = -modified_log2(-num_lg);
                }
            }
            if (!num_sgn) hex_repr = Math.pow(2, 32) - hex_repr;
            for (let i = 0; i < 8; i++) {
                result += HEX_SYMBOLS[hex_repr % 16];
                hex_repr = Math.floor(hex_repr / 16);
            }
            result = result.split("").reverse().join("");
            break;
        case "emoji":
            const EMOJI_REPLACEMENTS = {
                '0': '0️⃣', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣',
                '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', '8': '8️⃣', '9': '9️⃣',
                '-': '➖', '.': '.', 'e': '🇪', "'": '🟦'
            };
        
            result = format_number(number, fixed, ignore_infinity, "default", integer);
            if (!fixed) result = result.split('10').join('🔟');
            for (let key of Object.keys(EMOJI_REPLACEMENTS)) {
                result = result.split(key).join(EMOJI_REPLACEMENTS[key]);
            }
            break;
    }


    return result;
}