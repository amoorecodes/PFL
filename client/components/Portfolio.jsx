import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem.jsx'
import { portfolio } from '../content/portfolio.json'

class Portfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <h3> Portfolio </h3>
        <h5>Prints the list of works</h5>
        {portfolio.map((item, i) => {
          return <PortfolioItem work={item} key={i} />
        })}
      </div>
    )
  }
}

export default Portfolio
