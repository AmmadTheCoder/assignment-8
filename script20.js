// Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var basicSalary=+prompt("Enter the basic Salary.");
if(basicSalary>0 && basicSalary<=10000){
    var houseRentAllowance=basicSalary*20/100;
    var dearnessAllowance=basicSalary*80/100;
    var grossSalary=basicSalary+houseRentAllowance+dearnessAllowance;
    console.log(`The Gross Salary is ${grossSalary}.`);
}
else if(basicSalary>10000 && basicSalary<=20000){
    var houseRentAllowance=basicSalary*25/100;
    var dearnessAllowance=basicSalary*90/100;
    var grossSalary=basicSalary+houseRentAllowance+dearnessAllowance;
    console.log(`The Gross Salary is ${grossSalary}.`);
}
else if(basicSalary>20000){
    var houseRentAllowance=basicSalary*30/100;
    var dearnessAllowance=basicSalary*95/100;
    var grossSalary=basicSalary+houseRentAllowance+dearnessAllowance;
    console.log(`The Gross Salary is ${grossSalary}.`);
}
else{
    console.log("Invalid Input");
    
}