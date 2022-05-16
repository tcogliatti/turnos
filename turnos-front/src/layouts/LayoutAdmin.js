import React, {useState} from 'react';
import { Layout } from 'antd';
import "./LayoutAdmin.scss";
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';

export default function LayoutAdmin(props){
    const { children } = props;
    const [ menuCollapsed, setMenuCollapsed]  = useState(false); // los estados se declaran con corchetes no con llaves

    const { Header, Content, Footer} = Layout;
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed}/>
            <Layout className="layout-admin" 
                    style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
                <Header className="layout-admin__header">
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                </Header>
                <Content className="layout-admin__content">
                    { children }
                </Content>
                <Footer className="layout-admin__footer">
                    TC-systems || copyleft 2020
                </Footer>
            </Layout>
        </Layout>
    );

}
