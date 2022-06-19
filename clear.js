const { exec } = require('child_process');

function start() {
//Start
exec(`rm -rf tmp && mkdir tmp`, (err, stdout) => {
  if (err) console.log(err)
  console.log('tmp already cleaned')
  })
  
  //Set Interval 1 jam
setInterval(() => {
exec(`rm -rf tmp && mkdir tmp`, (err, stdout) => {
  if (err) console.log(err)
  console.log('tmp already cleaned')
  })
}, 60 * 60 * 1000);
}
start()