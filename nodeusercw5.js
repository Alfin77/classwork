var fs = require('fs');

fs.writeFile('user.txt', 'Welcome John', function (err) {
  if (err) throw err;
  console.log('File Saved!');

  fs.readFile('user.txt', 'utf8', function (err, data) {
    if (err) throw err;

    checkUser(data);
  });
});

function checkUser(message) {

  var parts = message.split(" ");  
  var name = parts[1];             

  if (name === "John") {
    console.log("Valid User");
  } else {
    console.log("Unknown User");
  }
}