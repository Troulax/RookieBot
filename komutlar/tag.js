const Discord = require('discord.js');


exports.run = function(client, message) {
  message.channel.bulkDelete(1)

message.channel.send("δ")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help"],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Tagı Atar',
  usage: '!tag'
};