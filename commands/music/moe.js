const commando = require('discord.js-commando');

module.exports = class moe extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "moe",
            aliases: ['moe'],
            group: "music",
            memberName: "moe",
            description: "Play music from listen.moe",
            guildOnly: true
        })
    }

    async run(msg)
    {
        if(msg.member.voiceChannel)
        {
            if (msg.guild.voiceConnection) {
                msg.guild.voiceConnection.playArbitraryInput("https://listen.moe/stream")
            }
            else {
                const connection = await msg.member.voiceChannel.join()
                connection.playArbitraryInput("https://listen.moe/stream")
            }
        }
        else
            msg.reply("Please join a voice chanel first.")
    }
}
