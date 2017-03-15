const atable = require('ascii-table');
const scraper = require('osmosis');

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
        console.log(avgs.toString());
        //message.channel.sendMessage('``` \n' + avgs.toString() + '\n ```');
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
}

module.exports = {
    getAvg: getAvg
}