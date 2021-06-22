import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'


export default function LoginForm({ onFinish, onFinishFailed }) {


  return (
    <>
    <p style={{color:'black'}}>Login</p>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
      >

        <Form.Item
          name="email"
          rules={[{ type: 'email' ,required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder='Please Enter Your Email' />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' },{max:8,message:'Password Length > 8'}]}
        >
          <Input.Password placeholder='Please Enter Your Email' />
        </Form.Item>

        <Link to='/forgot-password' style={{ color: 'black', float: 'left' }}>
          Forgot Password?
      </Link>

        <Form.Item>
          <Button type="primary" color='primary' htmlType="submit" style={{ float: 'right', borderRadius: '10px'}}>
            Submit
        </Button>
        </Form.Item>
      </Form>
    </>

  )
}
