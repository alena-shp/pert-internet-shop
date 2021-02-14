import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import providerProducts from 'provider'
import { fetchProductsData, addProductCart } from 'actions'
import ProductCard from 'components/ProductCard'

import styles from './styles.module.scss'

const ListCards = ({ products = [], getProducts = () => {}, addProductCart, loading, error }) => {
  useEffect(() => {
    getProducts()
  }, [getProducts])

  const getImage = new providerProducts().getImageProduct

  const dataList = (
    <ul className={styles.listCards}>
      {products.map(product => (
        <li key={product.id} className={styles.cardItem}>
          <ProductCard
            image={getImage(product.image)}
            title={product.title}
            price={product.price}
            addProduct={() => addProductCart(product.id)}
          />
        </li>
      ))}
    </ul>
  )

  const content = loading ? <div>Spinner...</div> : dataList

  return !error ? content : <div>Error. Try again...</div>
}

const mapStateToProps = ({ products, loading, error }) => ({
  products,
  loading,
  error
})

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(fetchProductsData()),
    addProductCart: id => {
      dispatch(addProductCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCards)
