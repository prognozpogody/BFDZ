import { Breadcrumb, Layout } from "antd";
import Card from "./Card";
import { useEffect, useState, useContext } from "react";
import { apiProducts } from "../Api/Products";
import { UserContext } from "../Context/Context";

const { Content } = Layout;

const BlockContent = () => {
  const {userToken} = useContext(UserContext);
  const [products, setProducts] = useState({ total: 0, products: [] });
 
  //Здесь получаем по апи с сервера все продукты
  useEffect(() => {
    const cardContent = async () => {
      const res = await apiProducts.getProducts(userToken);
      setProducts(res);
      
    };

    cardContent();
  }, [userToken]);

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
          <Card products={products} />
        </div>
      </Content>
    </Layout>
  );
};

export default BlockContent;
