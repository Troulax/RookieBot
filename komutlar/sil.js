const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
 
const m = args.join(' ');
  if(!m) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**Bir miktar girmelisiniz**.`)
  .setTimestamp()
                                                                                   .setAuthor('Rookie Deneme Botu', client.user.avatarURL)
);

  if(m < 2) return message.channel.send(` **En az 2 mesaj silebilirim!**`)
 if(m>100) return message.channel.send(` **En fazla 100 mesaj silebilirim!**`)
  message.channel.bulkDelete(m);
  

  message.channel.send(
  new Discord.RichEmbed()
    .setTitle(`Silme İşlemi Tamamlandı`)
    .setDescription('**Başarı ile __'+m+'__ mesaj sildim! Eğer Silinmediyse Discord Api İzin Vermiyordur. **')
  .setColor('RANDOM')
  ).then(async msg => {
   setTimeout(() => {
                            msg.delete(`**Temizlendi**`);
                        }, 10000);
  }  
  )
};
                                                                                                                                   
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle','clear','sil'],
  permLevel: 0

};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: '!sil [Silinecek Mesaj Sayısı]'
};
