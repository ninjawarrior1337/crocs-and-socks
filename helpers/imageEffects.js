const jimp = require('jimp');
const fs = require('fs')

async function negate()
{
    await new Promise ((resolve, reject) => {
    sharp("processing/input.png")
        .negate()
        .toBuffer ()
        .then (data => {
            fs.writeFileSync ("processing/output.png", data)
            resolve()
        })
        .catch ((err) => {
            // do not throw here!
            reject (err)
        })
    })
}

async function rotate(deg)
{
        let image = await  jimp.read("processing/input.png")
        await image.rotate(deg)
        await image.writeAsync("processing/output.png")
}

async function rumble()
{
    let rumble = await jimp.read("overlay-imgs/rumble.png")
    let input = await jimp.read("processing/input.png")
    await input.composite(rumble.resize(input.getWidth(), input.getHeight()*.50), 0, 0)
    await input.quality(90)
    await input.writeAsync("processing/output.jpg")
}

module.exports = {negate, rotate, rumble};