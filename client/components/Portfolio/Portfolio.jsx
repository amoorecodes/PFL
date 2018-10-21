import React, { Component } from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx'
import { portfolio } from '../../content/portfolio.json'
import {
  PageWrapper,
  BigTitle,
  Title,
  Details,
  Text
} from '../../styles/globals.jsx'

class Portfolio extends Component {
  render () {
    return (
      <PageWrapper>
        <BigTitle> Portfolio </BigTitle>
        {portfolio.map(item => <PortfolioItem work={item} key={item._id} />)}
      </PageWrapper>
    )
  }
}

export default Portfolio
