/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3, 3234, 9]
  conn.browserDescription = ["Ammukutty ", "desktop", '1.0.0']
  const buttons = [

    { buttonId: '.list', buttonText: { displayText: 'ÊŸÉªêœ±á´›' }, type: 1 },
    { buttonId: '.git', buttonText: { displayText: 'É¢Éªá´›' }, type: 1 },

  ]

  const buttonMessage = {
    contentText: ' Ammukutty WHATSAPP BOT \n\n MADE WITH â¤ï¸  ',
    footerText: 'Â© êª¶á´…á´‡á´ ÉªÊŸêœ±á´‡Ê€ê«‚',
    buttons: buttons,
    headerType: 1
  }

  conn.on('connecting', async () => {

    console.log(`${chalk.green.bold('D-3-V-1-L ')}${chalk.green.bold('-Naughty-girl')}
${chalk.white.italic('Naughty-girl code recipient')}
${chalk.blue.bold('â„¹ï¸  Connecting Naughty-girl... Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('Naughty-girl QR Code: '),
      'Naughty-girl:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'Naughty-girl:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      //await conn.sendMessage(conn.user.jid, '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*â–ªï¸ Naughty-girl Connected Successfully âœ…ï¸*\n*â–ªï¸Thanks For Choosing Naughty-girl ðŸ’–*', MessageType.text );
      await conn.sendMessage(
        conn.user.jid, buttonMessage,
        MessageType.buttonsMessage
      );
    } else {
      //await conn.sendMessage(conn.user.jid, '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*â–ªï¸ Naughty-girl Connected Successfully âœ…ï¸*\n*â–ªï¸Thanks For Choosing Naughty-girl ðŸ’–*', MessageType.text );
      await conn.sendMessage(
        conn.user.jid, buttonMessage,
        MessageType.buttonsMessage
      );
    }
    console.log(
      chalk.green.bold(
        "EÄžER MESAJI KOPYALAMIYORSANIZ LÃœTFEN WHATSAPP'I KONTROL EDÄ°N. KENDÄ° NUMARANIZA QR KODU GÃ–NDERÄ°LDÄ°!\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
