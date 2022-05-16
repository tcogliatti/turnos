import { React } from "react";
import { Layout } from "antd";

export default function LayoutClient(props){
    const { children } = props;
    const { Footer, Content } = Layout;

    return (
        <Layout>
            <h2>Menu Side Client</h2>
            <Layout>
                <Content> { children } </Content>
                <Footer>Footer ... </Footer>
            </Layout>
        </Layout>
    );
};