import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  //Состояние авторизации
  const [isAuth, setIsAuth] = useState(false);
  //Переключатель открытия модалки авторизации
  const [modalOpen, setModalOpen] = useState(false);
  //Хрантель данных о юзере
  const [user, setUser] = useState();
  //Состояние токена
  const [userToken, setUserToken] = useState();

  const userData = {
    isAuth,
    setIsAuth,
    userToken,
    setUserToken,
    modalOpen,
    setModalOpen,
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
