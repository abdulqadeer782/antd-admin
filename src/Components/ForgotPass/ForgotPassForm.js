import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'


export default function ForgotPassForm({ onFinish, onFinishFailed }) {


  return (
    <>
    <p style={{color:'black'}}>Forgot Password</p>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
      >

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder='Please Enter Your Email' />
        </Form.Item>

        <Link to='/sign-in' style={{ color: 'black', float: 'left' }}>
          Go to Login!
      </Link>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ float: 'right', borderRadius: '10px'}}>
            Submit
        </Button>
        </Form.Item>
      </Form>
    </>

  )
}
