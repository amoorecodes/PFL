import React from 'react'
import { stack } from '../../content/portfolio.json'
import Wrapper from './PortfolioItemUI.jsx'
import { Title, Details, Text } from '../../styles/globals.jsx'

const PortfolioItem = props => {
  return (
    <Wrapper>
      <Title>{props.work.title}</Title>
      {props.work.stack.map(library => {
        return <div key={library._id}>{stack[library].img}</div>
      })}
      <img alt={`Render of ${props.work.title}`} src={`${props.work.img}`} />
      <Text>{props.work.description}</Text>
    </Wrapper>
  )
}

export default PortfolioItem
