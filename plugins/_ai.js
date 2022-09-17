const fetch = require('node-fetch')
const translate = require('translate-google-api')

let handler = m => m
handler.before = async function (m, { conn, text }) {
 let q = m.quoted ? m.quoted : m
 let mime = (q.msg || q).mimetype
 if (/webp|image|video/g.test(mime)) return
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys)  return
/*let trns = await translate(text, {
            tld: 'cn',
            to: 'en',
        })*/
let anu = await fetch(`http://api.brainshop.ai/get?bid=166135&key=HutlT9ZgXWrPpz3o&uid=uid&msg=${text}`)
let last = await anu.json()
let res = await translate(last.cnt, {
            tld: 'cn',
            to: 'id',
        })
 m.reply(res[0])
}
module.exports = handler