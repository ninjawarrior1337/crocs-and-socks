const sharp = require('jimp');
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
        let image = await sharp.read("processing/input.png")
        await image.rotate(deg)
        await image.writeAsync("processing/output.png")
}

module.exports = {negate, rotate};