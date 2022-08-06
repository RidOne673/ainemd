let handler = async (m, { command, text, args }) => {
if (args.length < 1) throw 'insert date and event\n\nEx : \n.hitunghari mm/dd/yyyy event'
if (!args[1]) args[1] = 'apa?'
setInterval(() => {
countDownDate = new Date(`${args[0]},00:00:00`).getTime();
now = new Date().getTime();
distance = countDownDate - now;
days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (distance < 0) {
times = ("Terlewat");
} else {
times = (days + " Hari Lagi Menuju " + text.slice(args[0].length));
}

m.reply(times)
}, 24 * 60 * 60 * 1000)
}
handler.command = /^hhi$/i
handler.limit = false

module.exports = handler