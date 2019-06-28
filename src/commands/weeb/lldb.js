import { CommandoClient, Command, CommandMessage } from "discord-akairo";

import Fuse from 'fuse.js'
import * as _ from 'underscore'
import {RichEmbed} from 'discord.js'

var fuseOptions = {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "name",
        "japanese_name",
        "birthday",
        "astrological_sign"
    ]
};

const idols = new Fuse(require("./../../../assets/data/idols.json").results, fuseOptions);

export default class lldb extends Command
{
    constructor()
    {
        super("lldb",{
            description: "Looks up Love Live idol information from the given search query",
            args:
            [
                {
                    id: "query",
                    prompt: {start: "What do you want to search for?"},
                    type: "string"
                }
            ],
            aliases: ["lldb", "lovelivedb"]
        })
    }

    async exec(msg, args)
    {
        var results = idols.search(args.query);
        var embedList = [];
        results.forEach((idol) =>
        {
            embedList.push(
                new RichEmbed({
                    title: idol.name,
                    description: idol.summary,
                    url: idol.wikia_url,
                    fields: [
                        {
                            name: "Age",
                            value: idol.age ? idol.age : 'Unknown',
                            inline: true
                        },
                        {
                            name: "Astrological Sign",
                            value: idol.astrological_sign ? idol.astrological_sign : 'Unknown',
                            inline: true

                        },
                        {
                            name: "Blood Type",
                            value: idol.blood,
                            inline: true

                        },
                        {
                            name: "Height",
                            value: idol.height + "cm",
                            inline: true

                        },
                        {
                            name: "Measurements",
                            value: idol.measurements ? idol.measurements : 'Unknown',
                            inline: true

                        },
                        {
                            name: "Main Unit",
                            value: idol.main_unit,
                            inline: true

                        },
                        {
                            name: "Sub Unit",
                            value: idol.sub_unit,
                            inline: true

                        },
                        {
                            name: "Birthday",
                            value: idol.birthday,
                            inline: true

                        }
                    ]
                }).setThumbnail("https:" + idol.chibi_small)
            )
        })
        embedList.forEach((embed) => {
            msg.reply(embed)
        })

    }
}