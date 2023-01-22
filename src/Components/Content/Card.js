import { Card } from "antd";
import { apiProducts } from "../Api/Products";
import { useEffect } from "react";

const { Meta } = Card;

const App = () => {
  useEffect(() => {
    const cardContent = async (values) => {
      const res = await apiProducts.getProducts(values);
      console.log(res);
      console.log(res.products);
    };

    cardContent();
  }, []);
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};
export default App;
