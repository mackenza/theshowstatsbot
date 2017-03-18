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
        let stats = scrapers.getStats('AVG', 'Top players by batting avg', getResults);
    });

subCommands
    .command('hits')
    .description('Show the top players by hits')
    .action(a => {
        let stats = scrapers.getStats('H', 'Top players by hits', getResults);
    });

subCommands
    .command('ab')
    .description('Show the top players by at bats')
    .action(a => {
        let stats = scrapers.getStats('AB', 'Top players by at bats', getResults);
    });

subCommands
    .command('2b')
    .description('Show the top players by doubles')
    .action(a => {
        let stats = scrapers.getStats('2B', 'Top players by doubles', getResults);
    });

subCommands
    .command('3b')
    .description('Show the top players by triples')
    .action(a => {
        let stats = scrapers.getStats('3B', 'Top players by triples', getResults);
    });

subCommands
    .command('hr')
    .description('Show the top players by home runs')
    .action(a => {
        let stats = scrapers.getStats('HR', 'Top players by home runs', getResults);
    });

subCommands
    .command('rbi')
    .description('Show the top players by runs batted in')
    .action(a => {
        let stats = scrapers.getStats('RBI', 'Top players by runs batted in', getResults);
    });

subCommands
    .command('r')
    .description('Show the top players by runs')
    .action(a => {
        let stats = scrapers.getStats('R', 'Top players by runs', getResults);
    });

subCommands
    .command('sb')
    .description('Show the top players by stolen bases')
    .action(a => {
        let stats = scrapers.getStats('SB', 'Top players by stolen bases', getResults);
    });

subCommands
    .command('bb')
    .description('Show the top players by walks')
    .action(a => {
        let stats = scrapers.getStats('BB', 'Top players by walks', getResults);
    });

subCommands
    .command('slg')
    .description('Show the top players by slugging %')
    .action(a => {
        let stats = scrapers.getStats('SLG', 'Top players by slugging %', getResults);
    });

subCommands
    .command('ops')
    .description('Show the top players by on-base plus slugging %')
    .action(a => {
        let stats = scrapers.getStats('OPS', 'Top players by on-base + slugging %', getResults);
    });

subCommands
    .command('w')
    .description('Show the top pitchers by wins')
    .action(a => {
        let stats = scrapers.getStats('W', 'Top pitchers by wins', getResults);
    });

subCommands
    .command('l')
    .description('Show the top pitchers by losses')
    .action(a => {
        let stats = scrapers.getStats('L', 'Top pitchers by losses', getResults);
    });

subCommands
    .command('sv')
    .description('Show the top pitchers by saves')
    .action(a => {
        let stats = scrapers.getStats('SV', 'Top pitchers by saves', getResults);
    });

subCommands
    .command('era')
    .description('Show the top pitchers by earned run avg')
    .action(a => {
        let stats = scrapers.getStats('ERA', 'Top pitchers by earned run avg', getResults);
    });

subCommands
    .command('hra')
    .description('Show the top pitchers by home runs allowed')
    .action(a => {
        let stats = scrapers.getStats('HRA', 'Top pitchers by hr allowed', getResults);
    });

subCommands
    .command('sho')
    .description('Show the top pitchers by shutouts')
    .action(a => {
        let stats = scrapers.getStats('SHO', 'Top pitchers by shutouts', getResults);
    });

subCommands
    .command('so')
    .description('Show the top pitchers by strikeouts')
    .action(a => {
        let stats = scrapers.getStats('SO', 'Top pitchers by strikeouts', getResults);
    });

subCommands
    .command('cg')
    .description('Show the top pitchers by complete games')
    .action(a => {
        let stats = scrapers.getStats('CG', 'Top pitchers by complete games', getResults);
    });

subCommands
    .command('ip')
    .description('Show the top pitchers by innings pitched')
    .action(a => {
        let stats = scrapers.getStats('IP', 'Top pitchers by innings pitched', getResults);
    });

subCommands
    .command('whip')
    .description('Show the top pitchers by whip')
    .action(a => {
        let stats = scrapers.getStats('WHIP', 'Top pitchers by whip', getResults);
    });

function getResults(statsTable) {
    let pre = "```\n";
    let post = "```";
    channel.sendMessage(pre + statsTable.toString() + post);
}