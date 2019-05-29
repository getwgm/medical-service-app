const Processor = require('./processor')
const Router = require('koa-router')
const compose = require('koa-compose')

const router = new Router()

const processor = new Processor()

router.get('/api/case', async (ctx, next) => {
  const username = ctx.session.username
  let result = processor.getCaseInfo(username)
  ctx.body = { result }
})

module.exports = compose([router.routes(), router.allowedMethods()])
