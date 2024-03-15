const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage('Botun yeniden başlatılması Icin Evet [ E ] Yaziniz !.')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet"," e", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**Bot yeniden başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('Işlem Başarıyla Iptal Edildi !');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e"],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[Admin Komutu]',
  usage: 'reboot'
}; 