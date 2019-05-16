const processor = require('../processor')

exports.dbpool = (new processor.DBPool({
  username: 'root',
  password: 'zxc15322'
}))
