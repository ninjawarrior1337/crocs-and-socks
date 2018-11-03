const jimp = require("jimp");

jimp.read("../overlay-imgs/rumble.png").then(rumble => {
    jimp.read("input.png").then(input =>
    {
        return input
            .composite(rumble.resize(input.getWidth(), input.getHeight()*.50), 0, 0)
            .quality(90)
            .write("put2.png")
    })
})