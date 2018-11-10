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
            connection = await this.client.channels.get(args.voiceChannel).join();

        let dispatcher = await connection.playFile("audio/mirai-zura.mp3", {passes: 5});
    }
}

module.exports = miraizura;