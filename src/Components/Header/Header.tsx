import { getUserSelector } from "../../Redux/slices/userSlice";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export const HeaderProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logOutUser, changeModalState } = useActions();
  const userInfo = useSelector(getUserSelector);

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
    <nav className="flex-no-wrap fixed flex w-full items-center justify-between top-0 flex-wrap justify-start">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className=" flex items-center ">
          <a className="mt-2 mr-2 flex " href="#!">
            <img src="/src/image/home.png" alt="Home" />
          </a>
          <ul className="list-style-none mr-auto flex flex-row pl-0 ">
            <li className="pr-2" data-te-nav-item-ref>
              <a href="#!">Dashboard</a>
            </li>
            <li className="pr-2" data-te-nav-item-ref>
              <a href="#!">Team</a>
            </li>
            <li className="pr-2" data-te-nav-item-ref>
              <a href="#!">Projects</a>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <a className="mr-4" href="#!">
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#76EAD7"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </span>
          </a>
          <div className="relative">
            <a className="mr-4 flex items-center" href="#!">
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#76EAD7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute -mt-6 ml-3 rounded-full px-1.5 text-m">
                3
              </span>
            </a>
          </div>
          <div className="relative">
            <a href="!#">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                className="rounded-full w-10 h-10"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
