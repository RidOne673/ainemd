let handler = async (m, { conn, text, usedPrefix, command }) => {
const gplay = require('google-play-scraper')
//let txt = args.join` `
if(!text) return m.reply('Text nya kak?')
    /*        let play = await hx.playstore(`${txt}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }*/
  let a = await gplay.search({
    term : text,
    num : 10
  })
let b = a.map((v, i) => `*${i + 1}. 「 PLAY STORE 」*\n📜 Title: _${v.title}_\n🧑‍💻 Developer: _${v.developer}_\n*🔗 Link:* ${v.url}`).join('\n❉─────────────────────❉\n')
  conn.sendMessage(m.chat, {image: {url: a[0].icon}, caption: b}, {quoted: m})
      //      conn.reply(store)
            }
handler.help = ['playstore']
handler.tags = ['internet']
handler.command = /^(playstore|ps)$/i
handler.limit = true
handler.group = false

module.exports = handler
