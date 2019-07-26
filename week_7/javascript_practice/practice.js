/*multi line*/
// single line comment




//console log function.
//console.log( "Hello World" );

//console.log( "goodbye world" );

//numbers, text, booleans,
//datatypes
//booleans
true;
false;

//numbers
1000;
999;
10;

//text
"This is a sentence";
'This is another sentence';

//variables
var mySpecialNumber = 100;

// calling: Get the value of the variable you are "calling"

var anothervariable = mySpecialNumber;

anothervariable = 600;

// assignment = value

mySpecialNumber;


console.log( mySpecialNumber );
console.log( "Before i updated another Variable", anothervariable );

anotherVariable = 1000;
console.log( "After i updated anotherVariable", anotherVariable );
console.log("value 1:", 600, "value 2:", 1000)
//datatypes



//Math operators
// + - / * %

var myNumber = 1000 + 500;
console.log(myNumber);

var newNumber = myNumber + 1000;

console.log( newNumber );
//The computer runs the suff on the right side of the equals sign first.
//newNumber = newNumber + myNumber;

var divided = 1000 / 200;

var multiplied = 500 * 10;

var subtraction = 10 - 1;

console.log( multiplied / subtraction );
var order = ( multiplied + subtraction ) /3;


var order = 1000 * 20 -10 / 3;
console.log("The value of order", order)

//if,else statement
// if ( ) { }

/*if ( false )   {
    
    console.log("I ran because this if statement allowed me to run");
    
    
    }*/
if ( true )   {
    
    console.log("I ran because this if statement allowed me to run");
    
    
    }
if ( false ) {
    
    console.log ( "it is raining!");
}
    
    if ( true ) {
        
        if ( false) {
            if ( true ) {
    
    console.log ("it is raining!");
            
        }
    }
}
 if (true) {
     console.log("This will run if true.");
 } else if (false) {
     console.log("This will run if false.");
     } else {
         console.log ("Nothing was true, so i will run instead.");
     }


// if
// else if
// (optionally) else

var isItRaining = true;
var isItSunny = false; 


if (isItRaining) {
    console.log("Make sure to take your umbrella!");
} else {
    console.log("Enjoy your day!");
}
    if (isItSunny) {
       console.log("Wear sunscreen!");
       }
//practice
var isItRaining = false;
var isItSunny = true; 


if (isItRaining) {
    console.log("Make sure to take your umbrella!");
} else {
    console.log("Enjoy your day!");
}
    if (isItSunny) {
       console.log("Wear sunscreen!");
       }
var isHungry = false;
var isThirsty = true;

if (isHungry) {
    console.log("Eat some food.");
} else {
    console.log("Watch Movie and sleep.");
} 
if (isThirsty){
    console.log("Drink some juice.");
} else {
    console.log("Drink some water.");
}
