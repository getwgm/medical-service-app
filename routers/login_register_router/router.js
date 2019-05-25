const Processor = require('./processor')
const Router = require('koa-router')
const compose = require('koa-compose')

const router = new Router()
const processor = new Processor()

router.post('/api/login', async (ctx, next) => {
    let username = ctx.request.body.username
    let pwd = ctx.request.body.pwd
    let result = await processor.login(username, pwd)
    let state = result.length > 0
    ctx.body = { state }
})

router.post('/api/register', (ctx, next) => {
    
})

module.exports = compose([router.routes(), router.allowedMethods()])