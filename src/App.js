import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Basket from 'pages/Basket'
import ShopHeader from 'components/ShopHeader'
import Shopping from 'pages/Shopping'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <ShopHeader />
      <Switch>
        <Route path="/" component={Shopping} exact />
        <Route path="/basket" component={Basket} />
      </Switch>
    </div>
  )
}

export default App
