import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'

import Home from './components/Home'
import CoinPage from './components/CoinPage'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/coinpage" component={CoinPage} />
    </div>
  </BrowserRouter>, 
document.getElementById('root'))
