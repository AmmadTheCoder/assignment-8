// Write a js program to check whether a year  is a leap year or not.
var userInput=+prompt("Enter a year (like 2024).");
if (userInput>0) {
    if(userInput%4==0){
        console.log(`${userInput} is a leap year.`);
    }
    else{
        console.log(`${userInput} is not a leap year.`);
    }
}
else if (userInput<=0) {
    console.log("Years cannot be zero or negative.");
}
else {
    console.log("Invalid Inputs.");
}
