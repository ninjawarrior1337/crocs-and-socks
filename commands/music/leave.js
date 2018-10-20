const commando = require("discord.js-commando")

module.exports = class leaveChannel extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "leave",
            aliases: ['leave'],
            group: "music",
            memberName: "leave",
            description: "Leave the channel currently in"
        })
    }

    async run(msg, guild)
    {
        try 
        {
            if(msg.guild.voiceConnection)
            {
                await msg.guild.voiceConnection.disconnect()
            }
        }
        catch (error) {
            console.log(error)
        }
    }
}