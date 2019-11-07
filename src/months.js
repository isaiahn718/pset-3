const readlineSync = require("readline-sync");

const month = String(readlineSync.question("\nEnter a month: ")).toLowerCase();

if (month == "january" || month == "jan") {
      console.log("\n31 days.")

} else if (month == "february" || month == "feb") {
      console.log("\n28 or 29 days.")

} else if (month == "march" || month == "mar") {
      console.log("\n31 days.")

} else if (month == "april" || month == "apr") {
      console.log("\n30 days.")

} else if (month == "may") {
      console.log("\n31 days.")

} else if (month == "june" || month == "jun") {
      console.log("\n30 days.")

} else if (month == "july" || month == "jul") {
      console.log("\n31 days.")

} else if (month == "august" || month == "aug") {
      console.log("\n31 days.")

} else if (month == "september" || month == "sep") {
      console.log("\n30 days.")

} else if (month == "october" || month == "oct") {
      console.log("\n31 days.")

} else if (month == "november" || month == "nov") {
      console.log("\n30 days.")

} else if (month == "december" || month == "dec") {
      console.log("\n31 days.")

} else {
      console.log("\nInvalid.")
}
