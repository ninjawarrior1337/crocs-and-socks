const commando = require("discord.js-commando")
const hepburn = require("hepburn")

module.exports = class hiragana extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Convert romaji to katakana",
            group: "weeb",
            name: "katakana",
            aliases: ["kata", "katakana", "kagana"],
            memberName: "katakana",
            args: [{
                "key": "romaji",
                "label": "romaji",
                "prompt": "Please input the romaji",
                "type": "string"
            }]
        })
    }

    async run(msg, args)
    {
        msg.channel.send(hepburn.toKatakana(args.romaji))
    }
}