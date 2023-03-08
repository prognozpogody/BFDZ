import { useActions } from "../../hooks/useActions";
import styles from "./style.module.css";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const HeaderProject = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { logOutUser, changeModalState } = useActions();
  const handleRoute = (event) => {
    navigate(event.key);
  };
  const handleLogOut = () => {
    logOutUser();
    navigate("/");
  };

  useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    if (!TOKEN && location.pathname !== "/signup") {
      changeModalState(true);
      navigate("/");
    }
  }, [navigate, location.pathname, changeModalState]);

  return (
    <header className={styles.Header}>
      <nav>
        <a href="/products">Продукты</a>
        <a href="/user">О пользователе</a>
        <a href="#">Контакты</a>
        <div id="indicator"></div>
      </nav>
      <button onClick={handleLogOut}>Выход</button>
    </header>
  );
};
