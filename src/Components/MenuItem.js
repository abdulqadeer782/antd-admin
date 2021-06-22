import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'

const { SubMenu } = Menu



export default function MenuItem() {
    const location = useLocation()
    return (
        <div>
            <Menu
                mode="vertical"
                defaultSelectedKeys={['/']}
                selectedKeys={[location.pathname]}
                style={{ textAlign: 'center', background: 'none', border: 'none' }}
                
            >
                <Menu.Item key='/'>
                    <Link to='/' className='active'>
                        <DashboardOutlined style={{ fontSize: '2rem', padding: "10px" }} />
                        <br/>Dashboard
                    </Link>
                </Menu.Item>
                <Link to='/Users'>
                    <UserOutlined style={{ fontSize: '2rem', paddingTop: "10px" }} />
                    Users
                    <SubMenu key="2" title='Users' popupOffset={-1}>
                        <Menu.Item key='iser'>
                            <Link to='/User/AddUser'>Add New User</Link>
                        </Menu.Item>
                    </SubMenu>
                </Link>
                <SubMenu key="/Users" icon={<UserOutlined />} title="Users">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <Link>
                    <SettingOutlined style={{ fontSize: '2rem', paddingTop: "10px" }} />
                    <SubMenu key="3" title='Module' popupOffset={-1}>
                        <Menu.Item>
                            <Link to='/Modules/sff'>Add New User</Link>
                        </Menu.Item>
                    </SubMenu>
                </Link>
            </Menu>
        </div>
    )
}
