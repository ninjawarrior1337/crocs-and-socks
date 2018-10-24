const commando = require("discord.js-commando");
const Fuse = require('fuse.js');
const _ = require('underscore')
const {RichEmbed} = require("discord.js")

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

const idols = new Fuse(require("../../data/idols").results, fuseOptions);

// class idol
// {
//     constructor(name,
//                 japaneseName,
//                 age,
//                 school,
//                 birthday,
//                 astrological_sign,
//                 blood,
//                 height,
//                 measurements,
//                 favorite_food,
//                 least_favorite_food
//     )
//     {
//         this.japaaneseName =
//     }
// }

class lldb extends commando.Command
{
    constructor(client)
    {
        super(client,{
            description: "Looks up Love Live idol information from the given search query",
            memberName: "lldb",
            name: "lldb",
            group: "weeb",
            args:
            [
                {
                    key: "query",
                    prompt: "What do you want to search for?",
                    type: "string"
                }
            ]
        })
    }

    async run(msg, args)
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
                            value: idol.age ? idol.age : 'Unknown'
                        },
                        {
                            name: "Astrological Sign",
                            value: idol.astrological_sign ? idol.astrological_sign : 'Unknown'
                        },
                        {
                            name: "Blood Type",
                            value: idol.blood
                        },
                        {
                            name: "Height",
                            value: idol.height + "cm"
                        },
                        {
                            name: "Measurements",
                            value: idol.measurements ? idol.measurements : 'Unknown'
                        },
                        {
                            name: "Main Unit",
                            value: idol.main_unit
                        },
                        {
                            name: "Sub Unit",
                            value: idol.sub_unit
                        },
                        {
                            name: "Birthday",
                            value: idol.birthday
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

module.exports = lldb;