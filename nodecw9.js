const fs = require("fs");

const content = "Books are a uniquely portable magic.";
const fileName = "book.txt";

fs.writeFile(fileName, content, function (err) {
  if (err) {
    console.error("Error while writing the file:", err);
    return;
  }
  console.log("Writing completed successfully.");

  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) {
      console.error("Error while reading the file:", err);
      return;
    }
    console.log("Reading completed successfully.");
    console.log("File content:");
    console.log(data);
  });
});