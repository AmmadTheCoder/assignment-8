// Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// To determine if a triangle is valid (i.e., whether it can exist with given side lengths), we can use the triangle inequality theorem. This theorem states that for any valid triangle with three sides: The sum of the lengths of any two sides must be greater than the length of the third side.
var a=+ prompt("Enter the length of 1st side.");
var b=+ prompt("Enter the length of 2nd side.");
var c=+ prompt("Enter the length of 3rd side.");
if(a>0 && b>0 && c>0){
    if (a + b >c && a+c>b && b+c>a) {
        console.log("By triangle inequality theorom, triangle is valid.");
    }
    else {
        console.log("Triangle is not valid.");
    }
}
else {
    console.log("Triangle is not valid.");
}