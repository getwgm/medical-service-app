/**
 * This is the entry of this web application,
 * it create a http server by koa
 * @author maoyonglong
 */
const Koa = require('koa')
const chalk = require('chalk')
const bodyparser = require('koa-bodyparser')
const session = require('koa-session')
const routersAsync = require('./routers')

const app = new Koa()

// enable the koa-session
app.keys = ['newest secret key', 'older secret key']
const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}
app.use(session(CONFIG, app))

// init all routers of this application
app.use(bodyparser())

async function initRouters () {
  const routers = await routersAsync()
  routers.forEach(router => {
    app.use(router)
  })
}

// the entry of this application
async function main () {
  const port = 80
  await initRouters()

  app.listen(port)
  console.log(chalk.green(`[success] Your appication is running in port ${port}.`))
}

main()
