import { Input, Button, Form, Modal } from 'antd'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Actions from '../Redux/actions'

function Denomination() {

    const customerFinalAmount = useSelector((state) => state.customerFinalAmount)
    const newDataSource = useSelector ((state) => state.newDataSource)
    const customerAmount = useSelector((state) => state.customerAmount)
    // console.log('customerAmount',customerAmount)
    const table_values = useSelector ((state) => state.table_values)
    const denomination = useSelector((state) => state.denomination)
    // console.log('denomination',denomination)
    const customerDenomination = useSelector((state) => state.customerDenomination)
    // console.log('customerDenomination',customerDenomination)

    const dispatch = useDispatch()

    let net_price_of_purchased = 0;
    let net_price_of_purchased01 = newDataSource?.map ((i) => (net_price_of_purchased += i?.total_price_of_the_item))

    let rounded_amount = Math.round(net_price_of_purchased)
    console.log('rounded_amount',rounded_amount)

  const customerDenominationObjectValue = (Object.values(customerDenomination))
//   console.log('customerDenominationObjectValue',customerDenominationObjectValue)
  const denominationObjectValue = (Object.values(denomination))
//   console.log('denominationObjectValue',denominationObjectValue)
  const customerAmountObjectKey = (Object.keys(customerAmount))
  const customerAmountObjectValue = (Object.values(customerAmount))
//   console.log('customerAmountObjectValue',customerAmountObjectValue)


  var balanceDenomination = []
  for(var i=0; i< 10; i++) {
    balanceDenomination.push(parseInt(denominationObjectValue[i]) + parseInt(customerAmountObjectValue[i]) - customerDenominationObjectValue[i])
  }
//   console.log('balanceDenomination',balanceDenomination)

  var CustomerFinalAmount = 0;
    for(var i=0; i< customerAmountObjectValue.length; i++) {
    CustomerFinalAmount += customerAmountObjectKey[i]*customerAmountObjectValue[i];
    }
    console.log('SUMSUMSUMSUMSUSMSUM' ,CustomerFinalAmount)

    const onFinish = (values) => {
        dispatch({
            type: Actions.DENOMINATION,
            payload: values
        })
        dispatch({
            type:Actions.CUSTOMER_FINAL_AMOUNT,
            payload: CustomerFinalAmount
        })
        dispatch({
            type: Actions.REMAINING_AMOUNT,
            payload: CustomerFinalAmount - rounded_amount
        })
        navigate('/bill')
        console.log(values)
        // console.log('CustomerFinalAmount',CustomerFinalAmount)
    }

    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (values) => {
    console.log('values',values)
    dispatch({
        type: Actions.CUSTOMER_AMOUNT,
        payload: values
    })
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

 const disabledFn = () => {
    console.log(customerFinalAmount>=rounded_amount)
 }



  return (
    <div>
        <h2 style={{margin: '2% 0% 2% 2%'}}>Denomination</h2>
        <Form  name='denomination' style={{marginLeft: '5%'}} onFinish={onFinish} id='myForm'>
            <Form.Item label="2000" name='2000' style={{display: 'inline-block'}} initialValue={balanceDenomination[9]}>
                <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number' />
            </Form.Item>
            <Form.Item label="500" name='500' style={{display: 'inline-block', marginLeft:'5%'}} initialValue={balanceDenomination[8]}>
                <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item >
            <Form.Item></Form.Item>
            <Form.Item label="200" name='200' style={{display: 'inline-block'}} initialValue={balanceDenomination[7]}>
                <Input style={{width:'150px', marginLeft: '0.6%',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item label="100" name='100' style={{display: 'inline-block', marginLeft:'5%'}} initialValue={balanceDenomination[6]}>
                <Input style={{width:'150px',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item></Form.Item>
            <Form.Item label="50" name='50' style={{display: 'inline-block'}} initialValue={balanceDenomination[5]}>
                <Input style={{width:'150px', marginLeft: '1%',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item label="20" name='20' style={{display: 'inline-block', marginLeft:'6.5%'}} initialValue={balanceDenomination[4]}>
                <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item></Form.Item>
            <Form.Item label="10" name='10' style={{display: 'inline-block'}} initialValue={balanceDenomination[3]}>
                <Input style={{width:'150px', marginLeft: '1%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item label="5" name='5' style={{display: 'inline-block', marginLeft:'6.8%'}} initialValue={balanceDenomination[2]}>
                <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item></Form.Item>
            <Form.Item label="2" name='2' style={{display: 'inline-block'}} initialValue={balanceDenomination[1]}>
                <Input style={{width:'150px',  marginLeft: '1.2%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item label="1" name='1' style={{display: 'inline-block', marginLeft:'7%'}} initialValue={balanceDenomination[0]}>
                <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
            </Form.Item>
            <Form.Item label="" >
                <div className='totalAmount'>
                <h4 style={{margin: '0 1% 0 4%'}}>Cash paid by Customer</h4> 


                <Button type="primary" onClick={showModal}>Amount</Button>


                <Modal title="Customer Amount" open={isModalOpen} onCancel={handleCancel}
                footer={[
                    <Button onClick={handleCancel}>Cancel</Button>,
                    <Button type='primary' form='CustomerForm' htmlType="submit">Save</Button>
                ]}>

                    <Form  name='Customer Amount' style={{marginLeft: '5%'}} onFinish={handleOk} id='CustomerForm'>
                        <Form.Item label="2000" name='2000' style={{display: 'inline-block'}} initialValue='0'>
                            <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item label="500" name='500' style={{display: 'inline-block', marginLeft:'5%'}} initialValue='0'>
                            <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item >
                        <Form.Item></Form.Item>
                        <Form.Item label="200" name='200' style={{display: 'inline-block'}} initialValue='0'>
                            <Input style={{width:'150px', marginLeft: '0.6%',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item label="100" name='100' style={{display: 'inline-block', marginLeft:'5%'}} initialValue='0'>
                            <Input style={{width:'150px',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item></Form.Item>
                        <Form.Item label="50" name='50' style={{display: 'inline-block'}} initialValue='0'>
                            <Input style={{width:'150px', marginLeft: '1%',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item label="20" name='20' style={{display: 'inline-block', marginLeft:'6.5%'}} initialValue='0'>
                            <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item></Form.Item>
                        <Form.Item label="10" name='10' style={{display: 'inline-block'}} initialValue='0'>
                            <Input style={{width:'150px', marginLeft: '1%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item label="5" name='5' style={{display: 'inline-block', marginLeft:'6.8%'}} initialValue='0'>
                            <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item></Form.Item>
                        <Form.Item label="2" name='2' style={{display: 'inline-block'}} initialValue='0'>
                            <Input style={{width:'150px',  marginLeft: '1.2%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                        <Form.Item label="1" name='1' style={{display: 'inline-block', marginLeft:'7%'}} initialValue='0'>
                            <Input style={{width:'150px', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity'type='number'/>
                        </Form.Item>
                    </Form>

                </Modal>


                <h4 style={{width: '10%',margin: '5px 0 0 20px', paddingLeft: '12px'}}>{CustomerFinalAmount}</h4>

                <div style={{marginLeft: '30%'}}>
                <Button >
                    Cancel
                </Button>
                <Button form='myForm' type='primary' htmlType="submit" style={{width:'125px', height:'40px', marginLeft: '25px'}}  
                >
                    Generate Bill
                </Button></div>
                </div>
            </Form.Item>
        </Form> 
    </div>
  )
}

export default Denomination