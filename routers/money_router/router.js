const Processor = require('./processor')
const Router = require('koa-router')
const compose = require('koa-compose')

const router = new Router()

const processor = new Processor()

const checkOptions = ['drug', 'price']
checkOptions.forEach(option => {
  let url = '/api/money/' + option
  router.get(url, async (ctx, next) => {
    const username = ctx.session.username
    const result = await processor.getCheckInfo(option, username)
    ctx.body = result
  })
})

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
