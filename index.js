const express = require('express');
const app = express();
const port = 3000;
app.get("/", function (request, response) {
response.sendFile(__dirname + '/OwO.html');});
app.listen(port, () => console.log(`Online`));
const Discord = require('discord.js');
const client = new Discord.Client();
let { readdirSync } = require('fs'); 
client.config = require('./config.js'); 
client.comandos = new Discord.Collection(); 

client.on('ready', () => {
console.log(`${client.user.tag}!`);
})

// <-- AQUI EL CONTROLADOR DE COMANDOS: -->
for(const file of readdirSync('./comandos/')) { 
  if(file.endsWith(".js")) { 
  let fileName = file.substring(0, file.length - 3); 

  let fileContents = require(`./comandos/${file}`); 
  client.comandos.set(fileName, fileContents);
  }
}

// <-- AQUI EL CONTROLADOR DE EVENTOS: -->
for(const file of readdirSync('./eventos/')) { 
  if(file.endsWith(".js")){

  let fileName = file.substring(0, file.length - 3); 

  let fileContents = require(`./eventos/${file}`); 
  client.on(fileName, fileContents.bind(null, client));
  
  }
}

// <-- AQUI LA PROPIEDAD LOGIN: -->
client.login(process.env.TOKEN)
.then(() => { 
    console.log(`Listo ${client.user.tag}`);

  })
  .catch((err) => {
    console.error("Error al iniciar sesión: " + err);

  });

