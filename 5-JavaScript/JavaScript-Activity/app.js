let score;

//While Loop is to catch people entering Strings!
while (true) {
    let input = prompt("Enter the score: ");
    score = parseInt(input);

    if (!isNaN(score)) { //IsNan = Is Not a number
        break; // Exit the loop if a valid number is entered
    } else {
        console.log("Please enter a valid number for the score.");
    }
}

if (score < 60) {
    console.log("You Recevied an F Grade");
} else if (score >= 60 && score < 70) {
    console.log("You Recevied an D Grade");
} else if (score >= 70 && score < 80) {
    console.log("You Recevied an C Grade");
} else if (score >= 80 && score < 90) {
    console.log("You Recevied an B Grade");
} else {
    console.log("You Recevied an A Grade");
}