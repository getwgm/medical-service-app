const { promisify } = require('util')

function test(command, callback) {
    callback('', {"param1: ":'1'}, '2')
}

const t = promisify(test)

t('2').then(() => {
    console.log(arguments)
})