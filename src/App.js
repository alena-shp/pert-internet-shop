import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from 'pages/Cart'
import ShopHeader from 'components/ShopHeader'
import Shopping from 'pages/Shopping'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <ShopHeader />
      <Switch>
        <Route path="/" component={Shopping} exact />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  )
}

export default App
