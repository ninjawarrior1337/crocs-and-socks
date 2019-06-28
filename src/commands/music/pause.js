const commando = require('discord-akairo');

module.exports = class pause extends commando.Command
{
    constructor() {
        super("pause", {
            name: "pause",
            aliases: ['pause'],
            group: "music",
            memberName: "pause",
            description: "Pauses the currently playing song",
            guild: true
        })
    }

    async exec(msg)
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