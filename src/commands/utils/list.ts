import Akairo from "discord-akairo"
import Discord from 'discord.js'

export default class ListRegex extends Akairo.Command
{
    constructor()
    {
        super("list", {
            aliases: ["list"],
            typing: true,
            args: [
                {
                    id: "regex",
                    type: "string",
                    match: "rest"
                },
                {
                    id: "server",
                    type: "guild",
                    match: "prefix",
                    prefix: "guild="
                }
            ]
        })
    }

    async exec(msg: Discord.Message, args)
    {
        let regex = new RegExp(args.regex)
        let server: Discord.Guild = args.server

        if(server === undefined)
        {
            server = msg.guild
        }

        let members: Discord.GuildMember[] | string[] = server.members.array()

        members = members.map(member => {
            return member.displayName
        })
        if(args.regex !== undefined)
        {
            members = members.filter((member) => {
                return regex.test(member)
            })
        }
        msg.reply(members.toString())
    }
}