const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
  
  if (!text) throw `Example : .${command} 😅+🤔`
  try {
let [emoji1, emoji2] = text.split`+`
let anuu = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
let anu = await anuu.json()
for (let res of anu.results) {
 let stiker = await sticker(null, res.url, global.packname, global.author)
if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
} catch (e) {
  m.reply('Conversion Failed')
}
}

handler.help = ['emojimix'].map(v => v + ' <emoji+emoji>')
handler.tags = ['sticker']
handler.command = /^(emojimix)$/i
handler.limit = true
handler.group = false

module.exports = handler