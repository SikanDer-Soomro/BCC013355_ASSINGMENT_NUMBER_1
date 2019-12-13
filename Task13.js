/*ASSINGMENT NUM 1*/
/*Task.13 Write a program to take a number in a variable, do the required
arithmetic to display the following result in your browser: */

var num1 = 10;
document.write("<strong> Result: </strong> "+"<br>")
document.write(" The value of num is: " +num1+ "<br>");
document.write(".........................................." + "<br>");

var preIncrementNum    = ++num1;
var increment          = preIncrementNum;
document.write(" The value of ++num: " +preIncrementNum+ "<br>");
document.write(" Now the value of num is: " +increment+ "<br> <br>");

var postIncrement        = preIncrementNum;
var postIncreamentNum    = ++preIncrementNum;

document.write(" The value of num++ is: " +postIncrement+ "<br>");
document.write(" Now the value of num is: " +postIncreamentNum+ "<br> <br>");

var preIncrementNum  =   num1;
var postDecrement    =   num1--;
document.write(" The value of --num is: "    +preIncrementNum+ "<br>");
document.write(" Now the value of num is: "  +postDecrement + "<br> <br>");


var  againPostDecrement   =      postIncrement;
var  preDecrement         =  --preIncrementNum; 
document.write(" The value of --num is: "   +againPostDecrement+ "<br>");
document.write(" Now the value of num is: " +preDecrement+  "<br> <br>");







 