module.exports = subCommands => {        

    let configSubCmds = subCommands
        .command('config')
        .description('Commands to help you configure the bot for your Franchise');    

    configSubCmds
        .command('set-id <franchise-id>')
        .description('Set the ID of the Franchise you want for stats')
        .action(msg => {
            let user = msg.author.toString();
            msg.channel.sendMessage(user + ' this command not yet available');
        })
}