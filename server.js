/**
 * This is the entry of this web application,
 * it create a http server by koa
 * @author maoyonglong
 */
const Koa = require('koa')
const chalk = require('chalk')
const bodyparser = require('koa-bodyparser')
const routersAsync = require('./routers')

const app = new Koa()

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
