import React from 'react'
import styled from 'styled-components';

import CoinCard from '../CoinCard'


const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`

const Input = styled.input`
  padding: 5px 10px;
  font-size: 1em;
`

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const Button = styled.button`
  padding: 5px 10px;
`

const AllCoins = ({coins, handleNameInput, inputName, sortByName, sortByRank, handleCoinSelect}) => {
  return (
    <div>
      
      <Header>
        <div>
          <label htmlFor="coin-name">Search A Coin : </label>
          <Input type="text" name="coin-name" onChange={handleNameInput} value={inputName}/>
        </div>
        <div>
          <Button onClick={sortByName}>sort by name</Button>
          <Button onClick={sortByRank}>sort by rank</Button>
        </div>
      </Header>
      <CardsContainer>
        {coins && coins.map(coin => (
          <CoinCard coin={coin} key={coin.id} handleCoinSelect={handleCoinSelect}/>
        ))}
      </CardsContainer>

    </div>
  )
}

export default AllCoins;
