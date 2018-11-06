const {Command} = require("discord.js-commando")

class theworld extends Command
{
    constructor(client)
    {
        super(client, {
            description: "Plays theworld in the executer's current channel or the specified channel.",
            name: "theworld",
            memberName: "theworld",
            group: "weeb",
            args: [{
                key: "voiceChannel",
                prompt: "Which voice channel do you want to play the world! in?",
                type: "string",
                default: "executer"
            }]
        })
    }

    async run(msg, args)
    {
        let connection;

        if(args.voiceChannel === "executer")
            connection = await msg.member.voiceChannel.join()
        else
            connection = await client.channels.get(args.voiceChannel.join());

        let dispatcher = await connection.playFile("audio/theworld.mp3", {passes: 5});

        dispatcher.on("end", () => {
            setTimeout(() => {
                connection.disconnect()
            }, 500)
        })
    }
}

module.exports = theworld