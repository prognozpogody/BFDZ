import Header from "./Components/Header/Header";
import ProductPage from "./Components/Content/ProductPage";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { api } from "./Components/Api/Api";
import ModalPortal from "./Components/ModalPortal/ModalPortal";

function App() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  // Получем данные с формы авторизации, кладем в стор токен, чтобы потом по нему отправлять другие запросы
  const onFinish = async (values) => {
    const res = await api.authorization(values);
    setIsAuth(true);
    localStorage.setItem("token", res.token);
  };

  useEffect(() => {
    // проверяем авторизован ли пользователь через наличие токена
    //TODO: проверять не просто наличие токена, а его состояние
    // отправляя тестовый запрос
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <ProductPage />
      <Footer />
        {!isAuth && (
          <ModalPortal isOpen ={true} >
            <FormAuthorization onFinish={onFinish} />
          </ModalPortal>
        )}
      
    </>
  );
}

export default App;
