import HanamaruClient from "../structures/client";
import ytdl from "ytdl-core";
export default function enableBishop(client: HanamaruClient) {
    client.on("voiceStateUpdate", async (oldMember, newMember) =>
    {
        try{
            console.log(oldMember.voiceChannel.name)
            console.log(oldMember.user.id)
        }
        catch{

        }

        if(oldMember.voiceChannel === undefined && oldMember.user.id === "212335473887019008")
        {
            let connection = await newMember.voiceChannel.join()
            let stream = connection.playStream(ytdl("https://www.youtube.com/watch?v=M1wLtAXDgqg", { filter : 'audioonly' }));
            stream.setVolumeDecibels(120)
            stream.on("end", () => {
                setTimeout(() => {
                    connection.playStream(ytdl("https://www.youtube.com/watch?v=vTIIMJ9tUc8", {filter: "audioonly"}))
                    stream.setVolumeDecibels(120)
                }, 5000)
            })
        }
    })
}
