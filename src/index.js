import {ShardingManager} from "discord.js";

require('dotenv').config();

const manager = new ShardingManager("dist/bot.js", {token: process.env.TOKEN});

manager.spawn();

manager.on("launch", shard => console.log(`Launched Shard ${shard.id}`));