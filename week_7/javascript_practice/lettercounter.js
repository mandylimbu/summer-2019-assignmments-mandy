/*//counting the amount of letters in a string.
var string = "Nepal (Nepali: नेपाल, ISO:Nēpāl), officially Federal Democratic Republic of Nepal,[11] is a landlocked country in South Asia. It is located mainly in the Himalayas, but also includes parts of the Indo-Gangetic Plain. With an estimated population of 26.4 million, it is 48th largest country by population and 93rd largest country by area.[7][12] It borders China in the north and India in the south, east and west while Bangladesh is located within only 27 km (17 mi) of its southeastern tip and Bhutan is separated from it by the Indian state of Sikkim. Nepal has a diverse geography, including fertile plains,[13] subalpine forested hills, and eight of the world's ten tallest mountains, including Mount Everest, the highest point on Earth. Kathmandu is the capital and the largest city. Nepal is a multiethnic country with Nepali as the official language." ;
var lcount = 0;
/*var stringLength = string.length;
console.log(stringlength);*/
//for(var i = 0; i < string.length + 1; i++) {
 //   console.log("character: " + string[i]);
//checking individual letter l in our text,put if statements inside
//if (string[i] == "l" || string[i] == "L" ){
 //   lcount = lcount + 1;
//}
    
//}
//console.log("The string" + " has " + lcount + "l's in it.");


function letterCounter(string, lowercase) {
    var letterCounter = 0;
    
    var uppercase = lowercase, touppercase();
    for (var i = 0; i < string.length; i++) {

        if(string[i] == lowercase || string[i] == uppercase) {
            letterCounter++;
        }
    }

console.log(" We found " + letterCounter + " " + lowercase + " letters inside the text.");

letterCounter("Hello world.", "o" , "0");
letterCounter("Goodbye world.", "9" , "G");
}
