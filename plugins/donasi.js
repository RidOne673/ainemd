let handler = async m => m.reply(`
╭─「 Donasi  」
│ •  [0857-0617-4510]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler