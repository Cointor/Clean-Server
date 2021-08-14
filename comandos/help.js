const Discord = require('discord.js'); 
const config = require ("../config.js")
module.exports = async (client, message, args) => {
const embed = new Discord.MessageEmbed()

.setDescription(" \<a:help:875948591007555604> **Available commands** \<a:help:875948591007555604> \n \n \<a:warn:875950318221938708> `set clean` - Remove all channels from the server \n \<:cats:875952022921302076> `set invite` - Invite me to your server \n :link:  `set opensource` - Link to my source code")
.setColor(config.verde)
message.channel.send(embed)

}; 
