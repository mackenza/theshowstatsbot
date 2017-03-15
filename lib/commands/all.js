const commands = require('bot-commander');
const scrapers = require('../scrapers/avg');

commands
    .setSend((meta, message) => console.log(message))

let subCommands = commands
    .command('!mlb')
    .description('base command for TheShowStatsBot but doesn\'t do anything without subcommands');

subCommands
    .command('avg')
    .description('Show the top players by batting avg')
    .action(a => {
        console.log("avg worked");
        scrapers.getAvg();
    });

subCommands
    .command('hits')
    .description('Show the top players by hits')
    .action(a => {
        console.log("hits worked");
        return "hits worked";
    });

function parseMessage(messageText) {
    commands.parse(messageText);
}

module.exports = {
    parseMessage: parseMessage
}