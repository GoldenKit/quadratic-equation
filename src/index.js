module.exports = function solveEquation(equation) {

var string = equation.split(' ');
var a = Number(string[0]);
if (string[3] == "+")
    var b = Number(string[4]);
  else
    var b = Number(string[4])*(-1);
if (string[7] == "+")
    var c = Number(string[8]);
else
    var c = Number(string[8])*(-1);

var x1 = Math.round((-b + Math.sqrt((b * b) - (4*a*c))) / (2 * a));
var x2 = Math.round((-b - Math.sqrt((b * b) - (4*a*c))) / (2 * a));

var x1x2 = [];
if (x1 < x2) {
  x1x2.push(x1);
  x1x2.push(x2);
  }
  else {
    x1x2.push(x2);
    x1x2.push(x1);
  }
return x1x2;
}
