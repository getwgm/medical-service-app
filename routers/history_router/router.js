const Processor = require('./processor')
const Router = require('koa-router')
const compose = require('koa-compose')

const router = new Router()

const processor = new Processor()

router.get('/api/history', async (ctx, next) => {
    const username = ctx.session.username
    const result = await processor.getHistoryInfo(username)
    ctx.body = result
})

module.exports = compose([router.routes(), router.allowedMethods()])
