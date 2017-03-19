require('dotenv').config();
const Discord = require('discord.js');
const commands = require('bot-commander');

const bot = new Discord.Client();
const token = process.env.TOKEN;

var channel;

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  commands.setSend((meta, cmdMsg) => (message.channel.sendMessage(cmdMsg)));
  commands.parse(message.content, message);
});

bot.login(token);

let franchiseCmds = commands
    .command('!mlb')
    .description('base command for TheShowStatsBot but doesn\'t do anything without further subcommands');

franchiseCmds.load('./lib/commands/franchise.js');
