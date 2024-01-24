const fs = require("fs");

// Reading a file - Asyn
fs.readFile("demofile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Reading a file-Syn

// try {
//   const data = fs.readFileSync("demofile.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
