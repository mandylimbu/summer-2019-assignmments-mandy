//counting the amount of letters in a string.
var string = "Hello there, how are you doing?";
var lcount = 0;
/*var stringLength = string.length;
console.log(stringlength);*/
for(var i = 0; i < string.length + 1; i++) {
    console.log("character: " + string[i]);
//checking individual letter l in our text,put if statements inside
if (string[i] == "l" || string[i] == "L" ){
    lcount = lcount + 1;
}
    
}
console.log("The string" + " has " + lcount + "l'l in it.")

