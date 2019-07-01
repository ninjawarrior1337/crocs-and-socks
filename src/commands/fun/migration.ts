import { Command } from "discord-akairo";
import {Message} from 'discord.js'

export default class migration extends Command
{
    constructor()
    {
        super("migration", {
            aliases: ["migrate", "mgr"],
            description: "Moves everyone in current vc to specified vc",
            args: [
                {
                    id: "toVc",
                    type: "voiceChannel"
                }
            ]
        })
    }

    async exec(msg: Message, args)
    {
        for(let x of msg.member.voiceChannel.members)
        {
            await x[1].setVoiceChannel(args.toVc)
        }
    }
}