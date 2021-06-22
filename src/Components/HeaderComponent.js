import React, { useState } from "react";
import { Layout, Menu, Row, Col ,Dropdown,Divider} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from "@ant-design/icons";

import { Link, useHistory } from 'react-router-dom'
import Avatar from "antd/lib/avatar/avatar";
import logoImg from '../Assets/img/contactPluss.png'


const { Header } = Layout




const HeaderComponent = ({ collapsed, toggle }) => {

    const history = useHistory()

    

    const logOut = () => {
        sessionStorage.clear('token')
        history.push('/sign-in')
    }


    // menu for user icon right side
    const menu = (
        <Menu style={{width:"150px",float:'right' }}>
            <Menu.Item key='profile'>
                <Link to='/profile'>Profile</Link>
            </Menu.Item>
            <hr style={{color: '#8f8f8f' }}/>
            <Menu.Item key='logout' onClick={logOut}>Signout</Menu.Item>
        </Menu>
    )

    return (
        <Header id='Header'>
            <Row>
                <Col span={8}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Col>
                <Col span={8}>
                    <div className='logo'>
                        <img src={logoImg} alt="dsaf" height='100%' width='100%' />
                    </div>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                    
                     <Dropdown overlay={menu} trigger={['click']}>
                        <div>
                            <span id='iconMenu' style={{ color: '#999', marginRight: 4,cursor:'pointer' }}>
                                Hi ,Admin
                            <Avatar icon={<UserOutlined/>} size='large' style={{ marginLeft: 8 }} /> 
                        </span>       
                    </div>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent



