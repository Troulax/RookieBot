const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    const mesaj = args.slice(0).join(' ');
    if(mesaj.length < 1) return message.reply("Duyuru giriniz")
      try {
        message.guild.members.forEach(m=> {
         
        m.send(mesaj)
        console.log(`${m.user.tag} adlı kişiye yollandı.`)
         
          }) 
        message.channel.send("**Mesaj Başarıyla Gönderildi.**")
          }
        catch(e) {
        return console.log(`bir kişiye atılamadı`)
       
      } 
    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dm"],
  permLevel: 4
};

exports.help = {
  name: 'dm',
  description: 'dm mesajı atar.',
  usage: 'duyuru yollar'
};