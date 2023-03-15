import { CardList } from "../Components/cardList/CardList";
import { Spinner } from "../Components/ui/spinner/Spinner";
import { getSearchSelector } from "../Redux/slices/filterSlice";
import { getSearchProduct } from "../api/productsApi";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const { Content } = Layout;

export const Products = () => {
  const searchState = useSelector(getSearchSelector);
  const { data, isLoading, isError, error } = useQuery<any, Error>({
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
