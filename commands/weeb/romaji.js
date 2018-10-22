const commando = require("discord.js-commando")
const hepburn = require("hepburn")

module.exports = class romaji extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Convert hiragana/katakana to romaji",
            group: "weeb",
            name: "romaji",
            aliases: ["roma", "romaji", "romanji"],
            memberName: "romaji",
            args: [{
                "key": "kana",
                "label": "kana",
                "prompt": "Please input the kana",
                "type": "string"
            }]
        })
    }

    async run(msg, args)
    {
        msg.channel.send(hepburn.fromKana(args.kana))
    }
}