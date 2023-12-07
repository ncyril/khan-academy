// Initialize the variable to store the score entered by the user
let score;

// Loop to continually prompt the user for a valid score input
while (true) {
    // Prompt the user to enter the score and converts the input to an integer
    let input = prompt("Enter the score: ");
    score = parseInt(input);

    // Check if the input is a valid number
    if (!isNaN(score)) { 
        break; // Exit the loop if a valid number is entered
    } else {
        console.log("Please enter a valid number for the score.");
    }
}

// Grading logic based on the entered score
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