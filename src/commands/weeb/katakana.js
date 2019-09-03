import { Command } from "discord-akairo";

const hepburn = require("hepburn")

export default class katakana extends Command
{
    constructor()
    {
        super("katakana", {
            description: "Convert romaji to katakana",
            name: "katakana",
            aliases: ["kata", "katakana", "kagana"],
            args: [{
                "id": "romaji",
                "label": "romaji",
                "prompt": "Please input the romaji",
                "type": "string"
            }]
        })
    }

    async exec(msg, args)
    {
        return msg.channel.send(hepburn.toKatakana(args.romaji))
    }
}