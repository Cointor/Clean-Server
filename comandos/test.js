const Discord = require('discord.js'); 
const config = require ("../config.js")
module.exports = async (client, message, args) => {

message.channel.send(config.online + "| **Online**")

}; 
