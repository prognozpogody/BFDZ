import { Layout, Menu } from "antd";

const { Header } = Layout;

const menuItems = [
  {
    key: `products`,
    label: `Products`,
  },
  {
    key: `users`,
    label: `Users`,
  },
];

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
          defaultSelectedKeys={["products"]}
          items={menuItems}
        />
      </Header>
    </Layout>
  );
};

export default Block;
