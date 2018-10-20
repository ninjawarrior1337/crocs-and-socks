const commando = require("discord.js-commando")
const hepburn = require("hepburn")

module.exports = class hiragana extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Convert romaji to hiragana",
            group: "weeb",
            name: "hiragana",
            aliases: ["hira", "hiragana", "higana"],
            memberName: "hiragana",
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
        msg.channel.send(hepburn.toHiragana(args.romaji))
    }
}