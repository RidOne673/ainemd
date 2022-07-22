const xvideos = require('@rodrigogs/xvideos');
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (args.legth < 1) throw 'please insert url'
  if (!text.includes('xvideos')) throw 'please insert valid url'
  
  let anu = await xvideos.videos.details({ url: args[0]});
  let capt = `*Title* : ${anu.title}\n\n\n************************************`
  conn.sendMessage(m.chat, {video: {url: anu.files.low}, caption: capt}, {quoted: m})
}
handler.command = /^(porn|xvid)$/i
handler.limit = true
handler.group = false

module.exports = handler