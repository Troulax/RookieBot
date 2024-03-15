const Discord = require('discord.js')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) 
  
  return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( "**Bu komutu kullanabilmek için `Rolleri yönet` yetkisine sahip olmanız gerek**.")
  .setTimestamp()                            
                                                                                   .setAuthor('Rookie Deneme Botu', client.user.avatarURL)
);                                 
let guild = message.guild;
let isim = args.slice(0).join(" ");
if (!isim) 
  return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**Rol oluşturmak için !rololuştur rolünadı.**.`)
  .setTimestamp()
                                                                                   .setAuthor('Rookie Deneme Botu', client.user.avatarURL)
);

guild.createRole({
  name: isim
})
  .then(role => message.channel.send(`${role.name} adında yeni rol oluşturuldu`))
  .catch(console.error)
  
}

exports.conf = {
  aliases: [ 'rololuştur' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'createrole',
  description: 'Yeni rol oluşturur',
  usage: '!rololuştur <isim>',
};