import { Layout, Menu } from "antd";

const { Header } = Layout;

const Block = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            float: "left",
            width: 150,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "green",
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `Страница ${index + 1}`,
          }))}
        />
      </Header>
    </Layout>
  );
};

export default Block;
