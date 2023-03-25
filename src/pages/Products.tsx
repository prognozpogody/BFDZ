import { CardList } from "../Components/card/CardList";
import { Spinner } from "../Components/ui/spinner/Spinner";
import { getSearchSelector } from "../Redux/slices/filterSlice";
import { getSearchProduct } from "../api/productsApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";

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

  return <CardList products={data.data} />;
};
