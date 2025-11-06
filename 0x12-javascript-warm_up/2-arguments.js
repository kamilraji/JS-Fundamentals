const count = process.argv.length - 2;

if (count === 0) {
  console.log("No argument");
} else if (count === 1) {
  console.log("One argument");
} else {
  console.log("Arguments found");
}