import {Command, CommandInfo, CommandMessage} from 'discord.js-commando'
import HanamaruClient from "./client";
import {Message} from "discord.js";

export default class HanamaruCommand extends Command {
    constructor(client: HanamaruClient, info: CommandInfo) {
        super(client, info);
    }

    run(message: CommandMessage, args: object | string | string[], fromPattern: boolean): Promise<Message | Message[]> {
        return super.run(message, args, fromPattern);
    }
}