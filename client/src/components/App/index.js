import React, { useState, useEffect } from 'react';

import CoinCard from '../CoinCard'
import './app.css'
import data from '../../data'

const App = () => {

  const [coins, setCoins] = useState(data)
  const [inputName, setInputName] = useState('')

  const handleNameInput = (e) => {
    setInputName(e.target.value)
    searchCoin(e.target.value)
  }

  const sortByName = () => {
    let coinsCopy = [...coins]
    let newCoins = coinsCopy.sort((a, b) => {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase()
      return nameA === nameB ? 0 : (nameA < nameB ? -1 : 1)
    })
    setCoins(newCoins)
  }

  const sortByRank = () => {
    let coinsCopy = [...coins]
    let newCoins = coinsCopy.sort((a, b) => {
      return a.cmc_rank - b.cmc_rank
    })
    setCoins(newCoins)
  }

  const searchCoin = (value) => {
    let coinsCopy = [...coins]

    if (value !== '') {
      let newCoins = coinsCopy.filter(coin => coin.name.toUpperCase().includes(value.toUpperCase()))
      setCoins(newCoins)
    }
      
    if (value === '') {
      setCoins(data)
    }
  }


  const fetchCoins = async () => {
    const result = await fetch(`/coins`)
      .then(res => res.json())
      .catch(err => console.error(err))
    
    setCoins(result)
  }

  /*useEffect(() => {
    fetchCoins()
  }, [])*/

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

export default App;
