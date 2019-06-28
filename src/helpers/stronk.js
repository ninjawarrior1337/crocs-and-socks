const text2png = require('text2png')
import jimp from 'jimp'
import * as path from 'path'

export var doEdit = async (text, color) =>
{
    let img = await jimp.read(path.join("overlay-imgs", "stronk.png"));
    let textPic = await jimp.create(text2png(text, {backgroundColor: color, padding: 10}));

    await textPic.resize(142, 39);
    await img.composite(textPic, 403, 284);

    // await img.writeAsync("stronkout.png")
    return await img.getBufferAsync(jimp.MIME_PNG);
};