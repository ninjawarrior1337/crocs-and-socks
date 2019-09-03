import soundEffect from "./soundEffect";
import * as path from "path";
import * as fs from "fs";

export default class soundEffectFromFolder extends soundEffect
{
    constructor(id:string, aliases: string[], protected folderPath: string[])
    {
        super(id, aliases, fs.readdirSync(path.join(...folderPath)));
    }
}