import { Col, Row,Layout, Divider } from 'antd'
import React from 'react'
import ForgotPassForm from './ForgotPassForm'

export default function LoginPage() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Layout id='AuthBack'>
            <Row>
                <Col xs={20} sm={20} md={20} lg={19} style={{margin:'auto'}}>
                    <Row className='login-page-content'>
                        <Col xs={24} sm={24} md={24} lg={10} xl={10} className='login-page-content-left'>
                            <h1>MAGIN IS IN THE DETAILS</h1>
                            <p>Please use your credentials to login.
                            If you are not a member, please register.</p>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={14} xl={14} className='login-page-content-right'>
                            <h2>Logo</h2>
                            <Divider/>
                            <Divider/>
                            <ForgotPassForm onFinish={onFinish} onFinishFailed={onFinishFailed}/>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </Layout>
    )
}
