import React from 'react'
import {Button, Select} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../Redux/actions';

function BillQuantity() {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const {Option} = Select

    const table_values = useSelector ((state) => state.table_values)
    // console.log('table_values:::',table_values.length)

    const quantity = useSelector((state) => state.quantity)
    // console.log('quantity:::::::::::::::::::',quantity)

    const productId01 = useSelector((state) => state.productId)
    // console.log('productIdproductId',productId)
    const productId = productId01 - 1
    // console.log(productId)
    // console.log(productList?.data[productId]?.available_stocks)

    const quantityFn = () => {
        const newQuantity = []
        const row = []
        for (var j=0; j <table_values.length; j++){
            newQuantity.push(
             table_values[j]?.productReducer
            )
        }
        console.log(newQuantity)  
        
        for (var i = 1; i <= (productList?.data[productId]?.available_stocks - quantity); i++) {

            row.push(
                <Option value={i}>
                    {i}
                </Option>);           
        }
        console.log('row',row)
        return row
        
    }
    
    const quantityIdFn = (value) => {
        console.log('value',value)
        dispatch({
            type: Actions.QUANTITY,
            payload: value
        })
        dispatch({
            type: Actions.ITEM_PRICE,
            payload: productList?.data[productId]?.price_per_item * value
        })
    }


  return (
    <div>
        <Select style={{width: '100%'}} placeholder="Quantity" onChange={(value) => quantityIdFn(value)}>

            {productId >= 0 ? <>
                {quantityFn()}
                </> : ""}
        </Select>
    </div>
  )
}

export default BillQuantity