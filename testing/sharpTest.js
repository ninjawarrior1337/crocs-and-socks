const sharp = require("sharp")
const fs = require("fs")

sharp("input.png")
	.negate()
	.toFile("out.png")