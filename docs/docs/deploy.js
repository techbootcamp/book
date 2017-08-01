const fs = require('fs-extra')
const git = require('simple-git')('./')

console.log('copying site content...')
fs.copySync('_book', 'docs')
console.log('done. adding docs..')
git.status((list) => {
  console.log(list)
}).add(['docs'], (result) => {
  console.log(result)
})
