import { Breadcrumb, Layout } from "antd";
import  Card  from "./Card";
const { Content } = Layout;

const BlockContent = () => {
  return (
    <Layout>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "white",
          }}
        >
          <Card />!!!!
        </div>
      </Content>
    </Layout>
  );
};

export default BlockContent;
