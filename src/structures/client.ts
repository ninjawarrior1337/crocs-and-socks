import path from 'path'
import {Shoukaku} from "shoukaku"
import Commando, {CommandoClientOptions} from "discord.js-commando"
import sqlite from "sqlite"

require('dotenv').config();

export default class HanamaruClient extends Commando.CommandoClient
{
    public shoukaku: Shoukaku;
    constructor(CommandoOptions: CommandoClientOptions)
    {
        super(CommandoOptions);

        this.setProvider(sqlite.open(path.join(__dirname, "settings.sql")).then(db => new Commando.SQLiteProvider(db)))
        this.registry.registerCommandsIn(path.join(__dirname, "..", "commands", "copypasta"))
        this.registry.registerDefaultCommands()
    }

    // private registerShoukaku()
    // {
    //     this.shoukaku.on("ready", (name) => console.log(`Lavalink node ${name} is ready!`))
    //
    //     this.shoukaku.on('error', (name, error) => console.log(`Lavalink Node: ${name} emitted an error.`, error));
    //
    //     this.on("ready", () => {
    //         if(process.env.LAVALINK_HOST) {
    //             this.shoukaku.build(
    //         [{
    //                     name: "mainNode",
    //                     port: parseInt(process.env.LAVALINK_PORT ? process.env.LAVALINK_PORT : ""),
    //                     auth: process.env.LAVALINK_PASS ? process.env.LAVALINK_PASS : "",
    //                     host: process.env.LAVALINK_HOST ? process.env.LAVALINK_HOST: ""
    //                 }],
    //             {id: this.user.id});
    //         }
    //     })
    // }

    public login(token) {
        // this.provider.init();
        // this.registerShoukaku();
        return super.login(token)
    }
}
