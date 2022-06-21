let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return

let regs = /(aku cinta kamu)/i
    let isCintaKamu = regs.exec(m.text)
    let cinmu = [
'❤️',
'🥰',
'😍'
]
let cintakamuh = cinmu[Math.floor(Math.random() * cinmu.length)]
    if (isCintaKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${cintakamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${cintakamuh}`, m)
    }, 1000)
    }

    let regc = /(aku sayang kamu)/i
    let isSayangKamu = regc.exec(m.text)
    let saymu = [
'❤️',
'🥰',
'😍'
]
let sayangkamuh = saymu[Math.floor(Math.random() * saymu.length)]
    if (isSayangKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sayangkamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${sayangkamuh}`, m)
    }, 1000)
    }
    
    let regl = /(I love you|love you)/i
    let isLoveYou = regl.exec(m.text)
    let lovou = [
'❤️',
'🥰',
'😍'
]
let loveyou = lovou[Math.floor(Math.random() * lovou.length)]
    if (isLoveYou && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/PTT-20211218-WA0243.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${loveyou}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }
    
    let ass = /(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)/i
    let isAss = ass.exec(m.text)
    let assal = [
'🥰',
'😇',
'😅'
]
let assl = assal[Math.floor(Math.random() * assal.length)]
    if (isAss && !m.fromMe) {
    let assalamualaikum = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.46.15.opus')
    conn.sendMessage(m.chat, {
        react: {
          text: `${assl}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
    }, 1000)
    }
    
  let thx = /(terimakasih|makasi|maaci|terima kasih|maciw|mksi)/i
    let isThx = thx.exec(m.text)
    let maciw = [
'🥰',
'🫶🏻',
'🫰🏻',
'🫡'
]
let marec = maciw[Math.floor(Math.random() * maciw.length)]
    if (isThx && !m.fromMe) {
    let maaci = fs.readFileSync('./mp3/sama.m4a')
    conn.sendMessage(m.chat, {
        react: {
          text: `${marec}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, maaci, '', '', m, true)
    }, 1000)
    }

}

handler.limit = false
module.exports = handler