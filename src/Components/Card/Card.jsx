import { Card, Space } from "antd";

const { Meta } = Card;

const Cards = ({ products }) => {
  return (
    <Space direction="horizontal" align="center" wrap>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            style={{ width: 300 }}
            cover={<img alt={product.name} src={product.pictures} />}
          >
            <Meta title={product.name} description={product.description} />
          </Card>
        );
      })}
    </Space>
  );
};
export default Cards;
