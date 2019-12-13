/*ASSINGMENT NUM 1*/
/*Task.14 What will be the output in variables a, b & result after execution of
the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */

var a      = 2;
var b      = 1; 
document.write("a is " +a+ "<br>");
document.write("b is " +b+ "<br>");

var result = --a - --b + ++b + b--
document.write("<strong> Result is </strong>" +result+ "<br>");