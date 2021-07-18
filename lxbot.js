const { WAConnection } = require('@adiwajshing/baileys');
const fs = require('fs');

async function iniciar () { 
        const luminus = new WAConnection()

        luminus.logger.level = 'warn'

        luminus.on('qr', () => {
        })

        fs.existsSync('./Samu330.json') && luminus.loadAuthInfo('./Samu330.json')

        luminus.on('connecting', () => {
        console.log('Conectando')
        })

        luminus.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await luminus.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        }

iniciar ()
.catch (err => console.log("unexpected error: " + err))
