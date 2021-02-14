import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Icon from 'components/Icon'
import basket from 'assets/icons/basket.svg'

import styles from './styles.module.scss'

const ShopHeader = () => {
  const cartTotalItems = useSelector(state => state.cartItems.reduce((sum, item) => sum + item.count, 0))

  return (
    <div className={styles.shopHeader}>
      <Link to="/" className={styles.title}>
        Internet Shop
      </Link>
      <Link to="/cart" className={styles.countWrap}>
        <Icon img={basket} />
        <div className={styles.countItems}>{cartTotalItems}</div>
      </Link>
    </div>
  )
}

export default ShopHeader
