let { bioskopNow } = require('@bochilteam/scraper')

let handler = async (m, { conn }) => {
  let anu = await bioskopNow()
  anu.forEach(async(data, i) => {
    setTimeout(async() => {
      link = await shortlink(data.url)
      txt = `• *Title* : ${data.title}
• *Url* : ${await shortlink(data.url)}
• *Genre* : ${data.genre}
• *Duration* : ${data.duration}
• *Playing At* : ${data.playingAt}`
conn.sendMessage(m.chat, {image: {url: data.img}, caption: txt}, {quoted: m})
    }, 1000* i)
  })
  
}

handler.help = ['bisokopnow']
handler.tags = ['internet']
handler.command = /^bioskop|bioskopnow$/i
handler.limit = false

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}