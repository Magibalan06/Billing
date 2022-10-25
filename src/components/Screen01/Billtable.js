import React, {useEffect, useState} from 'react';
import { Button, Table, Select, Typography } from 'antd';
import Actions from '../../Redux/actions';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es';
import Denomination from '../Denomination';
import BillDiv from './BillDiv';
import BillQuantity from './BillQuantity';
import Price_per_item from './Price_per_item';

function Billtable() {

    const quantity = useSelector((state) => state.quantity)
    const table_values = useSelector((state) => state.table_values)
    const productId01 = useSelector((state) => state.productId)
    const productList = useSelector((state) => state.productList)
    const productId = productId01 - 1


    // const price_per_item = 1

    const price_per_item = useSelector((state) => state.price_per_item)
    console.log('price_per_item',price_per_item)

    console.log('productId',productId)

    const tax_per_item = useSelector((state) => state.tax_per_item)
    const item_price = useSelector((state) => state.item_price)
    console.log('tax_per_item',tax_per_item)
    const quantityReducer = useSelector((state) => state.quantity)

  

    const { Option } = Select;

    const dispatch = useDispatch();

    console.log('productList',productList.data)

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
    }

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

    

    useEffect(() => {
        dispatch({ type: Actions.PRODUCT_LIST_REQUEST });
    },[]);

    
    const [dataSource, setDataSource] = useState([
        {
          
          key: '0', 
          product_id: <BillDiv/>,
          quantity: <BillQuantity/>,
          unit_price: price_per_item,
          purchased_price: price_per_item*quantityReducer,
          total_price_of_the_item : quantityReducer*(price_per_item + (tax_per_item*0.01*price_per_item)),
          tax_payable_per_item: (tax_per_item*0.01*price_per_item),
          tax_per_item: tax_per_item,
          quantityReducer: quantityReducer,
          productReducer: productId
        },
        // {
        //   key: '1',
        //   product_id: <BillDiv/>,
        //   quantity: <BillQuantity/>,
        //   unit_price: price_per_item,
        //   purchased_price: price_per_item*quantityReducer,
        //   total_price_of_the_item : quantityReducer*(price_per_item + (tax_per_item*0.01*price_per_item)),
        //   tax_payable_per_item:  (tax_per_item*0.01*price_per_item),
        //   tax_per_item: tax_per_item,
        //   quantityReducer: quantityReducer,
        //   productReducer: productId
        // },
        // {
        //   key: '2',
        //   product_id: <BillDiv/>,
        //   quantity: <BillQuantity/>,
        //   unit_price: price_per_item,
        //   purchased_price: price_per_item*quantityReducer,
        //   total_price_of_the_item : quantityReducer*(price_per_item + (tax_per_item*0.01*price_per_item)),
        //   tax_payable_per_item:  (tax_per_item*0.01*price_per_item),
        //   tax_per_item: tax_per_item,
        //   quantityReducer: quantityReducer,
        //   productReducer: productId
        // }
      ]);

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        const newData = {
          key: count,
          product_id: <BillDiv/>,
          quantity: <BillQuantity/>,
          unit_price: price_per_item,
          purchased_price: price_per_item*quantityReducer,
          total_price_of_the_item : quantityReducer*(price_per_item + (tax_per_item*0.01*price_per_item)),
          tax_payable_per_item: tax_per_item*0.01*price_per_item,
          tax_per_item: tax_per_item,
          quantityReducer: quantityReducer,
          productReducer: productId
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const columns = [
        {
          title: 'Product ID',
          dataIndex: 'product_id',
          width: '15%',
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          width: '15%',
          // render:(data) => console.log('data',data)
        },
        // {
        //   title: 'Price With Tax',
        //   dataIndex: 'tax_payable_per_item',
        //   width: '15%',
        //   render: (_,current,indexOf)=> console.log(current)
        // },
        // {
        //   title: 'Total Price of the Item',
        //   dataIndex: 'total_price_of_the_item',
        //   width: '15%'  
        // },
        {
          dataIndex: 'operation',
          width: '15%',
          render:(_,current) => 
                          <><Button style={{backgroundColor: 'rgba(99, 255, 167, 0.3)' , color: 'rgba(0, 255, 0, 0.7)', margin: '0 2%'}} onClick={handleAdd}>DONE</Button>
                          <Button style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} onClick={()=> deleteRow(current)}>Delete</Button></>
        },
      ];
    
    const deleteRow = (current) => {
        console.log('current',current)
        console.log(dataSource)
        const newData = dataSource.filter(i => i !== current);
        console.log(newData)
        setDataSource(newData);
    }  
  
    console.log('dataSource',dataSource)

    const newDataSource = dataSource.filter(i=> i?.productReducer !== -1)
    console.log('datadataSource',newDataSource)

    useEffect(() => {
      
      dispatch({
        type: Actions.TABLE_VALUES,
        payload: dataSource,
      })
      dispatch({
        type: Actions.NEW_TABLE_VALUES,
        payload: newDataSource
      })
    })

      
return (
    <div>
        <div className='billSection'>
        <h2 >Bill Section</h2>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }} className='addButton'>
        Add New
      </Button></div>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={{margin: '0 2%'}}
        summary = {(totalPrice)=>{
          let column_3 = 0;
          totalPrice.forEach(({total_price_of_the_item}) =>  {
            column_3 += total_price_of_the_item
          })
          console.log(column_3)
          return (
            <>
            <Table.Summary.Row>
              <Table.Summary.Cell index={3}>
                Total
              </Table.Summary.Cell>  
              <Table.Summary.Cell index={1}>
                {column_3}
              </Table.Summary.Cell>
            </Table.Summary.Row></>
          )
        }}
      />
      <hr/>
      

      <Denomination/>
      
    
    </div>
  )
}

export default Billtable