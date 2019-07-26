// takes in two strings, concatenates them and console logs the result.
function concatSentence(string1, string2) {


    
    console.log(string1 + string2);
}
concatSentence("s", "10.50");
concatSentence("100", "c");

function concatItself(string1, string2) {
    concatSentence(string1, string2);
    concatSentence(string1, string2);
}
concatItself("ra")("dar");


/* parameters and Arguments.