import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import providerProducts from 'provider'
import { fetchProductsData, addProductCart } from 'actions'
import ProductCard from 'components/ProductCard'

import styles from './styles.module.scss'

const ListCards = () => {
  const products = useSelector(state => state.products)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [])

  const getImage = new providerProducts().getImageProduct

  if (loading) return <div>Spinner...</div>
  if (!!error) return <div>Error. Try again...</div>

  return (
    <ul className={styles.listCards}>
      {products.map(product => (
        <li key={product.id} className={styles.cardItem}>
          <ProductCard
            image={getImage(product.image)}
            title={product.title}
            price={product.price}
            addProduct={() => dispatch(addProductCart(product.id))}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListCards
