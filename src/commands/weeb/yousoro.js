import { CommandoClient, Command, CommandMessage } from "discord-akairo";

export default class yousoro extends Command
{
    constructor()
    {
        super("yousoro", {
            description: "Plays yousorou in the executer's current channel or the specified channel.",
            name: "yousorou",
            aliases: [
                "yousoro", 
                "yousorou", 
                "ヨーソロー"
            ],
            memberName: "yousorou",
            group: "weeb",
            args: [{
                id: "vc",
                type: "voiceChannel",
                default: "executer"
            }]
        })
    }

    async exec(msg, args)
    {
        let connection;

        console.log(args.vc)
        if(args.vc === "executer")
            connection = await msg.member.voiceChannel.join()
        else
        {
            connection = args.vc.join();
        }

        let dispatcher = await connection.playFile(path.join(__dirname, '..', "..", "..", "assets", "audio", "yousoro.mp3"), {passes: 5});
    }
}