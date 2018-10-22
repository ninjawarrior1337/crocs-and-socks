const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class NitroCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'nitro',
            description: 'Send a fake embed about Discord Nitro',
            group: "fun",
            memberName: 'nitro'
        });
    }

    async run(msg)
    {
        const embed = new RichEmbed()
            .setColor(5267072)
            .setAuthor(`Discord Nitro Message`, 'https://cdn.discordapp.com/emojis/264287569687216129.png ')
            .setDescription('[Discord Nitro](https://discordapp.com/nitro) is **required** to view this message.')
            .setThumbnail('https://cdn.discordapp.com/attachments/194167041685454848/272617748876492800/be14b7a8e0090fbb48135450ff17a62f.png');

        if(msg.channel.type !== "dm")
        {
            if(msg.channel.type !== "group")
            {
                msg.delete().then(msg => {
                    msg.channel.send({ embed });
                });
            }
            else
                msg.channel.send({embed})
        }
        else
            msg.channel.send({embed})
    }
};