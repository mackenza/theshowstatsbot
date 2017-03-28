const atable = require('ascii-table');
const scraper = require('osmosis');

function getStats(stat, statText, franchise, msg, cb) {
    statUrl = `http://theshownation.com/franchises/${francise}/leaders/${stat}`;
    let stats = new atable(statText);
    stats.setHeading('Rank', 'POS', 'Player', stat);
    scraper
    .get(statUrl)
    .find('table.table tbody tr')
    .set({
        'team': 'td[1]',
        'rank': 'td[2]',
        'pos': 'td[3]',
        'player': 'td[4]',
        'stat': 'td[5]'
    })
    .data(function(found) {
        stats.addRow(found.rank, found.pos, found.player, found.stat);
    })
    .done(function() { cb(stats, msg) })
}

module.exports = {
    getStats: getStats
}