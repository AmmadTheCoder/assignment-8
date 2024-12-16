// Write a js program to find maximum between two numbers.
var userInput1=+prompt("Enter a First Numer");
var userInput2=+prompt("Enter a Second Numer");
if(userInput1>userInput2){
    console.log(`${userInput1} is greater than ${userInput2}.`);
    
}
else if(userInput2>userInput1){
    console.log(`${userInput2} is greater than ${userInput1}.`);   
}
else if(userInput1=userInput2){
    console.log("Equal Numbers");
    
}
else{
    console.log("Invalid Inputs");
    
}