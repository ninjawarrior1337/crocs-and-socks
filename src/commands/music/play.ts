import HanamaruCommand from "../../structures/Command";
import {ShoukakuPlayer} from "shoukaku";

const commando = require('discord-akairo');
const ytdl = require('ytdl-core');

module.exports = class playAudio extends HanamaruCommand
{
    constructor()
    {
        super("play", {
            aliases: ['p', 'play'],
            description: "Plays music in the author's current channel",
            args: [
                {
                    id: 'url',
                    type: "string",
                    match: "rest"
                }
            ],
        });
    }

    async exec(msg, args) {
        let player: ShoukakuPlayer;
        let node;

        // @ts-ignore
        if(this.client.shoukaku.getPlayer(msg.member.voiceChannelID))
        {
            // @ts-ignore
            player = this.client.shoukaku.getPlayer(msg.member.voiceChannelID);
        }
        else {
            node = this.client.shoukaku.getNode()
        }

        let data = await node.rest.resolve(args.url);
        if(!data) return;
        if(Array.isArray(data)) data = data[0];

        player = await node.joinVoiceChannel({
            guildID: msg.guild.id,
            voiceChannelID: msg.member.voiceChannelID
        });
        await player.playTrack(data.track);
        await msg.channel.send("Now Playing: " + data.info.title);
    }
};