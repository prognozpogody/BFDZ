import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { changeModalState } from "../../Redux/slices/modalSlice";
import { logOutUser } from "../../Redux/slices/userSlice";
import { SearchInput } from "../SearchInput/SearchInput";
import styles from "./style.module.css";

export const HeaderProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleRoute = (event) => {
    navigate(event.key);
  };
  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    if (!TOKEN && location.pathname !== "/signup") {
      dispatch(changeModalState(true));
      navigate("/");
    }
  }, [navigate, location.pathname, dispatch]);

  return (
    <header className={styles.Header}>
      <SearchInput />
      <div onClick={handleLogOut}>Выход</div>
    </header>
  );
};
