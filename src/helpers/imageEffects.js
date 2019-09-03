import jimp from 'jimp'
import * as fs from 'fs'

// async function negate()
// {
//     await new Promise ((resolve, reject) => {
//     sharp("processing/input.png")
//         .negate()
//         .toBuffer ()
//         .then (data => {
//             fs.writeFileSync ("processing/output.png", data)
//             resolve()
//         })
//         .catch ((err) => {
//             // do not throw here!
//             reject (err)
//         })
//     })
// }

export async function rotate(deg)
{
        let image = await  jimp.read("processing/input.png")
        await image.rotate(deg)
        await image.writeAsync("processing/output.png")
}

export async function rumble()
{
    let rumble = await jimp.read("overlay-imgs/rumble.png")
    let input = await jimp.read("processing/input.png")
    await input.composite(rumble.resize(input.getWidth(), input.getHeight()*.50), 0, 0)
    await input.quality(90)
    await input.writeAsync("processing/output.jpg")
}