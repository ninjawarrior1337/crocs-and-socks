const commando = require('discord.js-commando')
const _ = require("underscore")

const extraThiccDict = require("../../data/extrathicc");

class extrathicc extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "extrathicc",
            aliases: ["thicc", "extrathicc"],
            memberName: "extrathicc",
            group: "fun",
            description: "Converts text into its extra thicc equivalent",
            args: [{
                key: "input",
                prompt: "What do you want to make extra thicc?",
                type: "string"
            }]
        })
    }

    async run(msg, args)
    {
        let inputString = args.input;
        let inputList = inputString.split("");

        let outputArray = _.map(inputList, function (num)
        {
            if(_.allKeys(extraThiccDict).includes(num))
            {
                return extraThiccDict[num]
            }
            else
            {
                return num
            }
        }
        )

        msg.channel.send(outputArray.join(""))
    }
}

module.exports = extrathicc