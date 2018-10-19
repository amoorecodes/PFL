import React, { Component } from 'react'
import NavButton from './NavButton.jsx'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>navigation</h1>
        {this.props.buttons.map((item, i) => {
          // console.log(i)
          return <NavButton option={item} key={i} />
        })}
      </div>
    )
  }
}

export default NavBar
