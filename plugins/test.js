const {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
  Qibla,
} = require('adhan')
const moment = require('moment-timezone')
let handler = async function (m, { text, usedPrefix, command, args }) {
  
if (!text) throw 'Please insert number sender'
let num = args[0]
setInterval(() => {
const time = moment.tz('Asia/Taipei').format('HH:mm:ss');
const coordinates = new Coordinates(23.933861,120.666485);
const params = CalculationMethod.MoonsightingCommittee();
const date = new Date()
const prayerTimes = new PrayerTimes(coordinates, date, params);
const res = moment(prayerTimes.fajr).tz('Asia/Taipei').format('HH:mm:ss');
const res1 = moment(prayerTimes.dhuhr).tz('Asia/Taipei').format('HH:mm:ss');
const res2 = moment(prayerTimes.asr).tz('Asia/Taipei').format('HH:mm:ss');
const res3 = moment(prayerTimes.maghrib).tz('Asia/Taipei').format('HH:mm:ss');
const res4 = moment(prayerTimes.isha).tz('Asia/Taipei').format('HH:mm:ss');

var capt = `🌄 Subuh : ${res}
☀️ Dhuhur : ${res1}
🌥️ Ashar : ${res2}
🌅 Maghrib : ${res3}
🌙 Isya : ${res4}` 

if (time == res) {
  conn.sendMessage(num + '@s.whatsapp.net', {text: `Time for prayer Subuh!`})
  conn.updateProfileStatus(capt + '  Times taipei')
} else if (time == res1) {
  conn.sendMessage(num + '@s.whatsapp.net', {text: `Time for prayer Dzuhur!`})
} else if (time == res2) {
  conn.sendMessage(num + '@s.whatsapp.net', {text: `Time for prayer Ashar!`})
} else if (time == res3) {
  conn.sendMessage(num + '@s.whatsapp.net', {text: `Time for prayer Maghrib!`})
} else if (time == res4) {
  conn.sendMessage(num + '@s.whatsapp.net', {text: `Time for prayer Isya!`})
} else if (time == '08:00:00') {
  conn.sendMessage(num + '@s.whatsapp.net', {text: capt})
}
console.log('Prayertime is running...')
}, 1000)
m.reply('Succes sender to ' + num)
}

handler.command = /^sholat$/i
handler.owner = true

module.exports = handler