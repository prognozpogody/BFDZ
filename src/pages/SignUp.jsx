import { Button, Form, Input } from "antd";
import { RegistrationApi } from "../Api/Registration";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";

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
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

function SignUp() {
  const { setIsAuth, setUserToken, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // Результат обработки формы регистрации, происходит регистрация и
  // авторизация, после редирект на продукты
  const { mutateAsync: mutateRegistration } = useMutation({
    mutationFn: (values) => RegistrationApi.registration(values),
  });

  const { mutateAsync: mutateAuthorization } = useMutation({
    mutationFn: (values) => RegistrationApi.authorization(values),
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
      setIsAuth(true);
      setUserToken(res.data.token);
      setUser(res.data.data);
      navigate("/Product");
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="group" label="group">
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
}
export default SignUp;
