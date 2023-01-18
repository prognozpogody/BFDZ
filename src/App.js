import Header from "./Components/Header/Header";
import ProductPage from "./Components/Content/ProductPage";
import Footer from "./Components/Footer/Footer";
import { FormAuthorization } from "./Components/FormAuthorization/FormAuthorization";
import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate, Outlet } from "react-router-dom";
import { api } from "./Components/Api/Api";

function App() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const onFinish = async (values) => {
    const res = await api.authorization(values);
    // проверка
    const responce = await res.json();

    setIsAuth(true);
    localStorage.setItem("token", responce.token);
    navigate("products");
  };

  useEffect(() => {
    // проверяем авторизован ли пользователь через наличие токена
    //TODO: проверять не просто наличие токена, а его состояние
    // отправляя тестовый запрос
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
      navigate("products");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <ProductPage />
      <Footer />
      
      
        <Outlet />
        {!isAuth && <FormAuthorization onFinish={onFinish} />}
      
    </>
  );
}

export default App;
