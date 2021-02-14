import React, { useEffect } from 'react'

import styles from './styles.module.scss'

const ProductCard = ({ image, title, price, addProduct = () => {} }) => {
  return (
    <>
      <img className={styles.productImg} src={image} alt="" />
      <div className={styles.description}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>${price}</span>
        <button onClick={addProduct} className={styles.productBtn}>
          Add cart
        </button>
      </div>
    </>
  )
}
export default ProductCard
