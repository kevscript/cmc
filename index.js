const express = require('express')
const app = express()
const port = 3001

const fetchCoins = require('./fetchCoins')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/coins', (req, res) => {
  fetchCoins.getCoins()
    .then(coins => res.json(coins))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))