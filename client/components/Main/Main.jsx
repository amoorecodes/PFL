import React, { Component } from 'react'
import {
  PageWrapper,
  BigTitle,
  Title,
  Details,
  Text
} from '../../styles/globals.jsx'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hey: 'hey'
    }
  }

  render () {
    return (
      <PageWrapper>
        <BigTitle>Arthur Ryabtsev</BigTitle>
        <Title>software engineer</Title>
        {/* <pre>
          <code>
            prints the state onto the DOM

            {JSON.stringify(this.state, null, 4)}
          </code>
        </pre> */}
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, molestiae. Quis eveniet temporibus excepturi est labore adipisci, placeat itaque, ab dolor possimus quod ullam repudiandae! Harum eveniet laboriosam ducimus eligendi.
        </Text>
      </PageWrapper>
    )
  }
}

export default Main
