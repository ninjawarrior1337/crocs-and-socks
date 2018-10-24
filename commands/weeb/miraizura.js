const {Command} = require('discord.js-commando');
const discord = require('discord.js');

class miraizura extends Command
{
    constructor(client)
    {
        super(client, {
            description: "Plays mirai zura in the executer's current channel or the specified channel.",
            name: "miraizura",
            aliases: ["zura", "miraizura", "mirai"],
            memberName: "miraizura",
            group: "weeb",
            args: [{
                key: "voiceChannel",
                prompt: "Which voice channel do you want to play zura! in?",
                type: "channel"
            }]
        })
    }

    async run(msg, args)
    {
        let connection = await args.voiceChannel.join();

        let dispatcher = connection.playFile("audio/mirai-zura.mp3");

        dispatcher.on("end", () => {
            setTimeout(() => {
                connection.disconnect()
            }, 500)
        })
    }
}

module.exports = miraizura;