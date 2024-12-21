// Write a js program to input angles of a triangle and check whether triangle is valid or not.
var angle1=+ prompt("Enter 1st angle.");
var angle2=+ prompt("Enter 2nd angle.");
var angle3=+ prompt("Enter 3rd angle.");
var sum=angle1+angle2+angle3;
if(sum==180 && angle1>0 && angle2>0 && angle3>0){
    console.log("triangle is valid.");
    
}
else{
    console.log("Triangle is not valid.");
    
}