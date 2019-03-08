import React from 'react'

const CoinPage = ({selectedCoin}) => {
  return (
    <div>
      CoinPage
      <p>{selectedCoin ? selectedCoin.name : ''}</p>
    </div>
  )
}

export default CoinPage
