import React from 'react'
import { Wrapper, Button } from './NavButtonUI.jsx'

const NavButton = props => {
  return (
    <Wrapper>
      <Button>{props.option}</Button>
    </Wrapper>
  )
}

export default NavButton
