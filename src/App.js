import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { useContext, useEffect } from "react";
import "./App.css";
import ModalPortal from "./Components/ModalPortal/ModalPortal";
import { UserContext } from "./Components/Context/Context";
import { useNavigate, Outlet } from "react-router-dom";

function App() {
  const { onFinish, isAuth, setIsAuth, setUserToken } = useContext(UserContext);
  const navigate = useNavigate();

  // Проверка на наличие токена, обновление токена в контексте
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);
      setUserToken(token);
      navigate('ProductPage')
    }
  },[navigate]);
 



  return (
    <>
      {!isAuth && (
        <ModalPortal isOpen={true}>
          <FormAuthorization onFinish={onFinish} />
        </ModalPortal>
      )}
      <Header />
      <Outlet />
      <Footer />
      
    </>
  );
}

export default App;
