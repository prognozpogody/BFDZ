import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { useContext, useEffect } from "react";
import "./App.css";
import ModalPortal from "./Components/ModalPortal/ModalPortal";
import { UserContext } from "./Components/Context/Context";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";

function App() {
  const { onFinish, setIsAuth, setUserToken, modalOpen, setModalOpen, isAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  
console.log(location.pathname);
  // Проверка на наличие токена, обновление токена в контексте, вызов модалки 
  // авторизации, если нет токена
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);
      setUserToken(token);
      navigate("ProductPage");
    } else if (!isAuth && location.pathname !== "/signup") {
    
      setModalOpen(true)
    }
  }, [navigate]);

  return (
    <>
      <ModalPortal isOpen={modalOpen}>
        <FormAuthorization onFinish={onFinish} />
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            setModalOpen(false);
            navigate("signup");
            
          }}
        >
          Зарегестрироваться
        </Button>
      </ModalPortal>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
