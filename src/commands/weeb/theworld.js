import { Command } from "discord-akairo";
import path from 'path'
import soundEffect from "../../structures/soundEffect";

export default class theworld extends soundEffect
{
    constructor()
    {
        super("theworld", ["theworld", "dio"], "theworld.mp3")
    }
}