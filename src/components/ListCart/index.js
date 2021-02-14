import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import plus from 'assets/icons/plus.svg'
import minus from 'assets/icons/minus.svg'
import remove from 'assets/icons/remove.svg'
import { addProductCart, removeProductCart, removeItemPositionCart, clearAllCart } from 'actions'

import styles from './styles.module.scss'

const ListCart = ({
  removeProductCart,
  addProductCart,
  removeItemPositionCart,
  clearAllCart
}) => {
  const cartItems = useSelector(state => state.cartItems)
  const cartTotal = useSelector(state => state.cartItems.reduce((sum, item) => sum + item.total, 0).toFixed(2))
  return (
    <>
      {cartItems.length ? (
        <div className={styles.listCart}>
          <h3 className={styles.title}>Your Order</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.orderTable}>#</th>
                <th className={styles.itemTable}>Item</th>
                <th className={styles.countTable}>Count</th>
                <th className={styles.priceTable}>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => {
                const { id, title, count, total } = item
                return (
                  <tr key={id}>
                    <td className={styles.orderTable}>{idx + 1}</td>
                    <td className={styles.itemTable}>{title}</td>
                    <td className={styles.countTable}>{count}</td>
                    <td className={styles.priceTable}>${total}</td>
                    <td>
                      <button onClick={() => removeProductCart(id)} className={styles.tableBtn}>
                        <img src={minus} alt="" />
                      </button>
                      <button onClick={() => addProductCart(id)} className={styles.tableBtn}>
                        <img src={plus} alt="" />
                      </button>
                      <button
                        onClick={() => removeItemPositionCart(id)}
                        className={styles.tableBtn}
                      >
                        <img src={remove} alt="" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className={styles.cartAction}>
            <p className={styles.totalCount}>Total: ${cartTotal}</p>
            <button onClick={() => clearAllCart()} className={styles.btnClear}>
              Clear cart
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.notification}>
          <p className={styles.text}>Items have not been added to the cart.</p>
          <Link to="/" className={styles.link}>
            Add items to cart
          </Link>
        </div>
      )}
    </>
  )
}

const mapDispatchToProps = {
  removeProductCart,
  addProductCart,
  removeItemPositionCart,
  clearAllCart
}
export default connect(null, mapDispatchToProps)(ListCart)
