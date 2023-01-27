import Header from "./Components/Header/Header";
import ProductPage from "./Components/Content/ProductPage";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { useContext, useEffect } from "react";
import "./App.css";
// import { apiRegistration } from "./Components/Api/Registration";
import ModalPortal from "./Components/ModalPortal/ModalPortal";
import { UserContext } from "./Components/Context/Context";

function App() {
  const { onFinish, isAuth, setIsAuth, setUserToken } = useContext(UserContext);

  // Проверка на наличие токена, обновление токена в контексте
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);
      setUserToken(token);
    }
  });

  return (
    <>
      {!isAuth && (
        <ModalPortal isOpen={true}>
          <FormAuthorization onFinish={onFinish} />
        </ModalPortal>
      )}
      <Header />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
