const {Command} = require("discord-akairo")
const {RichEmbed} = require('discord.js')

class about extends Command
{
    constructor()
    {
        super("about", {
            description: "Shows information about the bot.",
            name: "about",
            group: "utils",
            memberName: "about",
            aliases: ["about", "info", "introduce", "introduction", "intro"]
        })
    }

    async exec(msg)
    {
        var embed = new RichEmbed()
            .setColor(0x3399ff)
            .setTitle("こんにちは (Hello), I am Tyler's discord bot...")
            .setDescription("I am a very useful, [open source](http://github.com/ninjawarrior1337/crocs-and-socks), and very much a weeb bot.\nIm also powered by the best programming language, JavaScript!")
            .setURL("http://github.com/ninjawarrior1337/crocs-and-socks")
            .setThumbnail(this.client.user.avatarURL)
            .addField("Commit Hash", process.env.COMMIT_HASH ? process.env.COMMIT_HASH : "DEV")
            .addField("Commit Message", process.env.COMMIT_MESSAGE ? process.env.COMMIT_MESSAGE : "DEV")
            .addField("Build Date", process.env.BUILD_DATE ? process.env.BUILD_DATE : "DEV")
        msg.channel.send(embed)
    }
}

module.exports = about