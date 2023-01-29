import { createContext, useState } from "react";
import { apiRegistration } from "../Api/Registration";
import { Navigate } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userToken, setUserToken] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const onFinish = async (values) => {
    const res = await apiRegistration.authorization(values);
    setIsAuth(true);
    localStorage.setItem("token", res.token);
    setUserToken(res.token);
    setModalOpen(false);
    return <Navigate to="/" />;
  };

  const userData = {
    isAuth,
    setIsAuth,
    userToken,
    onFinish,
    setUserToken,
    modalOpen,
    setModalOpen,
  };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
