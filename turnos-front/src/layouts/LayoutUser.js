import React from 'react';
import { Layout } from 'antd';
import "./LayoutUser.scss";

export default function LayoutUser(props){
    const { children } = props;
    const { Header, Content, Footer} = Layout;
    return (
        <Layout>
            <h2>Menu Side USER</h2>
            <Layout>
                <Header>Header....</Header>
                <Content>{ children }</Content>
                <Footer>footer...</Footer>
            </Layout>
        </Layout>
    );

}
