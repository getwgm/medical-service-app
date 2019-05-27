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

// get order info interface
router.get('/api/order/info', async (ctx, next) => {
    let subject = ctx.query.subject
    let result = await processor.getOrderInfo(subject)
    ctx.body = { result }
})

// order interface
router.post('/api/order', async (ctx, next) => {
    let username = ctx.session.username
    let { subject, day, time } = ctx.request.body
    try {
        processor.order(username, subject, day, time)
        ctx.body = { state: true }
    } catch (err) {
        ctx.body = { state: false }
    }
})

module.exports = compose([router.routes(), router.allowedMethods()])
