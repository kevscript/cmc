import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import CoinsList from '../CoinsList'
import CoinPage from '../CoinPage'

import data from '../../data'

const App = () => {

  const [coins, setCoins] = useState(data)
  const [inputName, setInputName] = useState('')
  const [selectedCoin, setSelectedCoin] = useState({name: 'coin'})

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
    let coinsCopy = [...data]

    if (value !== '') {
      let newCoins = coinsCopy.filter(coin => coin.name.toUpperCase().includes(value.toUpperCase()))
      setCoins(newCoins)
    }
      
    if (value === '') {
      setCoins(data)
    }
  }

  const handleCoinSelect = (e) => {
    e.stopPropagation()
    const id = e.currentTarget.attributes.getNamedItem('data-id').value
    const selected = coins.find(coin => coin.id == id)
    setSelectedCoin(selected)
  }



  const initialCoinsFetch = async () => {
    const result = await fetch(`/coins`)
      .then(res => res.json())
      .catch(err => console.error(err))
    
    setCoins(result)
  }

  /*useEffect(() => {
    initialCoinsFetch
  }, [])*/

  return (
    <div>

      <Route 
        exact path="/coins" 
        render={() => (
          <CoinsList  
            coins={coins} 
            inputName={inputName} 
            sortByName={sortByName} 
            sortByRank={sortByRank} 
            handleNameInput={handleNameInput} 
            handleCoinSelect={handleCoinSelect}
          />
        )}
      />



      <Route 
        path={`/coins/${selectedCoin.name}`}
        render={() => (
          <CoinPage selectedCoin={selectedCoin}/>
        )}
      />

    </div>
  )
}

export default App;
