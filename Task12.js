/*ASSINGMENT NUM 1*/
/*Task.12 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
convert the total currency to Pakistani Rupees. Perform all
calculations in a single expression. (Exchange rates : 1 US Dollar =
155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)*/

var quantity_dollar           =  10;
var eachDollarRateInPakRupee  =  104.84;
var quantity_Riyal            =  25;
var eachRiyalRateInPakRupee   =  28;
var totalCurrencyInPKR        =  (quantity_dollar * eachDollarRateInPakRupee) + 
(quantity_Riyal * eachRiyalRateInPakRupee);

document.write("<h1>CURRENCY IN PKR</h2 <br>");
document.write("Total Currency In PKR: " + totalCurrencyInPKR);
