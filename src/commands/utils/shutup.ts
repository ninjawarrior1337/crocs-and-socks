import { Command } from "discord-akairo";
import { Message } from "discord.js"

export default class shutup extends Command
{
    constructor()
    {
        super("shutup", {
            aliases: ["shutup"],
            description: "Mutes everyone in the user's VC except the user.",
            userPermissions: ["MUTE_MEMBERS"]
        })
    }

    async exec(msg: Message)
    {
        if(msg.member)
        {
            if(msg.member.voiceChannel)
            {
                let vc = msg.member.voiceChannel
                let members = vc.members

                for await(let member of members.array())
                {
                    await member.setMute(true)
                }
            }
            else
            {
                msg.reply("You must be in a VC to use this command")
            }
        }
        else
        {
            msg.reply("What the frick are you doing?")
        }
    }
}