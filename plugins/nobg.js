const imgbb = require('imgbb-uploader')
const fs = require('fs-extra')

let handler = async (m, { conn, args  , usedPrefix, command })=>{
 const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''

  if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
if (res.image.extension === "png") throw 'Maaf gampar berformat .png tidak dapat dihapus background\nMohon gunakan gambar berformat .jpg'
conn.sendMessage(m.chat, {image: {url: `https://api-xcoders.xyz/api/maker/rmbg?url=${res.display_url}&apikey=megalodon`}}, {quoted: m})
} else { 
  m.reply(`Send a picture with caption .${command} !`)
}
  
}

handler.help = ['nobg']
handler.tags = ['tools']
handler.command = /^nobg|removebg|removebackground$/i
module.exports = handler