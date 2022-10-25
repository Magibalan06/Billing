import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Select } from 'antd';
import { useSelector } from 'react-redux/es';
import Denomination from '../Denomination';

function BillSection() {

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    }

    const productList = useSelector((state) => state.productList)

    const { Option } = Select;

    return (
    <div >
        <Form name="dynamic_form_item" layout='vertical'  onFinish={onFinish} style={{margin: '2% 0 2% 40%'}}>
          <Form.List
            name="names"
            
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Form.Item
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      style={{display: 'inline-flex'}}
                     
                    >
                      <Select placeholder="Product ID" style={{ width: '100%' }} >
                        {productList ? 
                        <>
                        
                            {productList?.data?.map(i=> (
                              console.log(i?.product_id),
                                 <Option value={i?.product_id}>{i?.product_id}</Option>
                             ))}</> 
                        : "" }

                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      style={{display: 'inline-flex'}}
                     
                    >
                      <Select placeholder="Quantity" style={{ width: '100%'}} />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      style={{display: 'inline-flex'}}
                    >
                      {/* <Select placeholder="passenger name" style={{ width: '100%'}} /> */}
                    </Form.Item>
                    {fields.length > 1 ? (
                        <Button
                        type='primary'
                        onClick={() => remove(field.name)}>
                            Delete</Button>
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={() => add()}
                    style={{ width: '20%' }}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
        <Denomination/>
      </div>);
}

export default BillSection