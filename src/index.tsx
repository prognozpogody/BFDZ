import { App } from "./App";
import { Cart } from "./components/Cart/Cart";
import "./index.css";
import { NotFound } from "./pages/404";
import { Favorits } from "./pages/Favorits";
import { Products } from "./pages/Products";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";
import { store } from "./redux/store";
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
        path: "favorits",
        element: <Favorits />,
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

// TODO: Корзина дергается при изменении товаров в ней, я думаю надо оптимизацию прикрутить
// TODO: В корзине написать логику
// TODO: Пагинация
// TODO: Страница избранного
// TODO: Страница настроек профился
// TODO: В апи сделать обработку ошибок, не в каждый запрос, а отдельной функцией, попробовать взять в api.helper
// TODO: Футер к низу прилепить
// TODO: Модалка добавления товара
// TODO: Сортировку сделать, продукты, избранное и корзина
// TODO: хедер под мобилку поправить,
