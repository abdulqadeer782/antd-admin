import React from 'react'
import { Layout, Avatar, Upload, Button, Row, Col, Divider, Form, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import ProfileImage from '../Assets/img/profile.jpg'
import { useMediaQuery } from 'react-responsive'

export default function Profile() {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <Layout>
            <Row>
                <Col xs={24} sm={24} md={20} lg={18} xl={12} style={{ margin: isMobile ? '' : 'auto', background: '#fff', boxShadow: '1px 1px 15px 1px gray', padding: '20px' }}>
                    {/* Edit Information section */}
                    <Row>
                        <Col span={24}>
                            <h2>Edit Information</h2>
                            <Divider />
                            <div style={{ margin: '20px auto' }}>
                                <Avatar shape='square' size={isMobile ? 200 : 300} src={ProfileImage} />
                                <Upload>
                                    <Button style={{ marginLeft: '50px' }} type='primary'>
                                        <EditOutlined />
                                    </Button>
                                </Upload>
                            </div>
                        </Col>
                    </Row>
                    {/* account information section */}
                    <Row>
                        <Col span={24}>
                            <h2>Account Information</h2>
                            <Divider />
                            <Row>
                                <Col span={12}>First Name</Col>
                                <Col span={12}>
                                    <Form.Item name="username" valuePropName='Admin'>
                                        <Input value='First Name' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>First Name</Col>
                                <Col span={12}>
                                    <Form.Item name="username" valuePropName='Last Name'>
                                        <Input value='Last Name' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>Email</Col>
                                <Col span={12}>
                                    <Form.Item name="username" valuePropName='Admin'>
                                        <Input value='admin@example.com' />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* password section */}
                    <Row>
                        <Col span={24}>
                            <h2>Change Password</h2>
                            <Divider />
                            <Row>
                                <Col span={12}>Current Password</Col>
                                <Col span={12}>
                                    <Form.Item name="Current Password" valuePropName='Current Password'>
                                        <Input.Password value='Current Password' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>New Password</Col>
                                <Col span={12}>
                                    <Form.Item name="username" valuePropName='Admin'>
                                        <Input.Password value='admin@example.com' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>Confirm Password</Col>
                                <Col span={12}>
                                    <Form.Item name="username" valuePropName='Admin'>
                                        <Input.Password value='admin@example.com' />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}
