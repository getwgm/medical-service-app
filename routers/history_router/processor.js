const { promisify } = require('util')

const pool = global.pool

const query = promisify(pool.query)

class Processor {
    async getHistoryInfo (username) {
        const reflect = {
            'jessica': 'jhistory',
            'leo': 'lhistory',
            'arthur': 'ahistory'
        }
        const SQL = `select * from ${reflect[username]}`
        let result = await query.call(pool, SQL) 
        result = result.map(item => {
            delete item.username
            return item
        })
        return result
    }
}

module.exports = Processor
