const fs = require('fs')

fs.writeFile('/c/Users/Andyt/Desktop/example.txt', 'abc', () => {
  console.log('done.')
})
