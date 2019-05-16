/**
 * This is the routers modules,
 * which mananger the router of this web application
 * @module routers
 * @author maoyonglong
 * @export { async function } This function will return a promise with routers middleware in resolve
 */
const glob = require('glob')
const path = require('path')
const { promisify } = require('util')
const processor = require('./processor')

const globPromisify = promisify(glob)

// init a global connection pool of mysql
global.pool = processor.dbpool.init()

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
