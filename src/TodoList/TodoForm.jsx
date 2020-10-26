import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const TodoForm = () => {
    const { dispatch } = useContext(TodoContext);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const { todoItem } = values;
        dispatch({ type: 'add', item: todoItem});
        form.resetFields();
    };
  
    const onFinishFailed = (errorInfo) => {
    };
  
    return (
      <Form
        {...layout}
        form={form}
        name="todoForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="todoItem"
        >
          <Input
            name="itemField" 
          />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

export default TodoForm;