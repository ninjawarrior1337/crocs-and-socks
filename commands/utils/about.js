const {Command} = require("discord.js-commando")
const {RichEmbed} = require('discord.js')

class about extends Command
{
    constructor(client)
    {
        super(client, {
            description: "Shows information about the bot.",
            name: "about",
            group: "utils",
            memberName: "about",
            aliases: ["about", "info", "introduce", "introduction", "intro"]
        })
    }

    async run(msg)
    {
        var embed = new RichEmbed()
            .setColor(0x3399ff)
            .setTitle("こんにちは (Hello), I am Tyler's discord bot...")
            .setDescription("I am a very useful, [open source](http://github.com/ninjawarrior1337/crocs-and-socks), and very much a weeb bot.\nIm also powered by the best programming language, JavaScript!")
            .setURL("http://github.com/ninjawarrior1337/crocs-and-socks")
            .setThumbnail(this.client.user.avatarURL)
        msg.channel.send(embed)
    }
}

module.exports = about