const persistLib = require('../persist');

module.exports = subCommands => {        

    let configSubCmds = subCommands
        .command('config')
        .description('Commands to help you configure the bot for your Franchise');    

    configSubCmds
        .command('set-server-franchise <franchise-id>')
        .description('Set the default Franchise ID for this Discord server')
        .action(msg => {
            let server = msg.guild.name;
            let user = msg.author.toString();
            persistLib.checkExisting(user, server, showResults);
        });

    function showResults(doc) {
        console.log('this is the return', doc.franchise);
    }
}