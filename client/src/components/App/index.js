import React, { useState, useEffect } from 'react';

import CoinCard from '../CoinCard'
import './app.css'

const App = () => {

  const [coins, setCoins] = useState(null)


  const fetchCoins = async () => {
    const result = await fetch(`/coins`)
      .then(res => res.json())
      .catch(err => console.error(err))
    
    setCoins(result)
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className="cards">
      {coins && coins.map(coin => (
        <CoinCard coin={coin}/>
      ))}
    </div>
  )
}

export default App;
