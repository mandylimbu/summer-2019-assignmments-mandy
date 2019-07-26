//console.log(process.argv);

//console.log( parseInt("123456789012") );

//storing values from the terminal into firstNumber and secondNumber.
var firstNumber = process.argv[2];
var secondNumber = process.argv[3];

//convert the strings for firstNumber/secondNumber to actual numbers.
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
//Define a function that takes two numbers and spits out a whole bunch of information about these two number to the console.
function mathify(number1, number2) {

    //test if both variables actually hold numbers.
    if(typeof number1 == "number" && typeof number2 == "number") {
var sum = number1 + number2;
var difference = number1 - number2;
var product = number1 * number2;
var quotient = number1 / number2;
// we are giving two aruements only.
//reports the result to console.
console.log("The sum of " + number1 + " and " + number2 + " is:",sum);
console.log("The difference of " + number1 + " and " + number2 + " is:", difference);
console.log("The product of " + number1 + " and " + number2 + " is:", product);
console.log("The quotient of " + number1 + " and " + number2 + " is:", quotient);
//if not numbers...
} else {
    //type out the errors.
    console.log("The value of number1 is not a number! try again.", "The datatype of number1 is" + typeof number1);
    console.log("The value of number1 is not a number! try again.", "The datatype of number2 is" + typeof number2);
} }
// calling the function.
mathify(firstNumber, secondNumber);


//mathify("string", 100);








