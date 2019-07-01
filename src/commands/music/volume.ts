import {Command} from  "discord-akairo"
import {Message} from 'discord.js'
const _ = require('lodash')

module.exports = class audioVolume extends Command
{
    constructor ()
    {
        super("volume", {
            aliases: ["vol", "volume"],
            description: "Change the Volume of currently playing audio",
            args: [
                {
                    id: 'vol',
                    type: "number",
                }
            ]
        })
    }

    async exec(msg: Message, args)
    {
        // if(this.client.provider.get(msg.guild, "earrape", true))
        //     await this.client.provider.set(msg.guild, "volume", args.vol/100);
        // else
        //     await this.client.provider.set(msg.guild, "volume", _.clamp(args.vol/100, 0, 200/100));

        let toVol = args.vol/100

        if(msg.guild.voiceConnection !== null)
        {
            let connection = msg.guild.voiceConnection.dispatcher;
            await connection.setVolumeLogarithmic(toVol);
        }

        msg.reply(`Volume set to ${toVol} * 100 + "%"}`)
    }

}