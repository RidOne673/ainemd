const moment = require('moment-timezone')

let handler = async (m, { command, text, args }) => {
if (args.length < 1) throw 'insert date and event\n\nEx : \n.hitunghari mm/dd/yyyy event'
if (!args[1]) args[1] = 'apa?'
const tanggal = args[0]
setInterval(() => {
 let time = moment.tz('Asia/Taipei').format('HH:mm:ss');
countDownDate = new Date(`${tanggal},00:00:00`).getTime();
now = new Date().getTime();
distance = countDownDate - now;
days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (distance < 0) {
times = ("Terlewat");
} else {
times = (days + " Hari Lagi Menuju " + text.slice(args[0].length));
}
if (time === '06:00:00') {
m.reply(times)
} else {
  console.log(times + '\nHHInterval is running..')
}
}, 1000)
m.reply('Intervals is running...')
}
handler.command = /^interval$/i
handler.limit = false

module.exports = handler