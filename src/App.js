import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Basket from 'pages/Basket'
import Shopping from 'pages/Shopping'
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Shopping} exact />
        <Route path="/basket" component={Basket} />
      </Switch>
    </div>
  )
}

export default App
