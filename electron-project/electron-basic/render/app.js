const fs = require('fs')

fs.writeFile('/Users/Andyt/Desktop/test.txt', 'abc', () => {
  console.log('done.')
})
