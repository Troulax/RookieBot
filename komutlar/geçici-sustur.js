const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
  let guild = message.guild
 if (!message.guild) {
  const dmuyari = new Discord.RichEmbed()
  .setDescription(`Bu komut özel mesajlarda kullanıma kapatılmıştır. Sunucularda tekrar dene.`)
  return message.author.send(dmuyari); }
if (message.author.bot === true) {
  return;
}
 if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x7e1111').setDescription(`Bu komutu kullanabilmek için "\`Üyeleri susturma\`" yetkisine sahip olmalısın.`)
  .setTimestamp())


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x7e1111').setDescription("Bu komudu kullanabilmek için : **.sustur @kullanıcı süre** Olarak Yazmalısınız.\n\nÖrnek Süreler: \`1dk, 1sn, 1sa\`")
  .setTimestamp());
  let muterole = message.guild.roles.find(r => r.name === "MUTE YEDİN");
  
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "MUTE YEDİN",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false,
        });

      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
   let mutetime = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`);

  await(tomute.addRole(muterole.id))
  
  message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x1ad838').setDescription(`<@${tomute.id}> için konuşma izinleri kapatıldı! ${mutetime}`)
                            
                   
  .setTimestamp())
  
  let kullanici = message.mentions.members.first()
  let reason = args[1];
    if (!kullanici) return message.channel.send("Kimi susturacağını belirtmedin")
    kullanici.setMute(true, `${reason}. Susturan kişi ${message.author.tag}`)
  

  
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    kullanici.setMute(false);
    message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x7e1111').setDescription(`<@${tomute.id}> adlı kişinin susturulma süresi dolduğu için susturulması kaldırıldı!`)
  .setTimestamp());
  }, ms(mutetime))



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur', 'mute']
};

exports.help = {
  name: 'sustur',
  description: 'Belirttiğiniz kullanıcıyı süreli susturur.',
  usage: 'sustur [Kullanıcı] [Süre]'
};