import { Card, Space } from "antd";

const { Meta } = Card;

const App = ({ products }) => {
  return (
    <Space direction="horizontal" align="center" wrap>
      {products.products.map((product) => {
        return (
          <Card
            style={{ width: 300 }}
            cover={<img alt={product.name} src={product.pictures} />}
          >
            <Meta
              // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={product.name}
              description={product.description}
            />
          </Card>
        );
      })}
    </Space>
  );
};
export default App;
