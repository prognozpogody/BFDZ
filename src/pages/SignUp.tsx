import { FinishValuesType } from "../components/FormAuthorization/FormAuthorization";
import { useActions } from "../hooks/useActions";
import { changeModalAuthorizationState } from "../redux/slices/modalSlice";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Formik, Field, Form } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { registration } = useActions();
  const navigate = useNavigate();

  const onFinish = async (values: FinishValuesType) => {
    await registration(values);
    navigate("/products");
  };

  const initialValues: FinishValuesType = {
    password: "",
    email: "",
    group: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onFinish}>
      <div className="flex sticky rounded-xl min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 z-[2]">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Ввойдите в свой аккаунт
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              либо{" "}
              <button
                className="text-grassIntense text-lg"
                onClick={() => {
                  changeModalAuthorizationState(true);
                  navigate("/");
                }}
              >
                Авторизируйтесь
              </button>
            </p>
          </div>
          <Form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Ваш email-address
                </label>
                <Field
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="group" className="sr-only">
                  Ваша группа
                </label>
                <Field
                  id="group"
                  name="group"
                  type="group"
                  autoComplete="current-group"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Группа"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Ваш пароль
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Пароль"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Запомнить
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="!#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Забыли пароль
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-primary border-2 border-black group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Зарегистрироваться
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};
