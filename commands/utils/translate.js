const commando = require('discord.js-commando');
const translateApi = require('@k3rn31p4nic/google-translate-api');


module.exports = class translate extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "translate",
            aliases: ['translate', 'trans', 'tla'],
            group: "utils",
            memberName: "translate",
            description: "Translate a string to another language",
            args: [
                {
                    key: "textInput",
                    type: "string",
                    prompt: "Please input string to translate"
                },
                {
                    key: "outputLang",
                    type: "string",
                    prompt: "Please enter the language you want to translate to",
                    default: "en"
                }
            ]
        })
    }

    async run(msg, args)
    {
        try
        {
            let res = await translateApi(args.textInput, {to: args.outputLang});
            msg.reply(res.text)
        }
        catch (e) {
            console.error(e);
            msg.reply(`ERROR: ${e.message}`)
        }
    }
}
