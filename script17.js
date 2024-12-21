// Write a js program to find all roots of a quadratic equation.
var a=+ prompt("(The general form of Quadratic equations is: ax^2 + bx + c = 0 ). Enter the value of a.");
var b=+ prompt("(The general form of Quadratic equations is: ax^2 + bx + c = 0 ). Enter the value of b.");
var c=+ prompt("(The general form of Quadratic equations is: ax^2 + bx + c = 0 ). Enter the value of c.");
var x=+ (-b + Math.sqrt(b**2-4*a*c))/(2*a);
var y=+ (-b - Math.sqrt(b**2-4*a*c))/(2*a);
if(b**2-4*a*c >0){
        console.log(`The roots are: ${x} and ${y}.`);
}

else if(b**2-4*a*c <0){
    console.log("The roots are Imaginary.");
}
else{
    console.log("Invallid Inputs.");
    
}