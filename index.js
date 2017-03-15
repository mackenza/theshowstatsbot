require('dotenv').config();
const Discord = require('discord.js');
const commands = require('bot-commander');
const scrapers = require('./lib/scrapers/avg');
const bot = new Discord.Client();
const token = process.env.TOKEN;

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  commands.setSend((meta, cmdMsg) => (message.channel.sendMessage(cmdMsg)));
  commands.parse(message.content);
});

bot.login(token);

let subCommands = commands
    .command('!mlb')
    .description('base command for TheShowStatsBot but doesn\'t do anything without subcommands');

subCommands
    .command('avg')
    .description('Show the top players by batting avg')
    .action(a => {
        scrapers.getAvg(a);
    });

subCommands
    .command('hits')
    .description('Show the top players by hits')
    .action(a => {
        console.log("hits worked");
        return "hits worked";
    });

function returnMessage(stats, meta) {
  commands.send(meta, stats);
}

module.exports = {
  returnMessage: returnMessage
}