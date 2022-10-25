import React from 'react';
import {Input, Button} from 'antd';
import Billtable from './Billtable';
import { useDispatch, useSelector } from 'react-redux/es';
import Actions from '../../Redux/actions';
import BillSection from './BillSection';
import { useNavigate } from 'react-router-dom';
import BillDiv from './BillDiv';
import BillList from './BillList';

function BillingSystem() {

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const eMail = (e) => {
        console.log(e.target.value)
        dispatch({
            type: Actions.USER_EMAIL,
            payload: e.target.value
        })
        // localStorage.setItem('Email',e.target.value)
    }
  return ( 
    <div className='pink'> 
        <div style={{width:'10%', backgroundColor: 'rgb(196, 223, 239)'}}></div>
        <div style={{width: '80%'}}>
        <h2 className='bill'>Billing System</h2>
        <div className='customerMail'>Customer Email: <Input className='inputEmail' onBlur={eMail} placeholder='Enter Email Address'/></div>
        <hr/>

        {/* <BillSection/> */}
        

        <Billtable/>

        {/* <BillList/> */}

        {/* <BillDiv/> */}
        {/* Customer Email: {localStorage.getItem('Email')} */}

        
    </div>
    <div style={{width:'10%', backgroundColor: 'rgb(196, 223, 239)'}}></div>

    {/* <BillingSystem02/> */}

  
    </div>
)
}

export default BillingSystem