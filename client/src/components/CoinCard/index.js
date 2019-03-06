import React from 'react'

import './coincard.css'

const CoinCard = ({coin}) => {
  return (
    <ul className="card">
      <li>name: {coin.name}</li>
      <li>id: {coin.id}</li>
      <li>symbol: {coin.symbol}</li>
      <li>slug: {coin.slug}</li>
      <li>date_added: {coin.date_added}</li>
      <li>cmc_rank: {coin.cmc_rank}</li>
    </ul>
  )
}

export default CoinCard
