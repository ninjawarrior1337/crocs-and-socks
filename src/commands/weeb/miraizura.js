import { VoiceChannel, Channel } from "discord.js";

import soundEffect from "../../structures/soundEffect";

export default class miraizura extends soundEffect
{
    constructor()
    {
        super("miraizura", ["zura", "mirai", "miraizura"], "mirai-zura.mp3")
    }
}