import { Input, Form, Button } from 'antd';

export function FormAuthorization({ onFinish }) {
  return <Form
    name="basic"
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
}
