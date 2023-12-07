//Conditional Statement

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are NOT eligible to vote.");
}

//if, if-else,else

let temperature = 25;

if (temperature < 0) {
    console.log("It's Frrrreezing!!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It's cool!");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's warm!");
} else {
    console.log("It's global boiling.")
}

//Conditional: Switch Statement

let day = "Friday";

switch(day){
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Friday":
        console.log("It's the end of the week!");
        break;
    default:
        console.log("It's a regular day.");
        break;
}

