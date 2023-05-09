import { Form, Input, InputNumber, DatePicker, Modal, message, Button, Table } from 'antd';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ITEM,} from '../utils/mutations';
import { GET_ITEMS } from '../utils/queries';
import moment from 'moment';

const ItemFormModal = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [addItem, { loading }] = useMutation(ADD_ITEM);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log('Values before input:', values);
      
      const{date} = values;
      const dateString = moment(date).format('YYYY-MM-DD');
      
      const item ={
      
          date: dateString,
          city: values.city,
          hotel: values.hotel,
          details: values.details,
          flights: values.flights,
          accomodation: values.accomodation,
          food: values.food,
          activities: values.activities
        };
       

      await addItem({
        variables: item});
      
      console.log('Values after input:', item);

      message.success('Item added successfully!');
      // handleSubmit();
      setVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Error in addItem mutation', error);
      message.error('Failed to add item. Please try again later.');
    }
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const validateMessages = {
    required: '${label} is required'
  };

  return (
    <>
    
      <Button className = "addbutton" type="primary" onClick={() => setVisible(true)}>Add Item</Button>
      <Modal
        open={visible} // changed "open" to "visible"
        title="Add Item"
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
        destroyOnClose={true}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleOk}
          validateMessages={validateMessages}
        >
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="hotel" label="Hotel" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="details" label="Details" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item
            name="flights"
            label="Flights"
            rules={[{ type: 'number', min: 0, required: true }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="accomodation"
            label="Accomodation"
            rules={[{ type: 'number', min: 0, required: true }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="food"
            label="Food"
            rules={[{ type: 'number', min: 0, required: true }]}
          >
            <InputNumber style={{ width: '100%' }} />
          
          </Form.Item>
          <Form.Item
            name="activities"
            label="Activities"
            rules={[{ type: 'number', min: 0, required: true }]}
          >
            <InputNumber style={{ width: '100%' }} />
          
          </Form.Item>
        </Form>
      </Modal>
    </>
    
  );
};

export default ItemFormModal;

