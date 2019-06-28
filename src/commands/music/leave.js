const commando = require("discord-akairo")

module.exports = class leaveChannel extends commando.Command
{
    constructor()
    {
        super("leave", {
            name: "leave",
            aliases: ['leave'],
            group: "music",
            memberName: "leave",
            description: "Leave the channel currently in"
        })
    }

    async exec(msg, guild)
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