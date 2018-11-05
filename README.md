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
    var rest = 1;
    var result = 0;

    for(var i=first; rest > 0; i++){
        rest = first % second;
        rest == 0 ? result = second : false;
        first = second;
        second = rest;
    }
    document.getElementById("result").value = result;
}
```
## Authors

* **Alex Kante** - *Initial work* - [AlgorithmAlex](https://github.com/AlgorithmAlex)