import React from 'react'
import { stack } from '../content/portfolio.json'

const PortfolioItem = props => {
  return (
    <div className='portfolio-item'>
      <h2>{props.work.title}</h2>
      <h3>
        {props.work.stack.map((library, i) => {
          return <div key={i}>{stack[library]}</div>
        })}
      </h3>
      <img alt={`Render of ${props.work.title}`} src='' />
      <h4>{props.work.img}</h4>
    </div>
  )
}

export default PortfolioItem
