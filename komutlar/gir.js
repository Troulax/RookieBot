exports.run = async (client, message) => {
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("Ses kanalında değilsin bak! Beni yalnız olmaya zorlama!"); }

  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send(":x: Ses kanalınıza bağlanmak için yeterli izne sahip değilim. Giriş iznini kaçırdım."); }


  message.member.voiceChannel.join();
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gir'],
  permLevel: 4
}

exports.help = {
  name: 'gir',
  description: "Odaya girer",
  usage: '!gir'
  
}