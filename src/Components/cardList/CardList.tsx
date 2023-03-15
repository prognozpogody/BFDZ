import { useActions } from "../../hooks/useActions";
import { Button, Card, Space } from "antd";
import React from "react";

interface CardListProps {
  products: {
    name: string;
    _id: string;
    description: string;
    pictures: string;
  }[];
}

const { Meta } = Card;

export const CardList = ({ products }: CardListProps) => {
  const { addToCart } = useActions();

  const handleAddToCart = (id: string) => {
    addToCart({ id, isAdded: false, count: 1 });
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
