var randomNumber = process.argv[2];

var randomNumber = Math.random() *4;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);


var vehicle;

if (randomNumber == 0) {
    vehicle = "bus";
} else if (randomNumber == 1) {
    vehicle = "car";
} else if (randomNumber == 2) {
    vehicle = "carpet";
} else if (randomNumber == 3) {
    vehicle = ""
}



var accident = "";
var tardinessMinutes = 0; //minutes

console.log("Value of vehicle:", vehicle);
console.log("Value of accident:", accident);
//THIS DECIDES WHAT THE OUTPUT IS BASED ON THE VARIABLE VEHICLE.
if (vehicle == "bus") {

    console.log("John Takes the bus.");
} else if (vehicle == "car") {
    console.log("John takes his car.");
} else if (vehicle == "carpet") {
    console.log("John takes his magic carpet.");
} else {
    console.log("John does not know what to commute on.")
}

if (accident== "tire flat") {
    if (vehicle == "car"){
        console.log("john had a flat,but luckily he had a spare tire,he is a little late to work.");

    } else if (vehicle == "bus"){
        console.log("John bus tire popped off and left john stranded, the next bus came 3 hours later.");

    }
} else {
    console.log("John's morning was the usual.");
}

if (tardinessMinutes >= 15) {
    console.log("John arrived" + tardinessMinutes +  "minutes late to work, He was fired on the spot.");
} else if ( tardinessMinutes > 0 && tardinessMinutes < 15) {
    console.log("John's arrived a little late, he dodged his boss's fury.");
} else {
    console.log("John arrived on time, thanks to a eventless commute.")
}


/*you can do this
"100" + "100"
"hello" + "world"
"hello" + "100"*/