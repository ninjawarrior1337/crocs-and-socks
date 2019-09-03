import {AkairoClient} from "discord-akairo";
import path from 'path'
import LowDbProvider from "./LowDbProvider";
import {Shoukaku} from "shoukaku"

require('dotenv').config();

export default class HanamaruClient extends AkairoClient
{
    public provider: LowDbProvider;
    public shoukaku: Shoukaku;
    constructor(AkairoOptions, ClientOptions) 
    {
        super(AkairoOptions, ClientOptions)
        
        this.provider = new LowDbProvider(path.join(__dirname, "..", "..", "data", "db.json"))
        this.shoukaku = new Shoukaku(this, {})
    }

    private registerShoukaku()
    {
        this.shoukaku.on("ready", (name) => console.log(`Lavalink node ${name} is ready!`))

        this.shoukaku.on('error', (name, error) => console.log(`Lavalink Node: ${name} emitted an error.`, error));

        this.on("ready", () => {
            if(process.env.LAVALINK_HOST) {
                this.shoukaku.build(
            [{
                        name: "mainNode",
                        port: parseInt(process.env.LAVALINK_PORT ? process.env.LAVALINK_PORT : ""),
                        auth: process.env.LAVALINK_PASS ? process.env.LAVALINK_PASS : "",
                        host: process.env.LAVALINK_HOST ? process.env.LAVALINK_HOST: ""
                    }],
                {id: this.user.id});
            }
        })
    }

    public login(token) {
        this.provider.init();
        this.registerShoukaku();
        return super.login(token)
    }
}