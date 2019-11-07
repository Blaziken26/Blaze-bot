module.exports = {
    config: {
        name: "hello",
        aliases: [],
        description: "A command that says hello",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        message.reply("Howdy")
        return;
    }
    
}