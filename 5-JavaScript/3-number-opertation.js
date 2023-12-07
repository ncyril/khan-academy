//Arithmetic Calculations

let a = 12;
let b = 5;

//Addition
function addition(num1, num2) {
    return num1 + num2;
}

console.log("This is the sume of a and b:", addition(a, b));

//Subtraction
function subtraction(num1, num2) {
    return num1 - num2;
}

console.log("This is the sume of a and b:", subtraction(a, b));

//Multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

console.log("This is the sume of a and b:", multiply(a, b));

//Division
function divide(num1, num2) {
    return num1 / num2;
}

console.log("This is the sume of a and b:", divide(a, b));

//Any number divided by 0
function divideByZero(num1) {
    return num1 / 0;
}

console.log("Results after dividing by 0:", divideByZero(a));


//Subtract the variable with a larger number results
function subtractLarger(num1) {
    return num1 / num1 - 20;
}

console.log("Results after subtracting by 20:", subtractLarger(a));

//Modulo
function modulo(num1, num2) {
    return num1 % num2;
}

console.log("The remainder of", a, "and", b, "is:", modulo(a, b));