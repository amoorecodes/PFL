import React, { Component } from 'react'
import NavButton from '../NavButton/NavButton.jsx'
import { Wrapper, SiteName, ButtonsWrapper } from './NavBarUI.jsx'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Wrapper>
        <SiteName>Arthur Ryabtsev</SiteName>
        <ButtonsWrapper>
          {this.props.buttons.map((item, i) => {
            // console.log(i)
            return <NavButton option={item} key={i} />
          })}
        </ButtonsWrapper>
      </Wrapper>
    )
  }
}

export default NavBar
