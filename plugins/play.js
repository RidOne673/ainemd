let limit = 30
let yts = require('yt-search')
const { isUrl } = require('./../lib/function')
let handler = async (m, { conn, command, usedPrefix, text, isPrems, isOwner }) => {
if (!text) throw `Example : .${command} story wa anime`
if (isUrl(text)) throw 'Unsuported URLs\n\nPlease insert title!'
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * 1)]
let buttons = [
{buttonId: `.ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `.ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: conn.user.name,
buttons: buttons,
headerType: 4
}
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
setTimeout (async() => {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: msg.key.id, participant: msg.key.remoteJid } })
}, 10000)
}
handler.help = ['play'].map(v => v + ' <search>')
handler.tags = ['downloader']
handler.command = /^play?$/i
handler.premium = false
handler.group = false

handler.exp = 0
handler.limit = false

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}