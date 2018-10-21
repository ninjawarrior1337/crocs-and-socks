const commando = require('discord.js-commando');

module.exports = class moe extends commando.Command
{
    constructor(client) {
        super(client, {
            name: "resume",
            aliases: ['resume'],
            group: "music",
            memberName: "resume",
            description: "Resumes the previously playing song",
            guild: true
        })
    }

    async run(msg)
    {
        if(msg.guild.voiceConnection.dispatcher)
        {
            msg.guild.voiceConnection.dispatcher.resume()
        }
        else
        {
            msg.reply("Can't Resume while nothing was being played...")
        }
    }
}