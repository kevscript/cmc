import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 18%;
  margin: 1%;
  border: 1px solid #333;
  padding: 10px;
  text-decoration: none;
  color: #333;
`

const Card = styled.div`
`

const H3 = styled.h3`
`

const CoinCard = ({coin, handleCoinSelect}) => {
  return (
    <StyledLink to={`/coins/${coin.name}`} data-id={coin.id} onClick={handleCoinSelect}>
      <Card>
        <H3>{coin.name} #{coin.cmc_rank}</H3>
      </Card>
    </StyledLink>
  )
}

export default CoinCard
