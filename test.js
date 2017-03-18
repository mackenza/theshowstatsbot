const getAvg = require('./lib/scrapers/avg');

function getResults(avgStats) {
    console.log(avgStats.toString());
}

getAvg.getAvg(getResults);