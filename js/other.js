function n_Fibonacci(n, k) {
    return big(n).add(big(n).pow(2).add(4).pow(0.5)).div(2).pow(k).div(big(n).pow(2).add(4).pow(0.5)).round();
}

function n_Fibonacci_rev(n, x) {
    if (big(x).lt(0.5)) return big(0);
    let candidate = big(x).mult(big(n).pow(2).add(4).pow(0.5)).log(big(n).add(big(n).pow(2).add(4).pow(0.5)).div(2)).rounddown();
    if (!(big(x).lt(n_Fibonacci(n, candidate.add(1)).subtract(0.5)))) candidate = candidate.add(1);
    return candidate;
}