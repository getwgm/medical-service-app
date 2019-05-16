// get the global pool
const pool = global.pool
const { promisify } = require('util')

const processor = {
  async getOffices () {
    const getConnection = promisify(pool.getConnection).bind(pool)
    let connection = await getConnection()
    const query = promisify(connection.query).bind(connection)
    let result = await query('SELECT * FROM office_list')

    return result
  }
}

processor.getOffices()

module.exports = processor
