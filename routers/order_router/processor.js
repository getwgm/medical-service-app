// get the global pool
const pool = global.pool
const { promisify } = require('util')

const query = promisify(pool.query)

const processor = {
  async getOrderInfo (subject) {
    const SQL = `select * from orderinfogram, doctorgram where orderinfogram.doctorId = doctorgram.doctorId and \`subject\` = "${subject}"`
    let result = await query.call(pool, SQL)
    result = result.map(item => {
      delete item.doctorId
      delete item.orderId
      delete item.day
      delete item.subject
      item.ticket = [item.am, item.pm]
      delete item.am
      delete item.pm
      item.am = '8:00 - 11:00'
      item.pm = '14:00 - 17:00'
      return item
    })
    return result
  },
  async order (username, subject, day, dayTime) {
    const orderTime = (new Date()).toLocaleString()
    const SQL = `insert into userordergram values ("${username}", "${subject}", "${day}", "${dayTime}", "${orderTime}")`
    let result = await query.call(pool, SQL)
    return result
  }
}

module.exports = processor
