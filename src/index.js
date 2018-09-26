module.exports = function solveEquation(equation) {
equation = equation.replace(/x/g, '').replace('^2', '').replace(/ /g, '');
  equation = equation.split('*');

  var a = parseFloat(equation[0]);
  var b = parseFloat(equation[1]);
  var c = parseFloat(equation[2]);
  var arr = [];

  var d = b * b - 4 * a * c;
  if (d == 0) {
    arr.push(Math.round( - (b / 2 * a)));
  }
  if (d > 0) {
    arr.push(Math.round((- b + Math.sqrt(d)) / (2 * a)));
    arr.push(Math.round((- b - Math.sqrt(d)) / (2 * a)));
  }

  return arr.sort(function(a, b) {return a - b;});
}
