//loops-repeat code.

/* infinite loops

while (true) {

}*/

/*var counter = 0;

while (counter == 0) {
//if equals to 0 than run or else dont run.it runs here
    counter = counter + 1;
    //now counter value =1, which is not equals to 0 so will run once ony.
}*/
/*
var counter = 5;

while (counter <= 10) {
    console.log("This is loop number " + counter + ".");

    counter = counter + 1;
    //if we increase the nuber with 2,3,4...the number of loop reduce. counter ++ is shorthand for 1
}
*/
//loop running from 0 to-9 and while loop.
var counter = 0;
while (counter >= -9) {
console.log("while Loop: This is loop number " + counter + ".");
counter = counter - 1;
}
//for loop
for(var counter = 0; counter <= 10; counter = counter + 1) {
    console.log("For Loop: This is loop number " + counter + ".");
}
//shorter for loop,,replacing counter with i.
for(var i = 0; i <= 10; i = i + 1) {
    console.log(i);
}

//counting the amount of letters in a string.
var string = "Hello there, how are you doing?";
var stringLength = string.Length;
console.log(stringLength);
for(var i = 0; i < string ; i++) {

    
}


