import { Input, Form, Button } from "antd";
import { RegistrationApi } from "../../Api/Registration";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { useContext } from "react";

//код самой формы авторизации
function FormAuthorization() {
  const { setIsAuth, setUserToken, setModalOpen } = useContext(UserContext);
  const navigate = useNavigate();

  // Результат обработки формы авторизации, результат обновляет данные в контексте
  const onFinishSignIn = async (values) => {
    const res = await RegistrationApi.authorization(values);
    console.log(res.token);
    setIsAuth(true);
    setUserToken(res.token);
    setModalOpen(false);
    navigate("/Product");
  };

  return (
    <Form name="basic" onFinish={onFinishSignIn} autoComplete="off">
      <Form.Item
        label="Почта"
        name="email"
        rules={[
          { required: true, message: "Введите адресс электронной почты" },
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormAuthorization;
