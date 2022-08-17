let { tiktokdlv3 } = require("@bochilteam/scraper")
let handler = async (m, { conn, args, usedPrefix, command }) => {
  
  if (!args[0]) throw "Plase insert a tiktok url"
  if (!args[0].includes("tiktok.com")) throw "Vailed urls!"
  let anu = await tiktokdlv3(args[0])
  m.reply("Wait a minutes....")
   await conn.sendMessage(m.chat, {video: { url: anu.video.no_watermark}}, {quoted: m})
}

handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktokdl|tt|tik)$/i
handler.limit = false
handler.group = false

module.exports = handler