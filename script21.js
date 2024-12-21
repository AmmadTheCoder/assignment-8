// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
var units=+ prompt("Enter the number of units.");
if(units>=0 && units<=50){
    var priceOfUnits=0.50*units;
    var subcharge=priceOfUnits*20/100;
    var totalBill= priceOfUnits+subcharge;
    console.log(`Your total bill is Rs. ${totalBill}.`);
}
else if(units>=0 && units<=150){
    var unitsAbove50=units-50;
    var priceOfUnitsAbove50=0.75*unitsAbove50;
    var priceOfUnitsBelow50=0.50*50;
    var totalPriceOfUnits=priceOfUnitsAbove50+priceOfUnitsBelow50;
    var subcharge=totalPriceOfUnits*20/100;
    var totalBill=totalPriceOfUnits + subcharge;
    console.log(`Your total bill is Rs. ${totalBill}.`);
}
else if(units>=0 && units<=250){
    var unitsAbove150=units-150;
    var priceOfUnitsBelow50=0.50*50;
    var priceOfUnitsAbove50=0.75*100;
    var priceOfUnitsAbove150=1.20*unitsAbove150;
    var totalPriceOfUnits=priceOfUnitsAbove50+priceOfUnitsBelow50+ priceOfUnitsAbove150;
    var subcharge=totalPriceOfUnits*20/100;
    var totalBill=totalPriceOfUnits + subcharge;
    console.log(`Your total bill is Rs. ${totalBill}.`);
}
else if(units>250){
    var unitsAbove250=units-250;
    var priceOfUnitsBelow50=0.50*50;
    var priceOfUnitsAbove50=0.75*100;
    var priceOfUnitsAbove150=1.20*100;
    var priceOfUnitsAbove250=1.50*unitsAbove250;
    var totalPriceOfUnits=priceOfUnitsAbove50+priceOfUnitsBelow50+ priceOfUnitsAbove150+priceOfUnitsAbove250;
    var subcharge=totalPriceOfUnits*20/100;
    var totalBill=totalPriceOfUnits + subcharge;
    console.log(`Your total bill is Rs. ${totalBill}.`);
}
else{
    console.log("Invalid Inputs.");
    
}