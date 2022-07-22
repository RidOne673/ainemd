let axios = require('axios')
let cheerio = require('cheerio')

let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("https://")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
    try {
    let res = await snapsave(args[0])
    await m.reply('Sedang di proses..')
    await conn.sendFile(m.chat, res.hd, res.hd, wm, m)
    } catch {
      m.reply('Invalid Url')
    }
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^f((b|acebook|)(dl|download)?(er)?(2)?)$/i
handler.limit = true
handler.group = false

module.exports = handler

async function snapsave(url) {
    try {
        var _0xc38e = [
            "",
            "split",
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/",
            "slice",
            "indexOf",
            "",
            "",
            ".",
            "pow",
            "reduce",
            "reverse",
            "0",
        ];

        function _0xe48c(d, e, f) {
            var g = _0xc38e[2][_0xc38e[1]](_0xc38e[0]);
            var h = g[_0xc38e[3]](0, e);
            var i = g[_0xc38e[3]](0, f);
            var j = d[_0xc38e[1]](_0xc38e[0])[_0xc38e[10]]()[_0xc38e[9]](function(a, b, c) {
                if (h[_0xc38e[4]](b) !== -1)
                    return (a += h[_0xc38e[4]](b) * Math[_0xc38e[8]](e, c));
            }, 0);
            var k = _0xc38e[0];
            while (j > 0) {
                k = i[j % f] + k;
                j = (j - (j % f)) / f;
            }
            return k || _0xc38e[11];
        }

        function decoder(h, u, n, t, e, r) {
            r = "";
            for (var i = 0, len = h.length; i < len; i++) {
                var s = "";
                while (h[i] !== n[e]) {
                    s += h[i];
                    i++;
                }
                for (var j = 0; j < n.length; j++) s = s.replace(new RegExp(n[j], "g"), j);
                r += String.fromCharCode(_0xe48c(s, e, 10) - t);
            }
            return decodeURIComponent(escape(r));
        }
        const { data } = await axios({
            method: 'POST',
            url: 'https://snapsave.app/action.php',
            data: `url=${encodeURIComponent(url)}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 12; SM-A127F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Mobile Safari/537.36',
                'Origin': 'https://snapsave.app',
                'Referer': 'https://snapsave.app/'

            }
        });
        const getData = /}\((.+?)\)\)/.exec(data)[1].replace(/"/g, '');
        const createArr = getData.split(',');
        const decodeScript = decoder(createArr[0], createArr[1], createArr[2], createArr[3], createArr[4], createArr[5]);
        const getDataScript = /innerHTML = "(.+?)"; parent/g.exec(decodeScript)[1].replace(/\\/g, '');
        const $ = cheerio.load(getDataScript);
        return {
            title: $("strong").text(),
            thumbnail: $("img").attr("src"),
            hd: $("a").eq(1).attr("href"),
            sd: $("a").eq(2).attr("href")
        };
    } catch (e) {
        throw e;
    }
}