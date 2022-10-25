import React, { useEffect, useState } from 'react';
import {Table} from 'antd';
import BalanceDenomination from './BalanceDenomination';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../Redux/actions';

function BillSection02() {

    const  dispatch = useDispatch()

    const customerFinalAmount = useSelector((state) => state.customerFinalAmount)
    console.log('customerFinalAmount',customerFinalAmount)


    const denomination = useSelector((state => state.denomination))
    // console.log('denomination',denomination)

    const productId = useSelector((state) => state.productId)
    const quantity = useSelector((state) =>state.quantity)
    const price_per_item = useSelector((state) => state.price_per_item)
    const item_price = useSelector((state) => state.item_price)
    const tax_per_item = useSelector ((state) => state.tax_per_item)
    const total_tax_item_per_item = price_per_item + (price_per_item*tax_per_item*0.01)
    // console.log(total_tax_item_per_item)
    const total_price = total_tax_item_per_item*quantity
    const newDataSource = useSelector ((state) => state.newDataSource)
    console.log('newDataSource',newDataSource)

    const column = [
        {
            title:'Product ID',
            dataIndex: 'productReducer'
        },
        {
            title: 'Unit Price',
            dataIndex: 'unit_price'
        },
        {
            title: 'Quantity',
            dataIndex: 'quantityReducer'
        },
        {
            title: 'Purchased Price',
            dataIndex: 'purchased_price'
        },
        {
            title: 'Tax % per item',
            dataIndex: 'tax_per_item'
        },
        {
            title: 'Tax Payable for item',
            dataIndex: 'tax_payable_per_item'
        },
        {
            title: 'Total price of the item',
            dataIndex: 'total_price_of_the_item'
        }
    ]

    // const dataSource = [
    //     {
    //         product_id: productId,
    //         unit_price: newDataSource?.item_price,
    //         quantity: quantity,
    //         purchased_price: item_price,
    //         tax_per_percent: newDataSource?.tax,
    //         total_tax_item_per_item: total_tax_item_per_item,
    //         total_price: total_price
    //     }, 
    // ]

    
    let total_price_wo_tax = 0;
    let total_price_wo_tax01 = newDataSource?.map((i) => (total_price_wo_tax += i?.purchased_price))

    let total_tax_payable = 0;
    let total_tax_payable01 = newDataSource?.map((i) => (total_tax_payable += i?.tax_payable_per_item))

    let net_price_of_purchased = 0;
    let net_price_of_purchased01 = newDataSource?.map ((i) => (net_price_of_purchased += i?.total_price_of_the_item))

    let rounded_amount = Math.round(net_price_of_purchased)
    // console.log('total_price_wo_tax',total_price_wo_tax)

    // console.log(dataSource)


  return (
    <div>
        <h2 style={{margin: '4% 0 0 2%'}}>BillSection</h2>
        <Table
            columns={column}
            style={{margin: '2% 2% 0'}}
            dataSource={newDataSource}
            pagination={false}
        >

        </Table>

        <BalanceDenomination/>

        <div style={{padding:'2%',backgroundColor: 'rgb(211, 211, 211)', textAlign: 'right'}}>
            <div>
                Total Price without Tax:  {total_price_wo_tax}
            </div>
            <div>
                Total tax payable: {total_tax_payable}
            </div>
            <div>
                Net price of purchased item: {net_price_of_purchased}
            </div>
            <div>
                Rounded down value of the purchased items net price:  {rounded_amount}
            </div>
            <div>
                Balance payable to the customer: {customerFinalAmount - rounded_amount}
            </div>
        </div>

    </div>
  )
}

export default BillSection02