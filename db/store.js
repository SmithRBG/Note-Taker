
// Node.js program to demonstrate the
// fs.writeFile() method
  
// Import the filesystem module
const fs = require('fs');
  
let data = "";
  
fs.writeFile("notes.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});

module.exports = fs.writeFile