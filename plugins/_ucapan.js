const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH');

let handler = m => m

handler.before = async function (m, { conn, text, isOwner, prefix }) {
  
  let name = await conn.getName(m.sender)
  var budy = (typeof m.text == 'string' ? m.text : '')
  const ar = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
  
  switch (ar) {

case 'cok': {
m.reply('Piye cok?');
}
break

case 'suwun': case 'suwon': {
m.reply('Nggih');
}
break

case 'p': {
if (!m.isGroup) return m.reply(`Hay ${name}👋, Selamat datang di Octave bot\nKetik *${prefix}menu* untuk melihat semua fitur kami`);
if (isOwner) return m.reply('Salam yang bener sayang☺️');
m.reply('Salam sing bener cok!1!1');
}
break

case 'thank': case 'thanks': case 'tx': case 'tq': case 'thx': case 'thq': {
m.reply('You are wellcome dear');
}
break

case 'pagi': case 'pagii': case 'morning': case 'enjing': case 'isuk': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} juga sayang❤️`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} apaan, ini mah udah siang`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} apaan, ini mah udah sore`);
} else {
m.reply(`${ar} apaan, ini mah udah malam`);
};
}
break

case 'siang': case 'siangg': case 'siank': case 'ciank': case 'ciang': case 'awan': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} apaan, ini mah masih pagi`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} juga sayang❤️`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} apaan, ini mah udah sore`);
} else {
m.reply(`${ar} apaan, ini mah udah malem`);
};
}
break

case 'sore': case 'soree': case 'sonten': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} apaan, ini mah masih pagi`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} apaan, ini mah masih siang`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} juga sayang❤️`);
} else {
m.reply(`${ar} apaan, ini mah udah malem`);
};
}
break

case 'malem': case 'malam': case 'night': case 'wengi': case 'dalu': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} apaan, ini mah masih pagi`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} apaan, ini mah masih siang`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} apaan, ini mah masih sore`);
} else {
m.reply(`${ar} juga sayang❤️`);
};
}
break
};
  
}

module.exports = handler
