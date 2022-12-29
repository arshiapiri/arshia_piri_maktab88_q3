var input = document.querySelector('input');           
input.onkeydown = function () {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] == "_") {
          output[i] = "-";
        } else if (input[i] == ".") {
          output[i] = "-";
        } else
          output[i] = input[i];
      } 
}