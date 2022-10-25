import React from 'react'
import { useSelector } from 'react-redux'

function Price_per_item() {
    const price_per_item = useSelector((state) => state.price_per_item)
  return (
    <div>{price_per_item}</div>
  )
}

export default Price_per_item