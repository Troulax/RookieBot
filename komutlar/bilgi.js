const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.author.sendCode("");
    if (message.channel.type !== "dm") {
      const ozelmesajkontrol = new Discord.RichEmbed()
        .setColor("0Xee0000")
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Kullanım .bilgi [Komut]. :postbox:");
      message.channel.sendEmbed(ozelmesajkontrol);
    }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode;
      const bilgi = new Discord.RichEmbed()
        .setColor("0Xee0000")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(
          `↾ |  ${command.help.name}  | ⇃ \n\n${command.help.description}\n\nKullanım Bu Şekildedir: ${command.help.usage} `
        )
        .setThumbnail(client.user.avatarURL)
        .setTimestamp();

      return message.channel.sendEmbed(bilgi);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bilgi",
  description: "Komutlar Hakkında Yardım Alırsnız.",
  usage: "!bilgi [komut]"
};
