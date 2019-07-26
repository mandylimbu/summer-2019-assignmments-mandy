// Function syntax
/*function functionName() {

    //code that runs when the function is called.
    console.log("say something!");
    console.log("Wave your hands.")


functionName();
functionName();
functionName();

}*/

/*var somethingImportant = "Not really important";

//Defining a function.

function takeInfo(functionVariable) {

console.log(functionVariable);


}

//calling a function.
takeInfo("Hello");
takeInfo("Goodbye");*/
//Defining a function
function takeInfo(firstVariable, secondVariable) {

    var sentence = firstVariable + secondVariable + "!";
    return sentence;
    
}

//calling a function.
var results = takeInfo("Goodbye"," world");
console.log(takeInfo("Goodbye", " world"));
console.log(takeInfo("How", " are you"));
console.log(results)
var results2 = takeInfo("hello there", "goodbye", "friend!")

console.log(results2);

console.log("what's up!");
//Math.random();






    //calling a function
    takeInfo("Hello","Goodbye");