const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const ha= 100;
const la= 90;
const hb= 89;
const lb= 80;
const hc= 79;
const lc= 70;
const hd= 69;
const ld= 60;
const hf= 59;
const lf= 0;

if (grade > 100 || grade < 0) {

      console.log("\nInvalid.\n")

} else if (grade >= la && grade <= ha) {

      console.log("\nYou received an A.\n")

} else if (grade >= lb && grade < la) {

      console.log("\nYou received a B.\n")

} else if (grade >= lc && grade < lb) {

      console.log("\nYou received a C.\n")

} else if (grade >= ld && grade < lc) {

      console.log("\nYou received a D.\n")

} else if (grade >= lf && grade < ld) {

      console.log("\nYou received an F.\n")

} else {

      console.log("\nInvalid.\n")

}
