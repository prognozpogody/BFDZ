import { Layout} from "antd";
const { Footer } = Layout;

const BlockFooter = () => {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default BlockFooter