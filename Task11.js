/*ASSINGMENT NUMB 1*/
/*Task.11 The Temperature Converter: It’s hot out! Let’s make a converter
based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “N
oC is N
oF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “N
oF is N
oC”.
Conversion Formulae:
 */

var givenCelsius       = 25;
var fahrenheit         = (givenCelsius * 9 / 5) + 32;
var givenFahrenheit    = 70;
var celsius            = (givenFahrenheit - 32) * 5 / 9;
document.write(givenCelsius + " <sup>0</sup>C is " + fahrenheit + " <sup>0</sup>F " + "<br>");
document.write(givenFahrenheit +  " <sup>o</sup>F is " + celsius + " <sup>0</sup>C ");