const jishoApiE = require('unofficial-jisho-api');
import {RichEmbed} from 'discord.js'
import { Command } from 'discord-akairo';
const hepburn = require('hepburn');

const jishoApi = new jishoApiE();

export default class jisho extends Command
{
    constructor()
    {
        super("jisho",{
            description: "Looks up the given string in Jisho.",
            memberName: "jisho",
            name: "jisho",
            group: "weeb",
            aliases: ["jisho"],
            args:
                [
                    {
                        id: "query",
                        prompt: "What do you want to search for?",
                        type: "string"
                    }
                ]
        })
    }

    async exec(msg, args)
    {
        var result = await jishoApi.searchForPhrase(args.query)

        var data = result.data[0]

        if(data === undefined)
        {
            return msg.reply("Could not find anything.") 
        }

        var embed = new RichEmbed()

        embed.setColor(0xff0000)

        embed.setTitle(data.japanese[0].word ? data.japanese[0].word : data.japanese[0].reading)

        embed.addField("Reading", `${data.japanese[0].reading} (${hepburn.fromKana(data.japanese[0].reading)})`, true)

        embed.addField("Meaning", data.senses[0].english_definitions[0])

        return msg.reply(embed)
    }
}