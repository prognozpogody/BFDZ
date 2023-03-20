import { App } from "./App";
import { Cart } from "./Components/cart/Cart";
import { store } from "./Redux/store";
import "./index.css";
import { NotFound } from "./pages/404";
import { Products } from "./pages/Products";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);


// TODO: На страницу регистрации не работает автоматическая авторизация после регистрации
// TODO: После поиска при возврате на страницу продукты должен сбрасываться поиск, а сейчас все равно берутся параметры из поиска
// TODO: Сделать плавное появление модалок
// TODO: Стили на модалку авторизации накинуть
// TODO: На страницу регистрации не работает автоматическая авторизация после регистрации
// TODO: В корзине написать логику
// TODO: Пагинация
// TODO: Страница избранного
// TODO: Страница настроек профился
// TODO: Модалка Карточка товара
// TODO: На странице продуктов вывести лайки, и иконку избранного с логикой
// TODO: В апи сделать проверку на свежесть токена
// TODO: В апи сделать обработку ошибок, не в каждый запрос, а отдельной функцией, попробовать взять в api.helper
// TODO: На странице товаров поправить стили у карточек, чтобы все одинаковые были
// TODO: Футер к низу прилепить
// TODO: хедер стили поправить, чтобы норм выглядел
// TODO: Модалка добавления товара
// TODO: Сортировку сделать, продукты, избранное и корзина
// TODO: Типы и интерфейсы вынести по максимуму
