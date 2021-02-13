import providerProducts from 'provider'

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  REMOVE_ALL_PRODUCTS_CART,
} from 'types'

const productsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST })

const productsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
})

const productsError = error => ({ type: FETCH_PRODUCTS_FAILURE, payload: error })

export const fetchProductsData = () => {
  return function (dispatch) {
    dispatch(productsRequest())
    const getData = new providerProducts()
    getData
      .getAllProducts()
      .then(product => {
        dispatch(productsSuccess(product))
      })
      .catch(error => {
        const err = error.message
        dispatch(productsError(err))
      })
  }
}

export const addProductCart = productId => ({ type: ADD_PRODUCT_CART, payload: productId })

export const removeProductCart = productId => ({ type: REMOVE_PRODUCT_CART, payload: productId })

export const removeAllProductsCart = productId => ({
  type: REMOVE_ALL_PRODUCTS_CART,
  payload: productId
})
