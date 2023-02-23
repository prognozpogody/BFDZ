import { Layout } from "antd";
import { CardList } from "../Components/CardList/CardList";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../Components/Spinner/Spinner";
import { getProducts } from "../api/products";

const { Content } = Layout;

export const Products = () => {
  //Здесь получаем по апи с сервера все продукты
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(),
    keepPreviousData: true,
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
        <CardList products={data.products} />
      </div>
    </Content>
  );
};
