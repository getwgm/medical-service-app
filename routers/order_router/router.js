/**
 * This is the order routers modules
 * @module orderRouter
 * @author maoyonglong
 * @export { async function } This is a middleware of koa
 */
const processor = require('./processor')
const Router = require('koa-router')

module.exports = async function (ctx, next) {
  await next()
}
