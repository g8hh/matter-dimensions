var MAX_MANTISSA = 1e100;
var MAX_EXP = 1e300;

class BigNumber {
    // this.sign - sign
    // this.mantissa - mantissa, [1, MAX_MANTISSA]
    // this.exp - exponent, [-INF, INF]
    constructor(number = 0) {
        if (typeof number === 'string' || number instanceof String) {
            this.constructFromString(number);
        }
        else {
            this.constructFromInt(number);
        }
    }

    constructFromInt(number) {
        this.sign = true;
        if (number < 0) {
            this.sign = false;
            number = -number;
        }

        if (Math.abs(number) == 0) {
            this.mantissa = 1;
            this.exp = -MAX_EXP;
        }
        else if (!isFinite(number)) {
            this.mantissa = 1;
            this.exp = MAX_EXP;
        }
        else {
            this.mantissa = Math.abs(number);
            this.exp = 0;
            while (this.mantissa > MAX_MANTISSA) {
                this.mantissa /= MAX_MANTISSA;
                this.exp += 1;
            }
            while (this.mantissa < 1) {
                this.mantissa *= MAX_MANTISSA;
                this.exp -= 1;
            }
        }
    }

    constructFromString(number) {
        // a^b
        if (number.includes("^")) {
            let pos = number.indexOf("^");
            this.copy(big(number.substr(0, pos)).pow(number.substr(pos + 1)));
        }
        else {
            // aeb
            if (number.includes("e")) {
                let pos = number.indexOf("e");
                if (pos > 0) this.copy(big(number.substr(0, pos)).mult(big(10).pow(number.substr(pos + 1))));
                else this.copy(big(10).pow(number.substr(pos + 1)));
            }
            else {
                // normal number
                this.constructFromInt(Number(number));
            }
        }
    }

    normalize() {
        if (isNaN(this.mantissa)) this.mantissa = 0;
        if (isNaN(this.exp)) this.exp = 0;

        this.mantissa = Math.max(0, this.mantissa);
        if (!isFinite(this.mantissa)) this.mantissa = MAX_MANTISSA;
        if (this.mantissa == 0 || this.exp <= -MAX_EXP) {
            this.sign = true;
            this.mantissa = 1;
            this.exp = -MAX_EXP;
        }
        while (this.mantissa > MAX_MANTISSA) {
            this.mantissa /= MAX_MANTISSA;
            this.exp += 1;
        }
        while (this.mantissa < 1) {
            this.mantissa *= MAX_MANTISSA;
            this.exp -= 1;
        }
        if (this.exp > MAX_EXP) {
            this.mantissa = 1;
            this.exp = MAX_EXP;
        }
    }

    disentangle() {
        return this.log(10);
    }

    copy(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        this.sign = number.sign;
        this.mantissa = number.mantissa;
        this.exp = number.exp;
    }

    add(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);

        if (this.exp > number.exp + 1) return this.clone();
        if (number.exp > this.exp + 1) return number.clone();
        if (this.exp == -Infinity) return number.clone();
        if (number.exp == -Infinity) return this.clone();

        var result = new BigNumber();
        result.sign = true;
        result.exp = this.exp;
        result.mantissa = 0;
        if (this.sign) result.mantissa += this.mantissa;
        else result.mantissa -= this.mantissa;
        if (number.sign) result.mantissa += number.mantissa * Math.pow(MAX_MANTISSA, number.exp - this.exp);
        else result.mantissa -= number.mantissa * Math.pow(MAX_MANTISSA, number.exp - this.exp);
        if (result.mantissa < 0) {
            result.sign = false;
            result.mantissa = -result.mantissa;
        }
        
        result.normalize();
        return result;
    }

    mult(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        var result = new BigNumber();
        result.sign = (this.sign == number.sign);
        result.exp = this.exp + number.exp;
        result.mantissa = this.mantissa * number.mantissa;

        result.normalize();
        return result;
    }

    div(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        var result = new BigNumber();
        result.sign = (this.sign == number.sign);
        result.exp = this.exp - number.exp;
        result.mantissa = this.mantissa / number.mantissa;

        result.normalize();
        return result;
    }

    subtract(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        return this.add(number.mult(-1));
    }

    pow(number) { // Preserves sign, unlike actual pow
        if (!(number instanceof BigNumber)) number = new BigNumber(number);

        /*if (number.gt(2)) return this.pow(2).pow(number.div(2));

        let pw = number.toInt();

        var result = new BigNumber();
        result.sign = this.sign;
        result.exp = Math.floor(this.exp * pw);
        result.mantissa = Math.pow(this.mantissa, pw) * Math.pow(MAX_MANTISSA, this.exp * pw - Math.floor(this.exp * pw));

        result.normalize();
        return result;*/

        let res_exp = this.log(MAX_MANTISSA).mult(number);

        let result = new BigNumber();
        result.sign = this.sign;
        result.exp = res_exp.rounddown().toInt();
        result.mantissa = Math.pow(MAX_MANTISSA, res_exp.subtract(res_exp.rounddown()).toInt());

        result.normalize();
        return result;
    }

    lt(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        if (this.sign != number.sign) return !this.sign;
        if (this.sign) {
            if (this.exp != number.exp) return this.exp < number.exp;
            else return this.mantissa < number.mantissa;
        }
        else {
            if (this.exp != number.exp) return this.exp > number.exp;
            else return this.mantissa > number.mantissa;
        }
    }

    gt(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        if (this.sign != number.sign) return this.sign;
        if (this.sign) {
            if (this.exp != number.exp) return this.exp > number.exp;
            else return this.mantissa > number.mantissa;
        }
        else {
            if (this.exp != number.exp) return this.exp < number.exp;
            else return this.mantissa < number.mantissa;
        }
    }

    eq(number) {
        return !(this.lt(number) || this.gt(number));
    }

    abs() {
        let result = new BigNumber();
        result.copy(this);
        result.sign = true;
        return result;
    }

    min(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        let res = new BigNumber();
        if (this.lt(number)) res.copy(this);
        else res.copy(number);
        return res;
    }

    max(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);
        let res = new BigNumber();
        if (this.gt(number)) res.copy(this);
        else res.copy(number);
        return res;
    }

    roundup() {
        if (this.exp > 0) return this.clone();
        else return big(Math.ceil(this.toInt()));
    }

    rounddown() {
        if (this.exp > 0) return this.clone();
        else return big(Math.floor(this.toInt()));
    }

    round() {
        if (this.exp > 0) return this.clone();
        else return big(Math.round(this.toInt()));
    }

    log10() {
        return big(this.exp).mult(Math.log10(MAX_MANTISSA)).add(Math.log10(this.mantissa));
    }

    log(number) {
        if (!(number instanceof BigNumber)) number = new BigNumber(number);

        return this.log10().div(number.log10());
    }

    clone() {
        let result = big(0);
        result.copy(this);
        return result;
    }

    toInt() {
        if (this.sign) return (Math.pow(MAX_MANTISSA, this.exp) * this.mantissa);
        else return -(Math.pow(MAX_MANTISSA, this.exp) * this.mantissa);
    }

    create_save() {
        var data = [];
        data.push(this.sign);
        data.push(this.exp);
        data.push(this.mantissa);
        return data;
    }

    load_save(data) {
        this.sign = data[0];
        this.exp = data[1];
        this.mantissa = data[2];
    }
}

function big_number_from_raw_data(sign, mantissa, exponent) {
    let number = new BigNumber();
    number.sign = sign;
    number.mantissa = mantissa;
    number.exp = exponent;
    number.normalize();
    return number;
}

function big(number) {
    if (!(number instanceof BigNumber)) number = new BigNumber(number);
    return number;
}

function big_from_save(data) {
    var res = BigNumber();
    res.load_save(data);
    return res;
}