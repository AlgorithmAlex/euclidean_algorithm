# Project Title

Euclidean algorithm

## Getting Started

A good algorithm to find the largest common divisor.

### Prerequisites

What things you need to install the software and how to install them

```
function calc_euclidean_algorithm(){
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;

    document.getElementById("result").value = gcd(first, second);
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
```
## Authors

* **Alex Kante** - *Initial work* - [AlgorithmAlex](https://github.com/AlgorithmAlex)