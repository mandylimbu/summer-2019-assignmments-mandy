//conditional logic

if (1) {
console.log ("hello")
}

//0 undefined null
// ==, !=, &&, ||, <=, <, >, !
//equal to: ==
if ( 100 == "100") {
    console.log("double equal")
}
//Not Equal too: !=
if ( 100 !== 99 ) {
    console.log( "Not Equal")
}
//both true: &&
if ( true && true) {

    console.log(" Both True");
}
// or: ||
if ( false || false) {
    console.log("Either is True");
}
//! Not Booleans

// Math Lesser or Equal <= <
if (100 <= 100) {

    console.log("Lesser Than");
}
if (100<100) {
    console.log("Leseer than");
}

// Mat Greater Than or Equal>=, >

if ( 100 >= 50 ){
    console.log("Greater Than or Equal");
}
if( 100>100) {
    console.log("Greater Than");
}

if ((!false && 100 == 100) && false == false) {
    console.log("I run")
}
//practice
if (true) {

    var var1 = 100;
    if (false) {
        var var2 = 200
    }
    var var3=300;
        if (true) {
            var var4 = 400;

            if (false){
              var var5 = 500;
            }
        }
   }
