import React,{useState} from 'react'
import { Layout,Form, Input, InputNumber, Button,Divider,Row,Col } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {useMediaQuery} from 'react-responsive'

const antIcon = <LoadingOutlined style={{ fontSize: 24,color:"white" }} spin />


const layout = {
    labelCol: {
        xs:{
            span: 4,
        },
        sm:{
            span:4
        }
    },
    wrapperCol: {
        span: 24,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

export default function AddUser() {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const [spinner,setSpinner] = useState(false)


    const onFinish = (values) => {
        console.log(values);

        // for spinner functionality
        setSpinner(true)
    };

    return (
        <Layout>
            <Row>
                <Col xs={24} sm={24} md={20} lg={18} xl={12} style={{ margin: isMobile ? '' : 'auto', background: '#fff', boxShadow: '1px 1px 15px 1px gray', padding: '20px' }}>
               
            <Form {...layout} size='large' onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required:true
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="Age"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" block>
                        {spinner ? <Spin indicator={antIcon}/>:'Submit'}
                    </Button>
                </Form.Item>
            </Form>
            </Col>
            </Row>
        </Layout>
    );
};