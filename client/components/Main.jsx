import React, { Component } from 'react'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hey: 'hey',
      gay: 'you'
    }
  }

  render () {
    return (
      <div>
        <h1>Arthur Ryabtsev</h1>
        <h2>software engineer</h2>
        <pre>
          <code>
            prints the state onto the DOM

            {JSON.stringify(this.state, null, 4)}
          </code>
        </pre>
      </div>
    )
  }
}

export default Main
