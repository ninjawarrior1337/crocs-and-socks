const commando = require('discord-akairo')
const _ = require("underscore")

const extraThiccDict = require("../../../assets/data/extrathicc");

export default class extrathicc extends commando.Command
{
    constructor()
    {
        super("extrathicc", {
            aliases: ["thicc", "extrathicc"],
            description: "Converts text into its extra thicc equivalent",
            args: [{
                id: "input",
                prompt: "What do you want to make extra thicc?",
                type: "string"
            }]
        })
    }

    async exec(msg, args)
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