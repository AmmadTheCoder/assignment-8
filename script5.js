// Write a js program to check whether a number  is even or odd.
var userInput=+ prompt("Enter a Number.");
if(userInput<=0){
    if(userInput==0){
    console.log("Number is zero.");
    }
    else{
        console.log(`${userInput} is a negative number.`);
    }
}
else if(userInput>0){
    if(userInput%2==0){
    console.log(`${userInput} is a even number.`);
    }
    else{
        console.log(`${userInput} is a odd number.`);
    }
}
else{
    console.log("Invalid Inputs");   
}
