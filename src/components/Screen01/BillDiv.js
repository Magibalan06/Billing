import React from 'react';
import {Button, Select} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../Redux/actions';
import BillQuantity from './BillQuantity';

function BillDiv() {


  const productList = useSelector((state) => state.productList)
  const {Option} = Select
  const dispatch = useDispatch()

  const productIdFn = (value) => {
    console.log('product_id',value)
    dispatch({
      type: Actions.PRODUCT_ID,
      payload: value
    })
    dispatch({
      type: Actions.PRICE_PER_ITEM,
      payload:productList?.data[value-1]?.price_per_item
    })
    dispatch({
      type: Actions.TAX_PER_ITEM,
      payload: productList?.data[value-1]?.tax_percentage_per_item
  })
    // console.log(productList?.data[value-1]?.tax_percentage_per_item)
  }

   
  return (
    <div>
        <div>
            <Select style={{width: '100%'}} placeholder="Product ID" onChange={(value) => productIdFn(value)}>
              
            {productList?.data?.map (i=> (
                <Option value={i?.product_id}>
                  {i?.product_id}
                </Option>
              ))}
            </Select>
        </div>
    </div>
  )
}

export default BillDiv