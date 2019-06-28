import { Command } from "discord-akairo";

const hepburn = require("hepburn")

export default class hiragana extends Command
{
    constructor()
    {
        super("hiragana", {
            description: "Convert romaji to hiragana",
            group: "weeb",
            name: "hiragana",
            aliases: ["hira", "hiragana", "higana"],
            memberName: "hiragana",
            args: [{
                id: "romaji",
                label: "romaji",
                type: "string"
            }]
        })
    }

    async exec(msg, args)
    {
        return msg.channel.send(hepburn.toHiragana(args.romaji))
    }
}