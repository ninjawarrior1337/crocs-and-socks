const sharp = require("sharp")
const fs = require("fs")
const imageEffects = require('../helpers/imageEffects')
const streamToBuffer = require('stream-to')

const negate =
    sharp()
        .negate()
        .png()

imageEffects.negate(streamToBuffer.buffer(fs.createReadStream("input.png")))