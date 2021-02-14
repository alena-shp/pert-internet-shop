import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListCart from 'components/ListCart'
import ListCards from 'components/ListCards'
import ShopHeader from 'components/ShopHeader'

import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <ShopHeader />
      <Switch>
        <Route path="/" component={ListCards} exact />
        <Route path="/cart" component={ListCart} />
      </Switch>
    </div>
  )
}

export default App
