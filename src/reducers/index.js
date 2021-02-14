import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  REMOVE_ITEM_POSITION_CART,
  CLEAR_ALL_CART
} from 'types'

const initialState = {
  products: [],
  loading: true,
  error: null,
  cartItems: []
}

const updateCartProducts = (product, newProduct, index) => {
  if (newProduct.count === 0) {
    return [...product.slice(0, index), ...product.slice(index + 1)]
  }
  return index === -1
    ? [...product, newProduct]
    : [...product.slice(0, index), newProduct, ...product.slice(index + 1)]
}

const updateProduct = (product, item = {}, amount) => {
  const { id = product.id, title = product.title, count = 0, total = 0 } = item

  return {
    id,
    title,
    count: count + amount,
    total: Number((total + amount * product.price).toFixed(2))
  }
}

const updateOrder = (state, productId, amount) => {
  const { products, cartItems } = state
  const product = products.find(product => product.id === productId)
  const itemIndex = cartItems.findIndex(item => item.id === productId)
  const item = cartItems[itemIndex]
  const newItem = updateProduct(product, item, amount)
  return {
    ...state,
    cartItems: updateCartProducts(cartItems, newItem, itemIndex)
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products: [],
        loading: true,
        error: null
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload
      }

    case ADD_PRODUCT_CART:
      return updateOrder(state, action.payload, 1)

    case REMOVE_PRODUCT_CART:
      return updateOrder(state, action.payload, -1)

    case REMOVE_ITEM_POSITION_CART:
      const removeId = action.payload
      const itemRemove = state.cartItems.find(({ id }) => id === removeId)
      return updateOrder(state, action.payload, -itemRemove.count)

    case CLEAR_ALL_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state
  }
}

export default reducer
