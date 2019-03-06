import React from 'react'

import './coincard.css'

const CoinCard = ({coin}) => {
  let date = new Date(coin.date_added)
  return (
    <div className="card">
      <ul>
        <li>name: {coin.name}</li>
        <li>id: {coin.id}</li>
        <li>symbol: {coin.symbol}</li>
        <li>slug: {coin.slug}</li>
        <li>date_added: {date.toDateString()}</li>
        <li>cmc_rank: {coin.cmc_rank}</li>
      </ul>
    </div>
  )
}

export default CoinCard
