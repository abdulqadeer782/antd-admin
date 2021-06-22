import React from 'react'
import { Layout, Drawer } from 'antd'
import MenuItem from './MenuItem'

const { Sider } = Layout;


export default function MenuComponent({ collapsed, onClose }) {

    return (
        <>
            <Drawer
                placement="left"
                width={150}
                onClose={onClose}
                mask={true}
                closable={true}
                visible={collapsed}
                className="hideOnDesktop"
            >
                <MenuItem/>

            </Drawer>

            <Sider
                id='Sidebar'
                className="hideOnMobile"
                collapsible
                theme="light"
                collapsedWidth={0}
                width={130}
                trigger={null}
                collapsed={collapsed}
            >
                <MenuItem/>
            </Sider>
        </>
    )
}
