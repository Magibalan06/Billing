import React from 'react';
import { useSelector } from 'react-redux/es';
import BillSection02 from './BillSection02';



function BillingSystem02() {

  const userEmail = useSelector((state) => state.userEmail)


  return (
    <div className = 'pink'>
      <div style={{width:'10%', backgroundColor: 'rgb(196, 223, 239)'}}></div>


      <div style={{width: '80%'}}>
        <h2 className='bill'>Billing System</h2>
        <h4 className='customerMail'>Customer Email</h4>
        <h5 style={{margin: '0 0 2% 2%', color: 'gray'}}>{userEmail}</h5>

        <BillSection02/>
      </div>

      <div style={{width:'10%', backgroundColor: 'rgb(196, 223, 239)'}}></div>


  </div>
  )
}

export default BillingSystem02