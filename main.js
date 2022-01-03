const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { color } = require('./lib/color')
const {_wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, success, author, close } = require('./lib/functions');
const { Miminnya, SesionName, ownerNumber} = require('./setting.json')
require('./YanzBot.js')
const moment = require("moment-timezone")
const welcome = require('./database/group.js')
nocache('./YanzBot.js', module => console.log(`${module} Im Coming 4you`))
const _welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight🏙'
}
const starts = async (YANZ = new WAConnection()) => {
    YANZ.logger.level = 'warn'
    YANZ.version = [2, 2143, 3]
    YANZ.browserDescription = [ 'BOT ME', 'Safari', '3.0' ]
    YANZ.on('qr', () => {
    YANZ.sendMessage(`6283174508962@s.whatsapp.net`, `「 BOT CONNECT 」\n\n${a}Hallo Kak!! Saya ${Miminnya} Izin Menggunakan Bot Ini!!${a}\n\n${a}BOT TERSAMBUNG PADA${a}\n${a}${time2}${a}\n\n${a}PROFILE${a}\n*Nama* : ${Miminnya}\n*Nomor* : ${ownerNumber}\n*Status* : Online\n\n${a}TERIMAKASIH KAK BARA🥰!!${a}`, MessageType.extendedText)
    console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Ya Kak, Expried Dalam 20 Detik'))
    })

    fs.existsSync('./YanzBot.json') && YANZ.loadAuthInfo('./YanzBot.json')
    YANZ.on('connecting', () => {
    start('2','')
    })
    YANZ.on('open', () => {
    success('2', 'Dah Connect Tuhh!!')
    console.log(color('','aqua'), color(`||================================================||`, "cyan"))
    console.log(color(' ||> ','cyan'), color(`     Hallo Kak ${Miminnya} ${ucapanWaktu}`, 'cyan'))
    console.log(color(' ||> ','cyan'), color('    Jangan Lupa Subscrib Yt BARA GWNZZ🥰', 'cyan'))
    console.log(color(' ||> ','cyan'), color('   Script Ori By BARA🥴', 'cyan'))
    console.log(color('','aqua'), color(`||================================================||`, "cyan"))
    start('2','')
    })
    await YANZ.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./YanzBot.json', JSON.stringify(YANZ.base64EncodedAuthInfo(), null, '\t'))
    
    YANZ.on('chat-update', async (message) => {
    require('./YanzBot.js')(YANZ, message, _welkom)
    })
    
    

	 // if (!isWelcome) return
	  // const isWelkom = _welkom.includes(anu.jid)
	YANZ.on('group-participants-update', async (anu) => {
	//const isWelkom = _welkom.includes(anu.jid)    
	  const isWelkom = _welkom.includes(anu.jid)
	  
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await YANZ.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await YANZ.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
                  
            if (anu.action == 'add' && mem.includes(YANZ.user.jid)) {
            YANZ.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }
          if (anu.action == 'add' && mem.includes(YANZ.user.jid)) {
            YANZ.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }
                 if (!isWelkom) return
             if (anu.action == 'add' && !mem.includes(YANZ.user.jid)) {
        //  if (!welkom.includes(anu.jid)) return
       groupMet = await YANZ.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                mdata = await YANZ.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                groupName = mdata.subject
                let v = YANZ.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `${ucapanWaktu} *@${mem.split('@')[0]}*\nWelcome *@${mem.split('@')[0]}*\n*➸ Welcome in group  *${mdata.subject}*\n*➸ Please Intro*\n*➸ Name :*\n*➸ Your age :* \n*➸ Hobi :*\n*➸ Gender :*\n*➸ Numberr :* ${mem.replace('@s.whatsapp.net', '')}\n*Have a nice day~~*`
             // buff = await getBuffer(pic)
              buff = await getBuffer(
               `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pic}&bg=https://www.linkpicture.com/q/20211125_113317.jpg`)
             
              YANZ.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `*Made With💞Yanz Bot*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
		     if (!isWelkom) return
            if (anu.action == 'remove' && !mem.includes(YANZ.user.jid)) {
          // if (!welkom.includes(anu.jid)) return
                mdata = await YANZ.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = YANZ.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `@${num.split('@')[0]} Leave In *${mdata.subject}*`
         //      buff = await getBuffer(pic)
                     buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://www.linkpicture.com/q/20211125_113317.jpg`)
               YANZ.sendMessage(mdata.id, { contentText: `${out}`, footerText: `*Made With💞Yanz Bot*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
     
       })
       }
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
