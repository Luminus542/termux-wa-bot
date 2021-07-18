const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const luminus = new WAConnection()
//Aquí el "luminus" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "luminus" por el cambio que hicieron.
        luminus.logger.level = 'warn'

//llamar al código QR
        luminus.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del luminuse, Token y Keys del luminuse y del SERVER.
        fs.existsSync('./luminusu330.json') && luminus.loadAuthInfo('./luminusu330.json')

//Conectando o reconectando
        luminus.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        luminus.on('open', () => {
        console.log('Conectado exitoluminusente :D')
        })
        await luminus.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./luminusu330.json', JSON.stringify(luminus.base64EncodedAuthInfo(), null, '\t'))
        

luminus.on('chat-update', async (luminus) => {
try {	  
if (!luminus.hasNewMessage) return
if (!luminus.messages) return
if (luminus.key && luminus.key.remoteJid == 'status@broadcast') return

luminus = luminus.messages.all()[0]
if (!luminus.message) return
global.blocked
luminus.message = (Object.keys(luminus.message)[0] === 'ephemeralMessage') ? luminus.message.ephemeralMessage.message : luminus.message
const from = luminus.key.remoteJid
const type = Object.keys(luminus.message)[0]        
const quoted = type == 'extendedTextMessage' && luminus.message.extendedTextMessage.contextInfo != null ? luminus.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(luminus.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = luminus.message.conversation || luminus.message[type].caption || luminus.message[type].text || ""
chats = (type === 'conversation') ? luminus.message.conversation : (type === 'extendedTextMessage') ? luminus.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && luminus.message.conversation.startsWith(prefix)) ? luminus.message.conversation : (type == 'imageMessage') && luminus.message.imageMessage.caption.startsWith(prefix) ? luminus.message.imageMessage.caption : (type == 'videoMessage') && luminus.message.videoMessage.caption.startsWith(prefix) ? luminus.message.videoMessage.caption : (type == 'extendedTextMessage') && luminus.message.extendedTextMessage.text.startsWith(prefix) ? luminus.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = luminus.user.jid
const botNumber = luminus.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = luminus.key.fromMe ? luminus.user.jid : isGroup ? luminus.participant : luminus.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = luminus.key.fromMe ? luminus.user.jid : luminus.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = luminus.key.fromMe ? luminus.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
luminus.sendMessage(from, 'Hola, tu proyecto a sido un exito :D', text, {quoted : luminus})
break

case 'info':
luminus.sendMessage(from, 'ESTE BOT ES UN PEQUEÑO PROYECTO EN PROCESO DURANTE LAS ACTUALIZACIONES QUE TENGA SERAN AÑADIDOS COMANDOS NUEVOS', text, {quoted : luminus})
break
   
case 'menu':
luminus.sendMessage(from, 'Por el momento no tengo comandos :/', text, {quoted : luminus})
break
             
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
