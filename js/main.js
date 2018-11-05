function calc_euclidean_algorithm(){
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;

    document.getElementById("result").value = gcd(first, second);
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}