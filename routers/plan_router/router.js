const Processor = require('./processor')
const Router = require('koa-router')
const compose = require('koa-compose')

const router = new Router()

const processor = new Processor()

const checkOptions = ['blood', 'sugar', 'liver']
checkOptions.forEach(option => {
  let url = '/api/check/' + option
  router.get(url, async (ctx, next) => {
    const username = ctx.session.username
    const result = await processor.getCheckInfo(option, username)
    ctx.body = result
  })
})

module.exports = compose([router.routes(), router.allowedMethods()])
