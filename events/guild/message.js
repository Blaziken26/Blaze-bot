const { prefix } = require("../../config.json");
module.exports = async (client, message,) =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();
    if(!message.content.startsWith(prefix)) return;
    let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandFile) commandFile.run(client, message, args)
}