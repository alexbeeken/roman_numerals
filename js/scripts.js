var romanNumerals = function(number) {
  var output = [];
  var remaining = number;

  var numerals = ["M", "D", "C", "L", "X", "V", "I"];
  var values = [1000,500,100,50,10,5,1];

for (var x = 0; x < numerals.length; x++) {
  if (remaining >= values[x]) {
    debugger;
   for (var i = (remaining % values[x]); i < remaining; i = i + values[x]) {
      output.push(numerals[x]);
    };
    remaining = remaining % values[x];
  } else if ((remaining === (values[x]-1)) && (remaining > 0)) {
      output.push(numerals[numerals.length-1]);
      output.push(numerals[x]);
      remaining = 0;
  }
};
return output.join("");
};
