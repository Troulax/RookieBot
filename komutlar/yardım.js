const Discord = require('discord.js');


exports.run = function(client, message) {
  message.channel.bulkDelete(1)
  const embed = new Discord.RichEmbed()
.setColor('0Xee0000')
.setTitle(`  │ Deneme Sunucusu Yardım Menu │ \nKodun ne olduğunu Öğrenmek İçin : .bilgi [Komut]`)
.setTimestamp()
  .addField(
' Mod Komutları', "sil ," + " tag ,"+ " rol ,"+ " rol ,"+"fazladan komut ")
.setFooter('© 2020 Deneme Sunucusu | Yapımcı : Troulax', client.user.avatarURL)
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: '.yardım [komut]'
};