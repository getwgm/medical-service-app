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

module.exports = compose([router.routes(), router.allowedMethods()])
