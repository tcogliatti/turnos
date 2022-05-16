import React from 'react';
import { Layout } from 'antd';
// import "./LayoutAdmin.scss";

export default function LayoutAdmin(props){
    const { children } = props;
    const { Header, Content, Footer} = Layout;
    return (
        <Layout>
            <Content>{ children }</Content>
        </Layout>
    );

}
