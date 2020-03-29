import * as path from 'path'
import imageOrUrl from './customTypes/imageOrString';
import HanamaruClient from './structures/client';
import {Attachment} from "discord.js";

function main() {
    require('dotenv').config();

    if(!process.env.TOKEN)
    {
        console.log('Please provide a bot token.')
        process.exit()
    }

    const client = new HanamaruClient(
        {
            owner: process.env.OWNER,
            commandPrefix: process.env.PREFIX ? process.env.PREFIX : "?",
        }
    );

    client.login(process.env.TOKEN);

    client.on("ready", () => {
        console.log(`Sucessfully logged in as ${client.user.username}`);
        client.user.setActivity("Aqours Songs", {type: "LISTENING"});
    });

    client.on("error", e => console.error(e));
    client.on("warn", e => console.warn(e));


    process.on("SIGINT", async () => {
        await client.destroy();
        process.exit();
    });

}

main();
