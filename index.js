const atable = require('ascii-table');
const scraper = require('osmosis');
const Discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of your bot - https://discordapp.com/developers/applications/me
const token = 'MjkwNjQwODE4ODI4NjA3NDg5.C6ixKQ.3r2aWhXy2twjtxNPOytx-FzHvYQ';

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});

// create an event listener for messages
bot.on('message', message => {
  if (message.content === '!mlb avg') {
    let avgData = getAvg(message);
  }
});

// log our bot in
bot.login(token);

function getAvg(message) {
    let avgs = new atable('Top 10 by batting avg');
    avgs.setHeading('Rank', 'POS', 'Player', 'AVG');
    scraper
    .get('http://theshownation.com/franchises/275472/leaders/AVG')
    .find('table.table tbody tr')
    .set({
        'team': 'td[1]',
        'rank': 'td[2]',
        'pos': 'td[3]',
        'player': 'td[4]',
        'avg': 'td[5]'
    })
    .data(function(found) {
        avgs.addRow(found.rank, found.pos, found.player, found.avg);
    })
    .done(function(thedata) {
        //avgs.removeBorder();
        console.log(avgs.toString());
        message.channel.sendMessage('``` \n' + avgs.toString() + '\n ```');
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
}