const scrapers = require('../scrapers/allstats');

module.exports = franchiseCmds => {        

    let franchiseSubCmds = franchiseCmds
        .command('franchise')
        .description('Commands that return stats for you Franchise teams only');    

    franchiseSubCmds
        .command('avg')
        .description('Show the top players by batting avg')
        .action(msg => {
            let stats = scrapers.getStats('AVG', 'Top players by batting avg', msg, getResults);
        });

    franchiseSubCmds
        .command('hits')
        .description('Show the top players by hits')
        .action(msg => {
            let stats = scrapers.getStats('H', 'Top players by hits', msg, getResults);
        });

    franchiseSubCmds
        .command('ab')
        .description('Show the top players by at bats')
        .action(msg => {
            let stats = scrapers.getStats('AB', 'Top players by at bats', msg, getResults);
        });

    franchiseSubCmds
        .command('2b')
        .description('Show the top players by doubles')
        .action(msg => {
            let stats = scrapers.getStats('2B', 'Top players by doubles', msg, getResults);
        });

    franchiseSubCmds
        .command('3b')
        .description('Show the top players by triples')
        .action(msg => {
            let stats = scrapers.getStats('3B', 'Top players by triples', msg, getResults);
        });

    franchiseSubCmds
        .command('hr')
        .description('Show the top players by home runs')
        .action(msg => {
            let stats = scrapers.getStats('HR', 'Top players by home runs', msg, getResults);
        });

    franchiseSubCmds
        .command('rbi')
        .description('Show the top players by runs batted in')
        .action(msg => {
            let stats = scrapers.getStats('RBI', 'Top players by runs batted in', msg, getResults);
        });

    franchiseSubCmds
        .command('r')
        .description('Show the top players by runs')
        .action(msg => {
            let stats = scrapers.getStats('R', 'Top players by runs', msg, getResults);
        });

    franchiseSubCmds
        .command('sb')
        .description('Show the top players by stolen bases')
        .action(msg => {
            let stats = scrapers.getStats('SB', 'Top players by stolen bases', msg, getResults);
        });

    franchiseSubCmds
        .command('bb')
        .description('Show the top players by walks')
        .action(msg => {
            let stats = scrapers.getStats('BB', 'Top players by walks', msg, getResults);
        });

    franchiseSubCmds
        .command('slg')
        .description('Show the top players by slugging %')
        .action(msg => {
            let stats = scrapers.getStats('SLG', 'Top players by slugging %', msg, getResults);
        });

    franchiseSubCmds
        .command('ops')
        .description('Show the top players by on-base plus slugging %')
        .action(msg => {
            let stats = scrapers.getStats('OPS', 'Top players by on-base + slugging %', msg, getResults);
        });

    franchiseSubCmds
        .command('w')
        .description('Show the top pitchers by wins')
        .action(msg => {
            let stats = scrapers.getStats('W', 'Top pitchers by wins', msg, getResults);
        });

    franchiseSubCmds
        .command('l')
        .description('Show the top pitchers by losses')
        .action(msg => {
            let stats = scrapers.getStats('L', 'Top pitchers by losses', msg, getResults);
        });

    franchiseSubCmds
        .command('sv')
        .description('Show the top pitchers by saves')
        .action(msg => {
            let stats = scrapers.getStats('SV', 'Top pitchers by saves', msg, getResults);
        });

    franchiseSubCmds
        .command('era')
        .description('Show the top pitchers by earned run avg')
        .action(msg => {
            let stats = scrapers.getStats('ERA', 'Top pitchers by earned run avg', msg, getResults);
        });

    franchiseSubCmds
        .command('hra')
        .description('Show the top pitchers by home runs allowed')
        .action(msg => {
            let stats = scrapers.getStats('HRA', 'Top pitchers by hr allowed', msg, getResults);
        });

    franchiseSubCmds
        .command('sho')
        .description('Show the top pitchers by shutouts')
        .action(msg => {
            let stats = scrapers.getStats('SHO', 'Top pitchers by shutouts', msg, getResults);
        });

    franchiseSubCmds
        .command('so')
        .description('Show the top pitchers by strikeouts')
        .action(msg => {
            let stats = scrapers.getStats('SO', 'Top pitchers by strikeouts', msg, getResults);
        });

    franchiseSubCmds
        .command('cg')
        .description('Show the top pitchers by complete games')
        .action(msg => {
            let stats = scrapers.getStats('CG', 'Top pitchers by complete games', msg, getResults);
        });

    franchiseSubCmds
        .command('ip')
        .description('Show the top pitchers by innings pitched')
        .action(msg => {
            let stats = scrapers.getStats('IP', 'Top pitchers by innings pitched', msg, getResults);
        });

    franchiseSubCmds
        .command('whip')
        .description('Show the top pitchers by whip')
        .action(msg => {
            let stats = scrapers.getStats('WHIP', 'Top pitchers by whip', msg, getResults);
        });

    function getResults(statsTable, msg) {
        let pre = "```\n";
        let post = "```";
        msg.channel.sendMessage(pre + statsTable.toString() + post);
    }
}