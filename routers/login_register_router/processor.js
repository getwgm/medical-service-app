const { promisify } = require('util')

const pool = global.pool

const query = promisify(pool.query)

class Processor {
    async login (username, pwd) {
        const SQL = `SELECT * FROM usergram WHERE username = "${username}" AND pwd = "${pwd}"`
        return await query.call(pool, SQL)
    }
}

module.exports = Processor