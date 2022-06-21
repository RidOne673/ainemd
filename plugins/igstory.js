let { instagramStory } = require('@bochilteam/scraper')

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${usedPrefix + command} alinursetiawan24`
  if (text.includes("https://")) throw 'Masukka username goblok..!!!'
  let res = await instagramStory(text)
    await m.reply('Sedang di proses..')
    for (let { url, type } of res.results) {
      await conn.delay(1500)
      conn.sendFile(m.chat, url, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '', m)
    }
}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
handler.limit = true
handler.group = false 

module.exports = handler