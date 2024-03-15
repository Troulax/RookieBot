const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
`Tüm sunucuyu`,
  `7/24 | Rookie Bot`,
    ];

    setInterval(function() {

        var random = Math.floor(Math.random() * (oyun.length - 0))

        client.user.setActivity(oyun[random] , { type: "WATCHING",} );
  }, 3000);
};
