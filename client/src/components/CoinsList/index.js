import React, { useState, useEffect } from 'react'

import CoinCard from '../CoinCard'

import './coinslist.css'
import data from '../../data'

const CoinsList = ({coins, handleNameInput, inputName, sortByName, sortByRank}) => {
  return (
    <div>

      <div className="header">
        <label htmlFor="coin-name">Search A Coin</label>
        <input type="text" name="coin-name" onChange={handleNameInput} value={inputName}/>
      </div>
      <div className="cards">
        {coins && coins.map(coin => (
          <CoinCard coin={coin} key={coin.id}/>
        ))}
      </div>
      <button onClick={sortByName}>sort by name</button>
      <button onClick={sortByRank}>sort by rank</button>

    </div>
  )
}

export default CoinsList;