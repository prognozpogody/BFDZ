import { Layout } from "antd";
import Card from "../Components/Content/Card";
import { useEffect, useState, useContext } from "react";
import { apiProducts } from "../Api/Products";
import { UserContext } from "../Context/Context";

const { Content } = Layout;

const ProductPage = () => {
  const { userToken } = useContext(UserContext);
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
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
      }}
    >
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
  );
};

export default ProductPage;
