import {Message} from 'discord.js'
export default function imageOrUrl(url, message)
{
    if(message.attachments.array()[0])
        return message.attachments.array()[0]
    else if(url)
        return url
    else
        return null
}