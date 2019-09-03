const {Command} = require("discord-akairo")

export default class dumbhoes extends Command
{
    constructor()
    {
        super("dumbhoes", {
            description: "Gives executor dumb hoes role",
            name: "dumbhoes",
            group: "utils",
            memberName: "dumbhoes",
            aliases: ["dumbhoes"]
        })
    }

    async exec(msg, args)
    {
        let role = msg.guild.roles.find(r => r.name === "dumb hoes")
        msg.member.addRole(role)
        msg.reply(`Role ${role.name} given successfully`)
    }
}