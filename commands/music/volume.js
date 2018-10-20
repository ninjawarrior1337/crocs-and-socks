const commando = require('discord.js-commando');

module.exports = class audioVolume extends commando.Command
{
    constructor (client)
    {
        super(client, {
            name: "volume",
            aliases: ["vol", "volume"],
            group: "music",
            description: "Change the Volume of currently playing audio",
            memberName: "volume",
            args: [
                {
                    key: 'vol',
                    label: 'volume',
                    prompt: "What would you like to change the volume to?",
                    type: "integer",
                }
            ]
        })
    }

    async run(msg, args)
    {
        const connection = msg.guild.voiceConnection.dispatcher;
        await connection.setVolume(args.vol);
    }

}