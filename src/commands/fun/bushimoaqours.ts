import HanamaruCommand from "../../structures/Command";
import soundEffect from "../../structures/soundEffect";
import * as path from "path";
import * as fs from "fs";
import soundEffectFromFolder from "../../structures/soundEffectFromFolder";

export default class bushimoaqours extends soundEffectFromFolder
{
    constructor()
    {
        let pathName = [__dirname, "..", "..", "..", "assets", "audio", "aqoursbushimo"];
        let fileNames = fs.readdirSync(path.join(...pathName));
        super("bushimoaqours", ["bma", "bushiroad-a", "aqours"], pathName)
    }
}