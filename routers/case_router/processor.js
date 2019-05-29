const { promisify } = require('util')

const pool = global.pool

const query = promisify(pool.query)

class Processor {
  async getCaseInfo (username) {
    const SQL = `select * from casegram where username = "${username}"`
    let result = await query.call(pool, SQL)
    result = result[0]
    delete result.username
    return result
  }
}

module.exports = Processor
