var fs = require('fs');
var commando = require('discord-akairo');
var text2png = require('text2png');
const stronkLib = require('../../helpers/stronk');

class stronk extends commando.Command
{
    constructor() {
        super("stronk", {
            description: "Makes stronk text",
            aliases: ["stronk", "mugi"],
            memberName: "stronk",
            name: "stronk",
            group: "fun",
            args: [
                {
                    id: "text",
                    prompt: "What text do you want?",
                    type: "string",
                    match: "rest"
                },
                {
                    id: "color",
                    prompt: "What do you want the background color to be?",
                    type: "string",
                    match: "prefix",
                    prefix: "color=",
                    validate: (val, msg, arg) => {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val)
                    },
                    default: "#ff006e"
                }
            ]
        });
    }

    async exec(msg, args)
    {
        msg.reply({files: [await stronkLib.doEdit(args.text, args.color)]})
    }
}

module.exports = stronk