const fs = require("fs");

// Asynchronous file read with a callback
// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//   } else {
//     console.log("File contents:", data);
//   }
// });
// console.log("This is a asynchronous");

// Synchronous file read
const data = fs.readFileSync("file.txt", "utf8");
console.log(data.toString());

console.log("This is a synchronous");

fs.writeFile("file2.txt", "This is a new file creating by fsmodule", () => {
  console.log("Writen to the file");
});
