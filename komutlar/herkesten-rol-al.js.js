const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

 var bot = "BOTUNUZUN İD Sİ";

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Bu komutu kullanabilmek için `Rolleri Yönet` yektisine sahip olmalısın.");


let rol = 
message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
 if (!rol)
    return message.reply("Herkesten almak istediğin rolü belirtirmessen alamam.");

 const embed = new Discord.RichEmbed()
    .setDescription(`**Herkesten ${rol} adlı yetkiyi aldım. **`)
    .setColor("RANDOM");
message.guild.members.forEach(u => {
u.removeRole(rol)
 })
 message.channel.send(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["herkestenrolal", "herkesinrolünüal","rolal"],
permLevel: 3
};
exports.help = {
name: "herkestenrolal",
description: "herkese istediğiniz rolü verir",
usage: "herkestenrolal"

};