import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components';

import AllCoins from '../AllCoins'
import CoinPage from '../CoinPage'

import data from '../../data'


const Header = styled.div`
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: red;
`


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
    const selected = coins.find(coin => coin.id === Number(id))
    setSelectedCoin(selected)
  }



  const initialCoinsFetch = async () => {
    await fetch(`/coins`)
      .then(res => res.json())
      .then(data => setCoins(data))
      .catch(err => console.error(err))
  }

  /*useEffect(() => {
    initialCoinsFetch
  }, [])*/

  return (
    <div>
      <Header>
        <StyledLink to="/coins">Top 100</StyledLink>
      </Header>

      <Route 
        exact path="/coins" 
        render={() => (
          <AllCoins  
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
          <CoinPage 
            selectedCoin={selectedCoin}
          />
        )}
      />

    </div>
  )
}

export default App;
