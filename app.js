const express = require('express');
const app = express();
const prt = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(prt, () => {
  console.log(`Example app listening at http://localhost:${prt}`)
})

app.use(express.static('public'));