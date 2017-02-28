const fs = require('fs');
fs.writeFile('hello.txt','Nodeはじめました。\n',
function(err) {

  if(err) return console.log("Error!")
});
