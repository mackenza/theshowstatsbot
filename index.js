require('dotenv').config();
const Discord = require('discord.js');
const commands = require('bot-commander');
const scrapers = require('./lib/scrapers/allstats');
const bot = new Discord.Client();
const token = process.env.TOKEN;

var channel;

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  commands.setSend((meta, cmdMsg) => (message.channel.sendMessage(cmdMsg)));
  commands.parse(message.content);
  channel = message.channel;
});

bot.login(token);

let subCommands = commands
    .command('!mlb')
    .description('base command for TheShowStatsBot but doesn\'t do anything without subcommands');

subCommands
    .command('avg')
    .description('Show the top players by batting avg')
    .action(a => {
        let stats = scrapers.getStats('AVG', 'Show the top players by batting avg', getResults);
    });

subCommands
    .command('hits')
    .description('Show the top players by hits')
    .action(a => {
        let stats = scrapers.getStats('H', 'Show the top players by hits', getResults);
    });

subCommands
    .command('ab')
    .description('Show the top players by at bats')
    .action(a => {
        let stats = scrapers.getStats('AB', 'Show the top players by at bats', getResults);
    });

function getResults(statsTable) {
    let pre = "```\n";
    let post = "```";
    channel.sendMessage(pre + statsTable.toString() + post);
}