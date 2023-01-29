import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const menuItems = [
  {
    key: `ProductPage`,
    label: `ProductPage`,
  },
  {
    key: `UserPage`,
    label: `UserPage`,
  },
];

const Block = () => {
  const navigate = useNavigate();
  const handleRoute = (event) => {
    navigate(event.key);
  };

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
          onClick={handleRoute}
        />
      </Header>
    </Layout>
  );
};

export default Block;
