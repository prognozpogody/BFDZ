import { Layout, Menu } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { changeModalState } from "../../Redux/slices/modalSlice";

const { Header } = Layout;

const menuItems = [
  {
    key: `Product`,
    label: `Product`,
  },
  {
    key: `User`,
    label: `User`,
  },
];

const HeaderProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleRoute = (event) => {
    navigate(event.key);
  };

  useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    if (TOKEN) {
      navigate("Product");
    } else if (!TOKEN && location.pathname !== "/signup") {
      dispatch(changeModalState(true));
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
          float: "left",
          width: 150,
          height: 31,
          margin: "16px 24px 16px 0",
          background: "green",
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        onClick={handleRoute}
      />
    </Header>
  );
};

export default HeaderProject;
