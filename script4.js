// Write a js program to check whether a number  is divisible by 5 and 11 or not.
var userInput=+prompt("Enter a Number.");
if (userInput>=0 || userInput<0) {
    if (userInput%5==0 && userInput%11==0) {
        console.log(`${userInput} is divisible by both 5 and 11.`);
    }
    else if (userInput%5==0) {
        console.log(`${userInput} is divisible by 5.`);
    } 
    else if (userInput%11==0) {
        console.log(`${userInput} is divisible by 11.`);
    } 
    else {
        console.log(`${userInput} is not divisible by both 5 and 11.`); 
    }
} 
else {
    console.log("Invalid Inputs");
    
}