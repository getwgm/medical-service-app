const Koa = require('koa')
const chalk = require('chalk')
const routersAsync = require('./routers')

const app = new Koa()

async function initRouters () {
  const routers = await routersAsync()
  routers.forEach(router => {
    app.use(router)
  })
}

async function main () {
  await initRouters()

  app.listen(8080)
  console.log(chalk.green('Your appication is running in port 8080.'))
}

main()
