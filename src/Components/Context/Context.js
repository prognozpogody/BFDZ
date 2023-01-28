import { createContext, useState } from "react";
import { apiRegistration } from "../Api/Registration";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userToken, setUserToken] = useState();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await apiRegistration.authorization(values);
    setIsAuth(true);
    localStorage.setItem("token", res.token)
    setUserToken(res.token);
    navigate('ProductPage')
  };


  const userData = { isAuth, setIsAuth, userToken, onFinish, setUserToken };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
