const readlineSync = require("readline-sync");

const integer= Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(integer)) {

   console.log("\nInvalid.\n")

} else if (integer < Number.MIN_SAFE_INTEGER || integer > Number.MAX_SAFE_INTEGER) {

   console.log("\nInvalid.\n")

} else if (integer % 2 == 0) {

   console.log("\nEven.\n")

} else if (integer % 2 == 1 || integer % 2 == (-1)) {

   console.log("\nOdd.\n")

} else {

   console.log("\nInvalid.\n")

}
