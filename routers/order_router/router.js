/**
 * This is the order routers modules
 * @module orderRouter
 * @author maoyonglong
 * @export { async function } This is a middleware of koa
 */
const processor = require('./processor')
const Router = require('koa-router')
const compose = require('koa-compose')

const router = new Router()

router.get('/test', (ctx, next) => {
  const test = ctx.query.doctorName

  // search 
  const info = processor.func(test);
  
  ctx.body = info
})

router.post("/test", (ctx, next) => {
  const test = ctx.request.body.test
  ctx.body = test
})



module.exports = compose([router.routes(), router.allowedMethods()])
