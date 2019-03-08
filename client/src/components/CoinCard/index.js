import React from 'react'
import { Link } from 'react-router-dom'

import './coincard.css'

const CoinCard = ({coin, handleCoinSelect}) => {
  let date = new Date(coin.date_added)
  return (
    <Link to={`/coins/${coin.name}`} className="card" data-id={coin.id} onClick={handleCoinSelect}>
      <ul>
        <li>name: {coin.name}</li>
        <li>id: {coin.id}</li>
        <li>symbol: {coin.symbol}</li>
        <li>slug: {coin.slug}</li>
        <li>date_added: {date.toDateString()}</li>
        <li>cmc_rank: {coin.cmc_rank}</li>
      </ul>
    </Link>
  )
}

export default CoinCard
