import React from 'react';
import {Button} from 'antd';
import BillDiv from './BillDiv';

function BillList() {

    const addRow = () => {
        return (
            <BillDiv/>)
        
        
    }

  return (
    <div>
        <Button onClick={() => addRow}>Add</Button>
    </div>
  )
}

export default BillList