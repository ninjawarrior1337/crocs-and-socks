const commando = require('discord.js-commando');
const _ = require('lodash')

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
        if(this.client.provider.get(msg.guild, "earrape", true))
            await this.client.provider.set(msg.guild, "volume", args.vol/100);
        else
            await this.client.provider.set(msg.guild, "volume", _.clamp(args.vol, 0, 200/100));

        if(msg.guild.voiceConnection !== null)
        {
            let connection = msg.guild.voiceConnection.dispatcher;
            await connection.setVolumeLogarithmic(this.client.provider.get(msg.guild, "volume"));
        }

        msg.reply(`Volume set to ${this.client.provider.get(msg.guild, "volume") * 100 + "%"}`)
    }

}