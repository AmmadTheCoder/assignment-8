//  Write a js program to input month number and print number of days in that month.
var userInput=prompt("Enter a month number.");
switch (userInput) {
    case "1":{
        console.log("January")
    break;
    }
    case "2":{
        console.log("Feburary");  
    break;
    }
    case "3":{
        console.log("March");
        break;
    }
    case "4":{
        console.log("April");
        break;
    }
    case "5":{
        console.log("May");
        break;
    }
        case "6":{
        console.log("June");
        break;
    }
        case "7":{
        console.log("July");
        break;
    }
    case "8":{
        console.log("August");
        break;
    }
    case "9":{
        console.log("September");
        break;
    }
    case "10":{
        console.log("October");
        break;
    }
        case "11":{
        console.log("November");
        break;
    }
        case "12":{
        console.log("December");
        break;
    }

    default:{
        console.log("Invalid Input");
        break;
    }
}