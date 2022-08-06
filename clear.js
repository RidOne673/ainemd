const fs = require('fs-extra');

function start() {
//Start
 fs.emptyDirSync('tmp')
 console.log('Dome cleaned')
  //Set Interval 1 jam
setInterval(() => {
fs.emptyDirSync('tmp')
console.log('Dome cleaned')
}, 5 * 60 * 60 * 1000);
}
start()