import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

const Icon = ({ img = '', className = '' }) => {
  return (
    <div className={styles.icon}>
      <img src={img} className={cx(styles.iconImg, className)}/>
    </div>
  )
}

export default Icon
