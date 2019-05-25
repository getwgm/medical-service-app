const processor = require('../processor')

exports.dbpool = (new processor.DBPool({
  user: 'root',
  password: '7531'
}))
