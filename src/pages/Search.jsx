import { Layout } from "antd";
import { CardList } from "../Components/CardList/CardList";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../Components/Spinner/Spinner";
import { getSearchProduct } from "../api/products";
import { useSelector } from "react-redux";
import { getSearchSelector } from "../Redux/slices/filterSlice";

const { Content } = Layout;

export const Search = () => {
  const searchState = useSelector(getSearchSelector);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getSearch", searchState],
    queryFn: async () => {
      return await getSearchProduct(searchState);
    },
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
        <CardList products={data.data} />
      </div>
    </Content>
  );
};
