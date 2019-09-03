import { Command } from "discord-akairo";
import {Message, Permissions} from "discord.js";
import HanamaruCommand from "../../structures/Command";

export default class settings extends HanamaruCommand
{
    constructor()
    {
        super("settings", {
            aliases: ["settings", "db", "set"],
            args: [
                {
                    id: "key",
                    type: "string",
                },
                {
                    id: "func",
                    type: "string",
                    default: "get"
                }
            ],
            userPermissions: "ADMINISTRATOR"
        })
    }

    async exec(msg: Message, args)
    {
        switch (args.func) {
            case "get":
                await msg.reply(this.client.provider.get(msg.guild.id, args.key, ""));
                break;
            case "on":
                this.client.provider.set(msg.guild.id, args.key, true);
                await msg.reply(`Changed ${args.key} -> ${args.func}`);
                break;
            case "off":
                this.client.provider.set(msg.guild.id, args.key, false);
                await msg.reply(`Changed ${args.key} -> ${args.func}`);
                break;
        }
    }
}