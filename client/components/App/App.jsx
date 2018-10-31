import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar.jsx'
import Main from '../Main/Main.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import NotFound from '../WIP/WIP.jsx'

// const notFound = () => <h2>Oh no, it is 404 all over again!</h2>

const App = () => {
  return (
    <div>
      {/* <NavBar buttons={['About Me', 'Portfolio', 'Resume', 'Contact']} /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={NotFound} />
          <Route path='/else' component={Main} />
        </Switch>
        {/* {<Portfolio />} */}
      </BrowserRouter>

    </div>
  )
}

export default App
