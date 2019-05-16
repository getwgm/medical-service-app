/**
 * This is the entry of this web application,
 * it create a http server by koa
 * @author maoyonglong
 */
const Koa = require('koa')
const chalk = require('chalk')
const routersAsync = require('./routers')

const app = new Koa()

// init all routers of this application
async function initRouters () {
  const routers = await routersAsync()
  routers.forEach(router => {
    app.use(router)
  })
}

// the entry of this application
async function main () {
  await initRouters()

  app.listen(8080)
  console.log(chalk.green('[success] Your appication is running in port 8080.'))
}

main()
