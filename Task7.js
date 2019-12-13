/*ASSINGMENT NUM 1*/
/*Task.7 Display this in your browser
a. A heading stating “Rules for naming JS variables”
b. Variable names can only contain ______, ______,
c. ______ and ______.
d. For example $my_1stVariable.
e. Variables must begin with a ______, ______ or
f. _____. For example $name, _name or name
g. Variable names are case _________
h. Variable names should not be JS _________ */


var numbers     = "numbers";
var dollarSign  = "$";
var underScore  = "_";
var letter      = "Letter";
var casE        = "Senstive";
var keywords    = "Keywords"

document.write(" <h1> Rules for naming JS Variables </h1> <br>" );

document.write(" Variable names can only contain " + numbers + "  " + dollarSign + " and " 
+ underScore + "." + " For example $my_1stVariable. <br>");

document.write(" Variables must begin with a " + letter + "  " + dollarSign + " and" +
underScore + "." + " For example $name, _name or name." + "<br>");

document.write(" Variable names are case " + casE +"." +"<br>");

document.write(" Variable names should not be JS " + keywords + ".");