const process = require('process');
const request = require('request');
const fs = require('fs');

request(process.argv[2], (error, response, body) => {
  if (error === null) {
    fs.writeFile(process.argv[3], body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`);
    });
  } else {
    console.log(error);
  }
});
