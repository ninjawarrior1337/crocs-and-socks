const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

module.exports = class playAudio extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "play",
            aliases: ['p'],
            group: "music",
            memberName: "play",
            description: "Plays music in the author's current channel",
            args: [
                {
                    key: 'url',
                    label: 'url',
                    prompt: "What URL would you like to play",
                    type: "string",
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
            try {
                this.client.connection = await msg.member.voiceChannel.join()
            } catch (error) {
                
            }
            
            if(url.includes("youtube.com") || url.includes("youtu.be"))
            {
                dispatcher = this.client.connection.playStream(ytdl(url, { filter : 'audioonly' }));
            }
            else
            {
                dispatcher = this.client.connection.playStream(url);
            }
        }
        else
        {
            return msg.reply("Please join a voice channel first.")
        }
    }
};