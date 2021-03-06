require('dotenv').config();
const Discord = require('discord.js');
const commands = require('bot-commander');

const bot = new Discord.Client();
const token = process.env.TOKEN;

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
  commands.setSend((meta, cmdMsg) => (message.channel.sendMessage(cmdMsg)));
  commands.parse(message.content, message);
});

bot.login(token);

let subCommands = commands
    .command('!mlb')
    .description('base command for TheShowStatsBot but doesn\'t do anything without further subcommands');

subCommands.load('./lib/commands/franchise.js');
subCommands.load('./lib/commands/config.js');
