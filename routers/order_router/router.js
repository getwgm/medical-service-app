const processor = require('./processor')
const Router = require('koa-router')

module.exports = async function (ctx, next) {
  await next()
}
