import {Command} from 'discord-akairo'
import {Message} from 'discord.js'

export default class fuck extends Command
{
    constructor()
    {
        super("fuck", {
            description: "Moves everyone to a voice channel and then deletes it.",
            aliases: ["fuck", "uwot"],
            userPermissions: ["MANAGE_CHANNELS", "MANAGE_GUILD"]
        })
    }

    async exec(msg: Message) {
        let channel = await msg.guild.createChannel("this is death", "voice")
        for await(let user of msg.member.voiceChannel.members)
        {
            await user[1].setVoiceChannel(channel)
        }
        await channel.delete()
        msg.channel.send("Done!")
    }
}