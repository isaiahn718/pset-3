const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const QUARTER_VALUE = 0.25;
const DIME_VALUE = 0.1;
const NICKEL_VALUE = 0.05

if (Number.isNaN(amount)) {
  console.log("Invalid")
} else if (amount < MIN || amount > MAX) {
  console.log("Invalid")
