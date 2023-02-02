import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { useContext, useEffect } from "react";
import "./App.css";
import ModalPortal from "./Components/ModalPortal/ModalPortal";
import { UserContext } from "./Context/Context";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";
import { apiUser } from "./Api/User";



function App() {
  const {
    onFinishSignIn,
    setIsAuth,
    setUserToken,
    modalOpen,
    setModalOpen,
    isAuth,
    setUser,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  // Проверка на наличие токена, обновление токена в контексте, вызов модалки
  // авторизации, если нет токена
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);
      setUserToken(token);
      apiUser.getInfoUser().then((user) => {
        setUser(user);
      });
    } else if (!isAuth && location.pathname !== "/signup") {
      setModalOpen(true);
    }
  }, [
    setIsAuth,
    setUserToken,
    modalOpen,
    setModalOpen,
    isAuth,
    location.pathname,
    navigate,
    setUser,
  ]);

  return (
    <>
      <ModalPortal isOpen={modalOpen}>
        <FormAuthorization onFinish={onFinishSignIn} />
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
