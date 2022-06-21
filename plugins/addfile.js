let handler = async (m, { text, usedPrefix, command }) => {

    let q = m.quoted ? m.quoted : m
    if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!q) throw `reply file`
    let path = `${text}`
    file =  await q.download()
    await require('fs').writeFileSync(path, file)

    m.reply(`Saved ${path} to file!`)
}

handler.help = ['addfile', 'af'].map(v => v + ' <path>')
handler.tags = ['owner']
handler.command = ['addfile', 'af']

handler.owner = true
module.exports = handler
