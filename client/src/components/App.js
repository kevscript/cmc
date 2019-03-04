import React, { useState, useEffect } from 'react';

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
    <div>
      {coins && coins.map(coin => (
        <p>{coin.name}</p>
      ))}
    </div>
  )
}

export default App;
