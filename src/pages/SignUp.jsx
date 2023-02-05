import { Button, Form, Input } from "antd";
import { RegistrationApi } from "../Api/Registration";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { useContext } from "react";

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
  const { setIsAuth, setUserToken } = useContext(UserContext);
  const navigate = useNavigate();
  // Результат обработки формы регистрации, происходит регистрация и
  // авторизация, после редирект на продукты
  const onFinishSignUp = async (values) => {
    await RegistrationApi.registration(values);
    const res = await RegistrationApi.authorization({
      email: values.email,
      password: values.password,
    });
    localStorage.setItem("token", res.token);
    setIsAuth(true);
    setUserToken(res.token);
    navigate("/Product") 
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinishSignUp}
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
