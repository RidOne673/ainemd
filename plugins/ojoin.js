let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
let handler = async (m, { conn, text, isOwner, groupMetadata }) => {
  let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
let res = await conn.groupAcceptInvite(code)
m.reply(`Berhasil join grup ${res}}`)
}


handler.help = ['ojoin <chat.whatsapp.com>']
handler.tags = ['owner']
handler.command = /^ojoin$/i
handler.owner = true
module.exports = handler