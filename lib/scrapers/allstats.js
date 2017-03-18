const atable = require('ascii-table');
const scraper = require('osmosis');


function getAvg(cb) {
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
    .done(function() { cb(avgs) })
}

function getHits(cb) {
    let hits = new atable('Top 10 by number of Hits');
    hits.setHeading('Rank', 'POS', 'Player', 'HITS');
    scraper
    .get('http://theshownation.com/franchises/275472/leaders/H')
    .find('table.table tbody tr')
    .set({
        'team': 'td[1]',
        'rank': 'td[2]',
        'pos': 'td[3]',
        'player': 'td[4]',
        'hits': 'td[5]'
    })
    .data(function(found) {
        hits.addRow(found.rank, found.pos, found.player, found.hits);
    })
    .done(function() { cb(hits) })
}

function getStats(stat, statText, cb) {
    let stats = new atable(statText);
    stats.setHeading('Rank', 'POS', 'Player', stat);
    scraper
    .get('http://theshownation.com/franchises/275472/leaders/' + stat)
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
    .done(function() { cb(stats) })
}

module.exports = {
    getAvg: getAvg,
    getHits: getHits,
    getStats: getStats
}