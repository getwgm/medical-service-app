const mysql = require('mysql')
const chalk = require('chalk')
const readlineSync = require('readline-sync')

class DBPool {
  // create a instance and set the options of mysql.createPool function
  constructor (options = {}) {
    const defaultOptions = {
      connectionLimit: 10,
      host: 'localhost',
      database: 'medicalapp',
      insecureAuth: true
    }
    // judge if secure
    if (options.username || options.password) {
      this.security = false // not security
      console.log(chalk.red('[danger] Writing the username or password directly in code is not recommended.'))
    } else {
      this.security = true
    }
    this.options = Object.assign(defaultOptions, options)
  }
  // init the mysql pool
  init () {
    // if security is true, asking the administrator to input account for database
    if (this.security) {
      console.log(chalk.green('[tip] please input your account for the database: '))
      this.options.username = readlineSync.question('username: ')
      this.options.password = readlineSync.question('password: ', { hideEchoBack: true, mask: '*' })
    }
    this.pool = mysql.createPool(this.options)

    return this.pool
  }
}

exports.DBPool = DBPool
