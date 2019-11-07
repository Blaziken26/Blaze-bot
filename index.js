const {Collection, Client } = require("discord.js");
const { token, prefix } = require("./config.json");
const client = new Client();
["commands", "aliases"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));
client.login(process.env.token);