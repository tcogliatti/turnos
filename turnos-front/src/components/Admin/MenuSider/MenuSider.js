import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import { HomeOutlined as Home, MenuOutlined as MenuWeb} from '@ant-design/icons';
import './MenuSider.scss';

export default function MenuSider(props){
    const {Sider} = Layout;
    const {menuCollapsed} = props;
    return (
       <Sider className='admin-sider' collapsed={menuCollapsed}>
           <Menu theme="dark" mode="inline" defaultSelectedKeys={"1"}>
                <Menu.Item key="1">
                    <Link to={'/admin'}>
                        <Home />
                        <span className="nav-text">Home</span>
                    </Link>
                    
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={'/admin/menu-web'}>
                        <MenuWeb />
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>
           </Menu>
       </Sider>
    );
    
}