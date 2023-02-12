import { Layout } from "antd";
import Card from "../Components/Content/Card";
import { ProductsApi } from "../Api/Products";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../Components/Spinner/Spinner";

const { Content } = Layout;

const ProductPage = () => {
   //Здесь получаем по апи с сервера все продукты
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => ProductsApi.getProducts(),
  });

  if (isLoading) return <Spinner />;

  if (isError) return <p>Error happend: {error.message}</p>;

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
        <Card products={data.products} />
      </div>
    </Content>
  );
};

export default ProductPage;
