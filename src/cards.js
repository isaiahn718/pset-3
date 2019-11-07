const readlineSync = require("readline-sync");

const card = readlineSync.question("\nEnter a playing card: ");
let cardName = card.toLowerCase();

if (cardName == "as") {
  console.log("\nAce of Spades.");
}
else if (cardName == "ac") {
  console.log("\nAce of Clubs.");
}
else if (cardName == "ah") {
  console.log("\nAce of Hearts.");
}
else if (cardName == "kd") {
  console.log("\nKing of Diamonds.");
}
else if (cardName == "ks") {
  console.log("\nKing of Spades.");
}
else if (cardName == "kh") {
  console.log("\nKing of Hearts.");
}
else if (cardName == "kc") {
  console.log("\nKing of Clubs.");
}
else if (cardName == "qd") {
  console.log("\nQueen of Diamonds.");
}
else if (cardName == "qs") {
  console.log("\nQueen of Spades.");
}
else if (cardName == "qh") {
  console.log("\nQueen of Hearts");
}
else if (cardName == "qc") {
  console.log("\nQueen of Clubs.");
}
else if (cardName == "js") {
  console.log("\nJack of Spades.");
}
else if (cardName == "jd") {
  console.log("\nJack of Diamonds.");
}
else if (cardName == "jh") {
  console.log("\nJack of Hearts.");
}
else if (cardName == "jc") {
  console.log("\nJack of Clubs.");
}
else if (cardName == "ts") {
  console.log("\nTen of Spades.");
}
else if (cardName == "td") {
  console.log("\nTen of Diamonds.");
}
else if (cardName == "th") {
  console.log("\nTen of Hearts.");
}
else if (cardName == "tc") {
  console.log("\nTen of Clubs.");
}
else if (cardName == "9s") {
  console.log("\nNine of Spades.");
}
else if (cardName == "9s") {
  console.log("\nNine of Diamonds.");
}
else if (cardName == "9h") {
  console.log("\nNine of Hearts.");
}
else if (cardName == "9c") {
  console.log("\nNine of Clubs.");
}
else if (cardName == "8s") {
  console.log("\nEight of Spades.");
}
else if (cardName == "8d") {
  console.log("\nEight of Diamonds.");
}
else if (cardName == "8h") {
  console.log("\nEight of Hearts.");
}
else if (cardName == "8c") {
  console.log("\nEight of Clubs.");
}
else if (cardName == "7s") {
  console.log("\nSeven of Spades.");
}
else if (cardName == "7d") {
  console.log("\nSeven of Diamonds.");
}
else if (cardName == "7h") {
  console.log("\nSeven of Hearts.");
}
else if (cardName == "7c") {
  console.log("\nSeven of Clubs.");
}
else if (cardName == "6s") {
  console.log("\nSix of Spades.");
}
else if (cardName == "6d") {
  console.log("\nSix of Diamonds.");
}
else if (cardName == "6h") {
  console.log("\nSix of Hearts.");
}
else if (cardName == "6c") {
  console.log("\nSix of Clubs.");
}
else if (cardName == "5s") {
  console.log("\nFive of Spades.");
}
else if (cardName == "5d") {
  console.log("\nFive of Diamonds.");
}
else if (cardName == "5h") {
  console.log("\nFive of Hearts.");
}
else if (cardName == "5c") {
  console.log("\nFive of Clubs.");
}
else if (cardName == "4s") {
  console.log("\nFour of Spades.");
}
else if (cardName == "4d") {
  console.log("\nFour of Diamonds.");
}
else if (cardName == "4h") {
  console.log("\nFour of Hearts.");
}
else if (cardName == "4c") {
  console.log("\nFour of Clubs.");
}
else if (cardName == "3s") {
  console.log("\nThree of Spades.");
}
else if (cardName == "3d") {
  console.log("\nThree of Diamonds.");
}
else if (cardName == "3h") {
  console.log("\nThree of Hearts.");
}
else if (cardName == "3c") {
  console.log("\nThree of Clubs.");
}
else if (cardName == "2s") {
  console.log("\nTwo of Spades.");
}
else if (cardName == "2d") {
  console.log("\nTwo of Diamonds.");
}
else if (cardName == "2h") {
  console.log("\nTwo of Hearts.");
}
else if (cardName == "2c") {
  console.log("\nTwo of Clubs.");
}
else {
  console.log("\nInvalid");
}
