import React from 'react'
import Menu from './components/Menu'
import Content from './components/Teams'
import Seasons from './components/Seasons'
import Orange from './components/Orange'
import Purple from './components/Purple'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Menu/>
      <Route exact active path='/' component={Content} />
      <Route exact path='/seasons' component={Seasons}/>
      <Route exact path='/orange' component={Orange}/>
      <Route exact path='/purple' component={Purple}/>
    </div>
  )
}

export default App
