// Write a js program to calculate profit or loss.
var cost=+ prompt("Ennter the total cost amount");
var selling=+ prompt("Ennter the total selling amount");
var tax=+ prompt("Ennter the tax percentage (like 17) ");
taxAmount= selling*tax/100;
var profit=selling-cost-taxAmount
if (profit>=0 ) {
    console.log(`Your profit is Rs. ${profit}`);
    
}
else{
    console.log(`Your loss is Rs. ${-profit}`); 
}