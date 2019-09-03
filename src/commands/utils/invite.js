const {Command} = require('discord-akairo');

export default class invite extends Command
{
    constructor()
    {
        super("invite", {
            name: "invite",
            group: "utils",
            aliases: ["invite"],
            description: "Replys with an invite link in order to invite the bot",
            memberName: "invite"
        })
    }

    async exec(msg)
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