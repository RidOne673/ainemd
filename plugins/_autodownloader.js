let { tiktokdlv3 } = require("@bochilteam/scraper")
let handler = m => m

handler.before = async function (m, { conn, text }) {
  if (m.text.includes("tiktok.com")) {
  let url = await findUrl(m.text)
  url.forEach(async(link, i) => {
    setTimeout(async() => {
  let buff = await tiktokdlv3(link)
  await conn.sendMessage(m.chat, {video: { url: buff.video.no_watermark}}, {quoted: m})
   
    }, 1000 * i)
   })
  }
}

module.exports = handler

async function findUrl(message) {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.match(urlRegex)
}