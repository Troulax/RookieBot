const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {
const user = message.mentions.users.first();
  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Lütfen Bir Sonraki  Bir Kullanıcı Bahset");
  }

  let member = message.guild.member(message.mentions.users.first());
  if(!member){
    message.reply(":x: " + "| Bu Kullanıcı Geçerli Görmüyor!");
  }

  if(!message.guild.member(bot.user).hasPermission("MOVE_MEMBERS")){
    return message.reply(":x: " + "| ihtiyacım var\"MOVE_MEMBERS\" izin!").catch(console.error);
  }

  let msg = await message.channel.send("Şimdi oyla! (10 saniye)");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree)
  }
  if(YES_Count >= 4 && YES_Count > NO_Count){
const voiceChannel = message.member.voiceChannel.id;
  if (!voiceChannel) return;
    member.setVoiceChannel(voiceChannel).then(member => {
      message.reply(`${member.user.username} başarıyla çekildi`)
    })
  }else{

    message.channel.send("\n" + "GÜVENLİ ..... ŞİMDİ İÇİN");
  }

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 0
};
exports.help = {
  name: "çek",
  description: "çek",
  usage: "çek"
};