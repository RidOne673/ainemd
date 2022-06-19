let fs = require('fs')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw 'Usage:\n .getfile dir/namefile mimetype namefile\n\n example:\n.getfile plugins/menu.js js menu.js'
    m.reply('Tunggu Sebentar, Proses Getting File ' + args[2])
    let sesi = await fs.readFileSync(args[0])
    conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/' + args[1], fileName: args[2] }, { quoted: m })
}
handler.help = ['getfile']
handler.tags = ['owner']
handler.command = /^(getfile|gf)$/i

handler.owner = true

module.exports = handler