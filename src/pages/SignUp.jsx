import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { registration, authorization } from "../Redux/thunk";
import { Spinner } from "../Components/Spinner/Spinner";
import { changeModalState } from "../Redux/slices/modalSlice";
import { setUser } from "../Redux/slices/userSlice";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} пожалуйста, введите данные!",
  types: {
    email: "${label} не является почтой email",
    number: "${label} введите число",
  },
};
/* eslint-enable no-template-curly-in-string */

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Результат обработки формы регистрации, происходит регистрация и
  // авторизация, после редирект на продукты
  const {
    mutateAsync: mutateRegistration,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: (values) => dispatch(registration(values)),
  });

  const { mutateAsync: mutateAuthorization } = useMutation({
    mutationFn: (values) => {
      return dispatch(authorization(values));
    },
  });
  // TODO если человек решит зарегестрироваться с уже существующим аккаунтом или еще чего
  // тогда первый запрос будет error
  // тебе надо responce первого запроса и оттуда values передать в авторизейшн
  const onFinish = async (values) => {
    await mutateRegistration(values).then(async () => {
      const res = await mutateAuthorization({
        email: values.email,
        password: values.password,
      });
      dispatch(changeModalState(false));
      dispatch(setUser(res.payload));
      navigate("/products");
    });
  };

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error happend: {error.message}</p>;

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 300,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="email"
        label="Почта"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="group"
        label="Группа"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Введите ваш пароль" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
