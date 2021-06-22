import React, { useState, Fragment } from "react";
import { Divider, Layout, Menu, Space } from "antd";

import HeaderComponent from "../Components/HeaderComponent";
import MenuComponent from "../Components/MenuComponent";
import ContentComponent from "../Components/ContentComponent";
import { useLocation } from 'react-router-dom'


const { Content, Footer } = Layout;

function Main() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };

  const onClose = () => {
    setCollapsed(false);
  }
  return (

    <Layout style={{ height: '100vh' }}>
      {sessionStorage.getItem('token') ?
        <HeaderComponent toggle={toggle} setCollapsed={setCollapsed} collapsed={collapsed} /> : ''}
            <Layout>
              {sessionStorage.getItem('token') ?
                <MenuComponent collapsed={collapsed} onClose={onClose} /> : ''}
              <Content style={{ overflowY: 'scroll'}}>
                <ContentComponent />
                <Divider />
                <Footer style={{ color: '#8f8f8f',background:'none' }}>Copyright @ 2021.All Right Reserved.  </Footer>
              </Content>
            </Layout>
    </Layout>



  );
}

export default Main;
