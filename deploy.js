const fs = require('fs-extra')

console.log('copying site content...')

fs.copySync('./_book', './docs')
console.log('done')
