//requires the packages we need for this file
const { prefix } = require("../../config.json");

module.exports = async (client, message) => {
    //defines an array named "presences" that we can call to later
    let presences = [
        "Killing Warlocks since 1978",
        "It's real sniping hours",
        "Arc Titans are scary Titans",
        "Join Blaze's Server!",
        "011011100111010101110100",,
        "Hunter main, tiny brain",,
        "Titan main, big brain",
        "Slide me an Ace, Shotgun, and OEM pls",
        "twitch.tv/Megablaziken26",
    ]
    //creates a loop that will fire every 60 seconds
    setInterval(() => {
        const presence = Math.floor(Math.random() * (presences.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presences[presence]}`}, status: "dnd" });
    }, 6000)
    console.log(`${client.user.username} is online!`)
}