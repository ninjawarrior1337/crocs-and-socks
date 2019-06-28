const commando = require('discord-akairo');

module.exports = class resume extends commando.Command
{
    constructor() {
        super("resume", {
            name: "resume",
            aliases: ['resume'],
            group: "music",
            memberName: "resume",
            description: "Resumes the previously playing song",
            guild: true
        })
    }

    async exec(msg)
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