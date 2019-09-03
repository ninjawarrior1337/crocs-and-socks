import {Command} from  "discord-akairo"
import {Message} from 'discord.js'
import HanamaruCommand from "../../structures/Command";
const _ = require('lodash')

export default class audioVolume extends HanamaruCommand
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
        if(this.client.provider.get(msg.guild.id, "earrape", true))
            await this.client.provider.set(msg.guild.id, "volume", args.vol/100);
        else
            await this.client.provider.set(msg.guild.id, "volume", _.clamp(args.vol/100, 0, 200/100));

        let toVol = args.vol/100

        if(msg.member.voiceChannel !== null)
        {
            let connection = msg.guild.voiceConnection.dispatcher;
            await connection.setVolumeLogarithmic(toVol);
        }

        msg.reply(`Volume set to ${args.vol}%`)
    }

}