/* eslint-disable func-names */
import { Spinner } from "../Components/ui/spinner/Spinner";
import { Button } from "antd";
import { FC } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export interface InnerFC {
  isLoading: boolean;
  isError: boolean;
  error: Error;
  refetch: any;
}

export const withQuery =
  (WrappedComponent: FC) =>
  ({ isLoading, isError, error, refetch, ...rest }: InnerFC) => {
    const navigate = useNavigate();
    const goBackHandler = () => {
      navigate(0 ?? "/");
    };
    if (isError) {
      return (
        <div>
          <p>Ошибка: {error.message}</p>

          <Button onClick={refetch} type="primary">
            Повторить запрос
          </Button>
          <Button onClick={goBackHandler} type="primary">
            Вернуться
          </Button>
        </div>
      );
    }

    if (isLoading) return <Spinner />;

    return <WrappedComponent {...rest} />;
  };
