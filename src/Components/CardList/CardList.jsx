import { Button, Card, Space } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/slices/cartSlice";

const { Meta } = Card;

export const CardList = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (id) => {
    dispatch(addToCart({ id, isAdded: false, count: 1 }));
  };

  return (
    <Space direction="horizontal" align="center" wrap>
      {products &&
        products.map((product) => {
          return (
            <Card
              key={product._id}
              style={{ width: 300 }}
              cover={<img alt={product.name} src={product.pictures} />}
            >
              <Meta title={product.name} description={product.description} />
              <Button
                type="primary"
                onClick={() => handleAddToCart(product._id)}
              >
                Добавить
              </Button>
            </Card>
          );
        })}
    </Space>
  );
};
