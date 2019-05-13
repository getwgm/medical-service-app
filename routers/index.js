const glob = require('glob')
const path = require('path')
const { promisify } = require('util')

const globPromisify = promisify(glob)

async function getRouters () {
  const routers = []
  const matches = await globPromisify('*/router.js', { cwd: 'routers' })
  matches.forEach(match => {
    let matchPath = path.resolve(__dirname, match)
    routers.push(require(matchPath))
  })
  return routers
}

module.exports = getRouters
