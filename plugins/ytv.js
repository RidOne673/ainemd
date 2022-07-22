let limit = 30
const { ytv } = require('../lib/y2mate')
const util = require('util')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args[0]) throw `Example : .ytmp4 https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
if (!isUrl(m.text)) throw 'Please enter the YouTube link'
let quality = args[1] ? args[1] : '360p'
try {
let media = await ytv(args[0], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
conn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(m.text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}\n\n${await shortlink(media.dl_link)}` }, { quoted: m })
} catch {
  m.reply('Wrong URLs')
}
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.fail = null
handler.exp = 0
handler.limit = false 

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}

function isUrl(url) {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}