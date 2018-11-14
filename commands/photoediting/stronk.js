var fs = require('fs');
var commando = require('discord.js-commando');
var text2png = require('text2png');
const stronkLib = require('../../testing/stronk');

class stronk extends commando.Command
{
    constructor(client) {
        super(client, {
            description: "Makes stronk text",
            aliases: ["stronk", "mugi"],
            memberName: "stronk",
            name: "stronk",
            group: "fun",
            args: [
                {
                    key: "text",
                    prompt: "What text do you want?",
                    type: "string"
                },
                {
                    key: "color",
                    prompt: "What do you want the background color to be?",
                    type: "string",
                    validate: (val, msg, arg) => {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val)
                    },
                    default: "#ff006e"
                }
            ]
        });
    }

    async run(msg, args)
    {
        msg.reply({files: [await stronkLib(args.text, args.color)]})
    }
}

module.exports = stronk