require('dotenv').config();
const Discord = require('discord.js');
const parseCommands = require('./lib/commands/all').parseCommands();

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of your bot - https://discordapp.com/developers/applications/me
const token = process.env.TOKEN;

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});

// create an event listener for messages
bot.on('message', message => {
  message.channel.sendMessage(parseCommands(message.content));
});

// log our bot in
bot.login(token);

