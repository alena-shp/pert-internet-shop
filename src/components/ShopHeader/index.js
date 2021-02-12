import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'components/Icon'
import basket from 'assets/icons/basket.svg'

import styles from './styles.module.scss'

const ShopHeader = ({ count = 0 }) => {
  return (
    <div className={styles.shopHeader}>
      <Link to="/" className={styles.title}>
        Internet Shop
      </Link>
      <Link to="/basket" className={styles.countWrap}>
        <Icon img={basket} />
        <div className={styles.countItems}>{count}</div>
      </Link>
    </div>
  )
}

export default ShopHeader
