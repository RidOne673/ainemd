let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  
  if (!args[0]) throw "Plase insert a tiktok url"
  if (!args[0].includes("tiktok.com")) throw "Vailed urls!"
  let tt = await fetch(`https://api-xcoders.xyz/api/download/tiktok?url=${args[0]}&apikey=megalodon`)
  let anu = await tt.json()
  m.reply("Wait a minutes....")
   await conn.sendMessage(m.chat, {video: { url: anu.result.nowatermark}}, {quoted: m})
}

handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktokdl|tt|tik)$/i
handler.limit = false
handler.group = false

module.exports = handler