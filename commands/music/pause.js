const commando = require('discord.js-commando');

module.exports = class moe extends commando.Command
{
    constructor(client) {
        super(client, {
            name: "pause",
            aliases: ['pause'],
            group: "music",
            memberName: "pause",
            description: "Pauses the currently playing song",
            guild: true
        })
    }

    async run(msg)
    {
        if(msg.guild.voiceConnection.dispatcher)
        {
            msg.guild.voiceConnection.dispatcher.pause()
        }
        else
        {
            msg.reply("Can't Pause while nothing is playing...")
        }
    }
}