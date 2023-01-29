import { createContext, useState } from "react";
import { apiRegistration } from "../Api/Registration";
import { Navigate } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  //Состояние авторизации
  const [isAuth, setIsAuth] = useState(false);
   //Состояние токена
  const [userToken, setUserToken] = useState();
   //Переключатель открытия модалки авторизации
  const [modalOpen, setModalOpen] = useState(false);
  //Хрантель данных о юзере
  const [user, setUser] = useState();

  // Результат обработки формы авторизации
  const onFinishSignIn = async (values) => {
    const res = await apiRegistration.authorization(values);
    setIsAuth(true);
    localStorage.setItem("token", res.token);
    setUserToken(res.token);
    setModalOpen(false);
    return <Navigate to="/" />;
  };

  // Результат обработки формы регистрации
  const onFinishSignUp = async (values) => {
    await apiRegistration.registration(values);
    const res = await apiRegistration.authorization({
      email: values.email,
      password: values.password,
    });
    localStorage.setItem("token", res.token);
    setIsAuth(true);
    setUserToken(res.token);
    return <Navigate to="/" />;
  };

  const userData = {
    isAuth,
    setIsAuth,
    userToken,
    onFinishSignIn,
    setUserToken,
    modalOpen,
    setModalOpen,
    onFinishSignUp,
    user,
    setUser,

  };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
