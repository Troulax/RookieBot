const http = require('http');
const express = require('express');
const { GOOGLE_API_KEY } = require('./anahtarlar.json');
const app = express();
 app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 2800000);
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require("quick.db");
const queue = new Map(); 
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(GOOGLE_API_KEY);
const request = require("request");
const ytdl = require('ytdl-core');
const ms = require("parse-ms");
require('./util/eventLoader')(client);
client.queue = new Map()

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.on("guildMemberRemove", async function(member) {
  
  const botadi = "Palace Guard"
  let guild = member.guild;
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_KICK" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);
  setTimeout(async () => {
    let logs = await guild.fetchAuditLogs({ type: "MEMBER_KICK" });
    if (logs.entries.first().executor.bot) return;
    if (logs.entries.first().target.id !== member.id) return;
    guild.members
      .get(logs.entries.first().executor.id)
      .removeRoles(guild.members.get(logs.entries.first().executor.id).roles); /// TÜM ROLLERİNİ ALIR
    setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("")/// VERİLECEK CEZALI ROL İD
    },3000)
    setTimeout(() => {
      guild.members.get(logs.entries.first().executor.id)
    
    const k = guild.channels.find(c => c.id === "");
 
    
    
    
    const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`<@${yetkili.id}> <@${member.user.id}> Adlı Kişiye Sağ Tık Kick Atıldığı İçin Kickliyen Kişinin Yetkileri Alındı.`)
.setFooter(`${botadi} | Kick Koruma Sistemi. Developer By MontiKasta & Troulax `)
k.send(cıks)
    guild.owner.send(` ${botadi} | <@${yetkili.id}> <@${member.user.id}> Adlı Kişiye Sağ Tık Kick Atıldığı İçin Kickliyen Kişinin Yetkileri Alındı.`)
    
    }, 2000)

    
  })

});

client.on("guildBanAdd", async function(guild, user) {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);
setTimeout(async () =>{
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
    if(logs.entries.first().executor.bot) return;

      guild.members.get(logs.entries.first().executor.id).removeRoles(guild.members.get(logs.entries.first().executor.id).roles) ///TÜM ROLLERİNİ ALIR
     setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("")/// VERİLECEK CEZALI ROL İD
    },3000)
const sChannel = guild.channels.find(c=> c.id ==="")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`<@${yetkili.id}> ${user} adlı Kişiye Sağ tık ban Atıldığı için Banlayan Kişinin Yetkileri Alındı`)
.setFooter('Guardian')
sChannel.send(cıks)
guild.owner.send(`Palace Guard | ** <@${yetkili.id}> İsimili Yetkili <@${user.id}>** Adlı Kişiyi Banladı Ve Yetkilerini Aldım.`)
},2000)
})
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.on("roleDelete", async (role) => {
  let mention = role.mentionable;
  let hoist = role.hoist;
  let color = role.hexColor;
  let name = role.name;
  let perms = role.permissions;
  let position = role.position;
  role.guild.createRole({
    name: name,
    color: color,
    hoist: hoist,
    position: position,
    permissions: perms,
    mentionable: mention
  })
})
                      
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 5;
  return permlvl;
};
  client.on("channelDelete", async channel => {
  const logs = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first())
  const deleter = await channel.guild.members.get(logs.executor.id);
  if(deleter.id == "") return; //bu satıra kendi id'nizi yazın sizin kanal silmenizi engellemeyecektir
  channel.clone(undefined, true, true, "Kanal silme koruması sistemi").then(async klon => {
    await klon.setParent(channel.parent);
    await klon.setPosition(channel.position);
  })
})
  

  client.on('guildMemberAdd', member => {
 member.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**Tagımızı alarak destek olabilirsin.Sunucuya hoş geldin**.`)
  .setTimestamp()
                                                                                   .setAuthor('Rookie Deneme Botu')
);
}); 

client.on('guildMemberRemove', member => {
 member.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**Görüşürüz biz buradayız dc linki**.`)
  .setTimestamp()
                                                                                   .setAuthor('Rookie Deneme Botu')
);
}); 

  client.on('message', async (message, member, guild) => {
  let i = await  db.fetch(`saas_${message.guild.id}`)
  let uye = message.author
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'sa') {
        message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( `**${uye} Aleyküm selam hoş geldin.Nasılsın ?**`)
  .setTimestamp());      
      }
      }
    });
client.on('message', async message => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
  let uye = message.author
  
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
   message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription( ` ${uye} adlı kullanıcı artık AFK değil.`))
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription(`**${kullanıcı} şu anda AFK. \n \n Sebep : \`${sebep}\`**`))
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x080808').setDescription(`**${message.author} artık afk değil.**`))
      db.delete(`afk_${message.author.id}`)
    }
  }
}); 

client.on("guildBanAdd", async function(guild, user) {
  const botadi = "Palace Guard"
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);
setTimeout(async () =>{
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
    if(logs.entries.first().executor.bot) return;

      guild.members.get(logs.entries.first().executor.id).removeRoles(guild.members.get(logs.entries.first().executor.id).roles) ///TÜM ROLLERİNİ ALIR
     setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("")/// VERİLECEK CEZALI ROL İD
    },3000)
const sChannel = guild.channels.find(c=> c.id ==="")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`** <@${yetkili.id}> İsimili Yetkili <@${user.id}>** Adlı Kişiyi Banladı Ve Yetkilerini Aldım.`)
.setFooter('Guardian')
sChannel.send(cıks)
guild.owner.send(`${botadi} | ** <@${yetkili.id}> İsimili Yetkili <@${user.id}>** Adlı Kişiyi Banladı Ve Yetkilerini Aldım.`)
},2000)
})


client.on('guildMemberAdd', (member) => {
    const guild = member.guild;


 let sChannel = member.guild.channels.find(c => c.name === 's')

    if(member.user.bot !==true){

    } 
    else {

    sChannel.send(`**Palace Guard Koruma Sistemi**
Sunucuya Bir Bot Eklendi Ve Güvenlik Nedeniyle Banlandı
Banlanan Bot: **${member.user.tag}**`)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
  }  
  });
client.on('message', async msg => {

	if (msg.author.bot) return false;
	if (!msg.content.startsWith(prefix)) return false;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.split(' ')[0].slice(ayarlar.prefix.length);
	//command = command.slice(prefix.length)


});


 



client.login(ayarlar.token);