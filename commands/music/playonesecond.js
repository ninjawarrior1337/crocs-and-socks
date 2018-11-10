const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

module.exports = class playonesecond extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "playonesec",
            aliases: ['pos'],
            group: "music",
            memberName: "playoneseccond",
            description: "Plays music in the author's current channel for 1 second of audio",
            args: [
                {
                    key: 'url',
                    label: 'url',
                    prompt: "What URL would you like to play",
                    type: "string",
                },
                {
                    key: 'channel',
                    label: 'channel',
                    prompt: "What channel would you like to play this in?",
                    type: "string",
                    default: "executer"
                }
            ],
            guildOnly: true
        });
    }

    async run(msg, args) {
        let dispatcher;
        const url = args.url;
        const author = msg.author;

        if (msg.member.voiceChannel)
        {
            try
            {
                if(args.channel === "executer")
                    this.client.connection = await msg.member.voiceChannel.join()
                else
                    this.client.connection = await this.client.channels.get(args.channel).join()
            } catch (error) {

            }

            if(url.includes("youtube.com") || url.includes("youtu.be"))
            {
                this.client.connection.playStream(ytdl(url, { filter : 'audioonly' }));
                setTimeout(() => {
                    this.client.connection.disconnect()
                }, 5000)
            }
            else
            {
                this.client.connection.playStream(url);
                setTimeout(() => {
                    this.client.connection.disconnect()
                }, 5000)
            }
        }
        else
        {
            return msg.reply("Please join a voice channel first.")
        }
    }
};