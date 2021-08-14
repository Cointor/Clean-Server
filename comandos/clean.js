const Discord = require('discord.js'); 
const config = require ("../config.js")
module.exports = async (client, message, args) => {

// Embed // 
const embedno = new Discord.MessageEmbed()
.setColor(config.rojo)
.setDescription("You cannot run this command, only the server owner can use this command.")
/////
if(message.author.bot) return;
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(embedno);

if(!args[0]) { 
const indice = new Discord.MessageEmbed()
.setColor(config.rojo)
.setDescription(":warning: | Executing this command will remove all channels from the server \n Type `set clean yes` if you want to continue")
message.channel.send(indice);
return
}
if(args[0] === "yes") {
message.guild.channels.cache.forEach(channel => channel.delete());
message.guild.channels.create(`#cleaned`, {
 type: 'text'
  }).then(channel => {
channel.send("<a:nuke:875633923227549698> | The server was cleaned successfully")
})
}
}
