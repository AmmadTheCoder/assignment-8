// Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
var a=+ prompt("Enter the length of 1st side.");
var b=+ prompt("Enter the length of 2nd side.");
var c=+ prompt("Enter the length of 3rd side.");
if(a>0 && b>0 && c>0 && a + b >c && a+c>b && b+c>a){
    if (a==b && b==c) {
        console.log("Triangle is equilateral.");
    }
    else if(a==b || b==c || a==c) {
        console.log("Triangle is isosceles.");
    }
    else{
        console.log("  Triangle is  scalene triangle.");
    }
}
else {
    console.log("Triangle is not valid.");
}