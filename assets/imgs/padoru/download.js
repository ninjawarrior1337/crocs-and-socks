var request = require('request')
var imgs = require('./padoru.json.js')
var _ = require("underscore")
var fs = require("fs")

_.forEach(imgs, (val, ind) => {
    request(val).pipe(fs.createWriteStream(ind + ".png"))
})