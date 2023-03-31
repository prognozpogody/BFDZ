import { getCartSum } from "../../Redux/slices/cartSlice";
import { getFavoritsSum } from "../../Redux/slices/favoritsSlice";
import {
  getTokenSelector,
  getUserSelector,
} from "../../Redux/slices/userSlice";
import { useActions } from "../../hooks/useActions";
import { SearchInput } from "../ui/SearchInput";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const HeaderProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logOutUser, changeModalAuthorizationState, changeModalCartState } =
    useActions();
  const userInfo = useSelector(getUserSelector);
  const productInCart = useSelector(getCartSum);
  const favoritsSum = useSelector(getFavoritsSum);
  const TOKEN = useSelector(getTokenSelector);

  const handleLogOut = () => {
    logOutUser();
    navigate("/");
  };

  useEffect(() => {
    if (!TOKEN && location.pathname !== "/signup") {
      changeModalAuthorizationState(true);
      navigate("/");
    }
  }, [navigate, location.pathname, changeModalAuthorizationState, TOKEN]);

  return (
    <nav className="fixed flex w-full top-0 bg-[url('/src/image/header.png')]  z-[1] ">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className=" flex items-center ">
          <a className=" flex " href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#3C786F"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </div>

        <div className="relative flex items-center">
          <SearchInput />
          <a
            className="mr-4 rounded-md bg-grass px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/products"
          >
            Продукты
          </a>

          {/* Корзина */}

          <button className="mr-4" onClick={() => changeModalCartState(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#76EAD7"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute -mt-10 ml-2 rounded-full px-2 text-m bg-grassIntense">
              {productInCart}
            </span>
          </button>

          {/* Избранное */}

          <div className="relative">
            <a className="mr-4 flex items-center" href="/favorits">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#76EAD7"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              <span className="absolute -mt-4 ml-7 rounded-full px-2 text-m bg-grassIntense">
                {favoritsSum}
              </span>
            </a>
          </div>

          {/* выпадающее меню профиля */}

          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={userInfo?.avatar}
                  alt="Аватар"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/user"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Ваш профиль
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="!#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Настройки профиля
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={handleLogOut}
                      href="!#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Выход
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};
