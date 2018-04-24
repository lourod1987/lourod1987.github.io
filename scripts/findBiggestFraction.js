function findBiggestFraction(a, b) {
    console.log("The function is running!");
    var result;
    
    //ternary operator
//    a > b ? result["firstFraction ", a] : result["secondFraction ", b];
    
    if (a > b) {
        result = ["firstFraction ",  a];
    } else {
        result = ["secondFraction ", b];
    }
    
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;


var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + "with a value of " + fractionResult[1] + " is the biggest!");