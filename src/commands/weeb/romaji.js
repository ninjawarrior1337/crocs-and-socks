const hepburn = require("hepburn")
import {Command} from 'discord-akairo'

export default class romaji extends Command
{
    constructor()
    {
        super("romaji", {
            description: "Convert hiragana/katakana to romaji",
            group: "weeb",
            name: "romaji",
            aliases: ["roma", "romaji", "romanji"],
            memberName: "romaji",
            args: [{
                "id": "kana",
                "prompt": {start: "Please input your kana"},
                "type": "string"
            }]
        })
    }

    async exec(msg, args)
    {
        return msg.channel.send(hepburn.fromKana(args.kana))
    }
}