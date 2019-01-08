const {Command} = require('discord.js-commando');

module.exports = class invite extends Command
{
    constructor(client)
    {
        super(client, {
            name: "invite",
            group: "utils",
            description: "Replys with an ivite link in order to invite the bot",
            memberName: "invite"
        })
    }

    async run(msg)
    {
        if(this.client.user.bot)
        {
            msg.reply(`Thank you for inviting me to your server! \n Use this to invite me: ${await this.client.generateInvite()}`)
        }
        else
        {
            msg.reply("As this is a user account, I can not generate a link for you.")
        }
    }
}