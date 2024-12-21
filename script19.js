// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F



var physicsMarks=+prompt("Enter the marks of Physics out of 100.");
var chemistryMarks=+prompt("Enter the marks of Chemistry out of 100.");
var biologyMarks=+prompt("Enter the marks of Biology out of 100.");
var mathMarks=+prompt("Enter the marks of Mathematics out of 100.");
var computerMarks=+prompt("Enter the marks of Computer out of 100.");
var totalObtainMarks=physicsMarks+chemistryMarks+biologyMarks+mathMarks+computerMarks;
var totalMarksPercentage=(totalObtainMarks/500)*100;
if(physicsMarks<=100&&physicsMarks>=0 && chemistryMarks<=100&&chemistryMarks>=0 && biologyMarks<=100&&biologyMarks>=0 && mathMarks<=100&&biologyMarks>=0 && computerMarks<=100&&computerMarks>=0){
    if (totalMarksPercentage>=90) {
        console.log(`Your marks is ${totalMarksPercentage}% and grade is A`);   
    }
    else if (totalMarksPercentage>=80) {
        console.log(`Your marks is ${totalMarksPercentage}% and grade is B`);
    }
    else if (totalMarksPercentage>=70) {
        console.log(`Your marks is ${totalMarksPercentage}% and grade is C`);
    }
    else if (totalMarksPercentage>=60) {
        console.log(`Your marks is ${totalMarksPercentage}% and grade is D`);
    }
    else if (totalMarksPercentage>=40) {
        console.log(`Your marks is ${totalMarksPercentage}% and grade is E`);
    }
    else {
        console.log(`Your marks is ${totalMarksPercentage}% and grade is F`);
    }
}
else{
    console.log("Invalid Inputs.");
    
}








if(physicsMarks<=100 && physicsMarks>=0){
    if (physicsMarks<40) {
        console.log("You are fail in physics."); 
    }
    else{
        console.log("You are Pass in physics."); 
    }
}
else{
    console.log("You entered invalid physics marks.");
}
 






if(chemistryMarks<=100 && chemistryMarks>=0){
    if (chemistryMarks<40) {
        console.log("You are fail in chemistry."); 
    }
    else{
        console.log("You are Pass in chemistry."); 
    }
}
else{
    console.log("You entered invalid chemistry marks.");
}





if(biologyMarks<=100 && biologyMarks>=0){
    if (biologyMarks<40) {
        console.log("You are fail in biology."); 
    }
    else{
        console.log("You are Pass in biology."); 
    }
}
else{
    console.log("You entered invalid biology marks.");
}







if(mathMarks<=100 && mathMarks>=0){
    if (mathMarks<40) {
        console.log("You are fail in mathematics."); 
    }
    else{
        console.log("You are Pass in mathematics."); 
    }
}
else{
    console.log("You entered invalid mathematics marks.");
}








if(computerMarks<=100 && computerMarks>=0){
    if (computerMarks<40) {
        console.log("You are fail in computer."); 
    }
    else{
        console.log("You are Pass in computer."); 
    }
}
else{
    console.log("You entered invalid computer marks.");
}

