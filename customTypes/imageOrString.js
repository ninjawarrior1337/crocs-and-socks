const commando = require('discord.js-commando')
const text2png = require('text2png')

class imageOrString extends commando.ArgumentType
{
    constructor(client)
    {
        super(client, "imageorstring")
    }

    validate(val, msg, arg)
    {
        if(val !== "")
        {
            if(msg.attachments.array()[0] !== undefined)
            {
                return true
            }
            else
                return true
        }
        else
        {
            return false
        }
    }

    parse(val, msg, arg)
    {
        if(msg.attachments.array()[0])
        {
            return(msg.attachments.array()[0].url)
        }
        else
            return(val)
    }

    isEmpty(val, msg, arg)
    {
        return val === undefined && msg.attachments.array()[0] === undefined
    }
}

module.exports = imageOrString;