const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let user = message.author
  let sebep = args.join(" ")
  let uye = message.author
 let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!sebep) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**${uye} bir sebep yazmalısın.**`)
  )
  db.set(`afk_${user.id}`, sebep)
  message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**${uye} \`${sebep}\` sebebiyle afksın.**`))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}