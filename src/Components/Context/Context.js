import { createContext, useState } from "react";
import { apiRegistration } from "../Api/Registration";
export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userToken, setUserToken] = useState();
  const setUserTokenHand = (value) => {
    setUserToken(value);
  };
  const onFinish = async (values) => {
    const res = await apiRegistration.authorization(values);
    setIsAuth(true);
    setUserTokenHand(localStorage.setItem("token", res.token));
  };


  const userData = { isAuth, setIsAuth, userToken, setUserTokenHand, onFinish };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
