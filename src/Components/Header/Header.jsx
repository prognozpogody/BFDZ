import { Layout, Menu } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { changeModalState } from "../../Redux/slices/modalSlice";
import { logOutUser } from "../../Redux/slices/userSlice";
import { SearchInput } from "../SearchInput/SearchInput";

const { Header } = Layout;

const menuItems = [
  {
    key: `products`,
    label: `Каталог продуктов`,
  },
  {
    key: `user`,
    label: `Личный кабинет`,
  },
  {
    key: `cart`,
    label: "Корзина",
  },
];

export const HeaderProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const TOKEN = localStorage.getItem("token");

  const handleRoute = (event) => {
    navigate(event.key);
  };
  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  useEffect(() => {
    if (!TOKEN && location.pathname !== "/signup") {
      dispatch(changeModalState(true));
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, TOKEN]);

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div
        style={{
          float: "right",
          width: 150,
          color: "white",
        }}
        onClick={handleLogOut}
      >
        Выход
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        onClick={handleRoute}
      />
      <SearchInput />
    </Header>
  );
};
