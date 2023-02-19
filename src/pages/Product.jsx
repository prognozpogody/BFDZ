import { Layout } from "antd";
import Card from "../Components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../Components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/thunk";
import {
  setProducts,
  getAllProductsSelector,
} from "../Redux/slices/productsSlice";

const { Content } = Layout;

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProductsSelector);
  //Здесь получаем по апи с сервера все продукты
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => dispatch(getProducts()),
  });
  dispatch(setProducts(data));

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
        <Card products={products} />
      </div>
    </Content>
  );
};

export default ProductPage;
