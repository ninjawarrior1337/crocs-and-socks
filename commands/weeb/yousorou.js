const {Command} = require("discord.js-commando")

class yousorou extends Command
{
    constructor(client)
    {
        super(client, {
            description: "Plays yousorou in the executer's current channel or the specified channel.",
            name: "yousorou",
            aliases: ["yousoro", "yousorou", "ヨーソロー"],
            memberName: "yousorou",
            group: "weeb",
            args: [{
                key: "voiceChannel",
                prompt: "Which voice channel do you want to play yousorou! in?",
                type: "channel"
            }]
        })
    }

    async run(msg, args)
    {
        let connection = await args.voiceChannel.join();

        let dispatcher = await connection.playFile("audio/yousorou.mp3", {passes: 5});

        dispatcher.on("end", () => {
            setTimeout(() => {
                connection.disconnect()
            }, 500)
        })
    }
}

module.exports = yousorou