const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**Bu komudu kulllanmak için \Rolleri yönet\ yetkisine sahip olmalısın**.`)
  .setTimestamp()
                                                                                   .setAuthor('Rookie Deneme Botu', client.user.avatarURL)
);
  var bot = ""
   
   let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**Komut kullanımı !rol @verilecekrol**.`)
  .setTimestamp()
                                                                                   .setAuthor('Rookie Deneme Botu', client.user.avatarURL)
);
  
  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkese   ${rol} adlı rol verildi!`)
        .setColor(rol.hexColor)
   
   message.guild.members.forEach(u => {
u.addRole(rol)
})
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rol'],
    permLevel: 0
}

exports.help = {
    name: 'herkese-rol-ver',
    description: 'Herkese Rol Verir.',
    usage: 'herkeserolver'
}