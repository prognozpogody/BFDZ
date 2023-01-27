import { createContext, useState } from "react";
import { apiRegistration } from "../Api/Registration";
export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userToken, setUserToken] = useState();

  const onFinish = async (values) => {
    const res = await apiRegistration.authorization(values);
    setIsAuth(true);
    localStorage.setItem("token", res.token)
    setUserToken(res.token);
    
  };


  const userData = { isAuth, setIsAuth, userToken, onFinish, setUserToken };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
