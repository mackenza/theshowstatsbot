const persistLib = require('../persist');

module.exports = subCommands => {        

    let configSubCmds = subCommands
        .command('config')
        .description('Commands to help you configure the bot for your Franchise');    

    configSubCmds
        .command('set-server-franchise [franchise-id]')
        .option('-r, --remove', 'Remove (delete) the currently set server franchise ID')
        .option('-s, --show', 'Show the currently set franchise ID')
        .description('Set the default Franchise ID for this Discord server')
        .action((msg, franchiseId, opts) => {
            let server = msg.guild.name;
            let user = msg.author.toString();
            if (franchiseId) {
                persistLib.setServerFranchise(franchiseId, server, msg, showResults)
            }
            if (opts.show) {
                persistLib.checkExisting(user, server, msg, showResults);
            }
        });


    function showResults(id, msg) {
        console.log('result: ', id);
        msg.channel.sendMessage("The ID that will be used is: " + id);
    }
}