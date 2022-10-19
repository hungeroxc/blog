const { rmSync } = require('node:fs')

const { resolve } = require('./utils')

const removeDist = (dir) => {
    rmSync(dir, { recursive: true, force: true })
}

removeDist(resolve('dist'))
