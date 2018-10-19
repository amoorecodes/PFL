import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Main from './Main.jsx'
import Portfolio from './Portfolio.jsx'

const notFound = () => <h2>Oh no, it is 404 all over again!</h2>

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <NavBar buttons={['About Me', 'Portfolio', 'Resume', 'Contact']} />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={notFound} />
      </Switch>
      <Portfolio />

    </div>
  </BrowserRouter>
)

export default App
