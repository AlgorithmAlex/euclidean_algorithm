function calc(){
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