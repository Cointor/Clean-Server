const Discord = require('discord.js'); 
const config = require ("../config.js")
module.exports = async (client, message, args) => {
const embed = new Discord.MessageEmbed()

.setDescription("\<a:yea:875952772032380998> **Invite me to your server** \<a:yea:875952772032380998> \n \n [Invitation](https://discord.com/oauth2/authorize?client_id=875609851550662666&scope=bot&permissions=8) \n [My server](https://discord.gg/j3PVuJHXfS)")
.setColor(config.verde)
message.channel.send(embed)

}; 
