// Write a js program to find number is negative, positive or zero.
var userInput=+ prompt("Enter a Number.");
if(userInput>0){
    console.log(`${userInput} is a positive number.`);
    
}
else if(userInput<0){
    console.log(`${userInput} is a negative number.`);  
}
else if(userInput==0){
    console.log("Number is zero.");
}
else{
    console.log("Invalid Inputs");
    
}