import React, { useEffect } from 'react';
import {Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../Redux/actions';

function BalanceDenomination() {

  const dispatch = useDispatch()

  // const denomination  = useSelector ((state) => state.denomination)
  // console.log('denomination',denomination)
  // let denominationKeys = Object.keys


  const remainingAmount = useSelector((state) => state.remainingAmount)
  let remainingAmount01 = useSelector((state) => state.remainingAmount)
  // console.log('remainingAmount',remainingAmount01)
  

  let currency = [1,2,5,10,20,50,100,200,500,2000]
  let noteCounter = Array(10).fill(0);
  for (let i = 9; i >= 0; i--) {
    if (remainingAmount01 >= currency[i]) {
        noteCounter[i] = Math.floor(remainingAmount01 / currency[i]);
        remainingAmount01 = remainingAmount01 % currency[i];
    }
}

  useEffect(() => {
    dispatch({
      type: Actions.CUSTOMER_DENOMINATION,
      payload: noteCounter
    })
  })
// console.log('first',noteCounter)

  return (

    <div>
        <h2 style={{margin: '2% 0 0 2%'}}>Balance Denomination</h2>
        <div>
            <div style={{margin: '5% 0% 2% 5% '}}>
                <div>
                  2000
                  <Input style={{width:'250px',margin: '0 0 4% 20.3%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number' 
                  value={noteCounter[9]}
                  />
                </div>
                <div>
                  500
                  <Input style={{width:'250px',margin: '0 0 4% 21%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[8]}
                  />
                </div>
                <div>
                  200
                  <Input style={{width:'250px',margin: '0 0 4% 21%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[7]}
                  />
                </div>
                <div>
                  100
                  <Input style={{width:'250px',margin: '0 0 4% 21%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[6]}/>
                </div>
                <div>
                  50
                  <Input style={{width:'250px',margin: '0 0 4% 21.7%',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[5]}/>
                </div>
                <div>
                  20
                  <Input style={{width:'250px',margin: '0 0 4% 21.7%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[4]}/>
                </div>
                <div>
                  10
                  <Input style={{width:'250px',margin: '0 0 4% 21.7%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[3]}/>
                </div>
                <div>
                  5
                  <Input style={{width:'250px',margin: '0 0 4% 22.6%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[2]}/>
                </div>
                <div>
                  2
                  <Input style={{width:'250px',margin: '0 0 4% 22.6%', backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[1]}/>
                </div>
                <div>
                  1
                  <Input style={{width:'250px',margin: '0 0 4% 22.6%',  backgroundColor:'rgb(196,223,239', border: 'none'}} placeholder='Quantity' type='number'
                  value={noteCounter[0]}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BalanceDenomination