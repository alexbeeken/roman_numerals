var romanNumerals = function(number) {
  var output = [];
  var remaining = number;

  var values = [1, 10, 100, 1000];

  var split_number = [0, 0, 0, 0];

  for (var i = 0; i < 4; i++) {

    split_number[i] = Math.floor((number / values[i]) % 10);

    if (split_number[i] != 0) {
      output.unshift(numeralForDigit(split_number[i], i));
    };
  };
  return output.join("");
};

var numeralForDigit = function(digit, num_of_zeros) {
  var numeral_array = [];
  var numerals = ["M", "D", "C", "L", "X", "V", "I"];
  var values = [1000,500,100,50,10,5,1];

  var low_symbol = numerals[(values.length - (num_of_zeros * 2)) - 1];
  var mid_symbol = numerals[(values.length - (num_of_zeros * 2)) - 2];
  var high_symbol = numerals[(values.length - (num_of_zeros * 2)) - 3];


  if (digit < 4) {
      for (var i = digit; i > 0; i--) {
        numeral_array.push(low_symbol);
      };
  } else if (digit === 4) {
      numeral_array.push(low_symbol.concat(mid_symbol));
  } else if (digit <9) {
      numeral_array.push(mid_symbol);
      for (var i = (digit - 5); i > 0; i--) {
        numeral_array.push(low_symbol);
      };
  } else {
      numeral_array.push(low_symbol.concat(high_symbol));
  }

  return numeral_array.join("");
};

$(document).ready(function(){
  $("form#romanNumerals").submit(function(event){
    var number = $("input#number").val();
    var result = romanNumerals(number);

    $("#romannumeral").text(result);

    $(".result").show();
    event.preventDefault();
  });
});
