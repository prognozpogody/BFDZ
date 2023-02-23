import { Card, Space } from "antd";

const { Meta } = Card;

export const CardList = ({ products }) => {
  return (
    <Space direction="horizontal" align="center" wrap>
      {products.map((product) => {
        return (
          <Card
            key={product._id}
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

