// Write a js program to find maximum between three numbers.
var userInput1=+ prompt("Enter a First Number");
var userInput2=+ prompt("Enter a Second Number");
var userInput3=+ prompt("Enter a Third Number");
if(userInput1>userInput2){
    if (userInput1>userInput3) {
        console.log(`${userInput1} is greater than ${userInput2} and ${userInput3}`);
    }
    else if(userInput3>userInput1){
        console.log(`${userInput3} is greater than ${userInput1} and ${userInput2}`);
    }
    else if(userInput1==userInput3) {
        console.log(`${userInput3} and ${userInput1} are equal and greater than ${userInput2}`);
    }
    else{
        console.log("Invalid Inputs");
        
    }
}


else if(userInput1>userInput3){
    if (userInput1>userInput2) {
        console.log(`${userInput1} is greater than ${userInput2} and ${userInput3}`);
    }
    else if(userInput2>userInput1){
        console.log(`${userInput2} is greater than ${userInput1} and ${userInput3}`);
    }
    else if(userInput1==userInput2){
        console.log(`${userInput1} and ${userInput2} are equal and greater than ${userInput3}`);
    }
    else{
        console.log("Invalid Inputs");
        
    }
}


else if(userInput2>userInput3){
    if (userInput2>userInput1) {
        console.log(`${userInput2} is greater than ${userInput1} and ${userInput3}`);
    }
    else if(userInput1>userInput2){
        console.log(`${userInput1} is greater than ${userInput2} and ${userInput3}`);
    }
    else if(userInput1==userInput2){
        console.log(`${userInput1} and ${userInput2} are equal and greater than ${userInput3}`);
    }
    else{
        console.log("Invalid Inputs");
        
    }
}


else if(userInput2>userInput1){
    if (userInput2>userInput3) {
        console.log(`${userInput2} is greater than ${userInput1} and ${userInput3}`);
    }
    else if(userInput3>userInput2){
        console.log(`${userInput3} is greater than ${userInput1} and ${userInput2}`);
    }
    else if(userInput2==userInput3){
        console.log(`${userInput2} and ${userInput3} are equal and greater than ${userInput1}`);
    }
    else{
        console.log("Invalid Inputs");
        
    }
}


else if(userInput3>userInput1){
    if (userInput3>userInput2) {
        console.log(`${userInput3} is greater than ${userInput1} and ${userInput2}`);
    }
    else if(userInput2>userInput3){
        console.log(`${userInput2} is greater than ${userInput1} and ${userInput3}`);
    }
    else if(userInput2==userInput3){
        console.log(`${userInput2} and ${userInput3} are equal and greater than ${userInput1}`);
    }
    else{
        console.log("Invalid Inputs");
        
    }
}


else if(userInput3>userInput2){
    if (userInput3>userInput1) {
        console.log(`${userInput3} is greater than ${userInput1} and ${userInput2}`);
    }
    else if(userInput1>userInput3){
        console.log(`${userInput1} is greater than ${userInput2} and ${userInput3}`);
    }
    else if(userInput1==userInput3){
        console.log(`${userInput1} and ${userInput3} are equal and greater than ${userInput2}`);
    }
    else{
        console.log("Invalid Inputs");
        
    }
}


else if(userInput1==userInput2 && userInput2==userInput3){
    console.log("All are equal Numbers.");
}


else{
    console.log("Invalid Inputs");
    
}