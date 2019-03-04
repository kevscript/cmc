const fetch = require('node-fetch')

const key = require('./keys')
const url = 'https://pro-api.coinmarketcap.com'

function getCoins() {
  return fetch(`${url}/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${key}`)
    .then(res => res.json())
    .then(res => res.data)
    .catch(err => console.error(err))
}

module.exports = {
  getCoins
}