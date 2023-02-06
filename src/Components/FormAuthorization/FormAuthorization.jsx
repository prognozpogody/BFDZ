import { Input, Form, Button } from "antd";
import { RegistrationApi } from "../../Api/Registration";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";

//код самой формы авторизации
function FormAuthorization() {
  const { setIsAuth, setUserToken, setModalOpen } = useContext(UserContext);
  const navigate = useNavigate();

  const { mutateAsync: mutateAuthorization } = useMutation({
    mutationFn: (values) => RegistrationApi.authorization(values),
  });

  // Результат обработки формы авторизации, результат обновляет данные в контексте
  const onFinish = async (values) => {
    const res = await mutateAuthorization(values);
    setModalOpen(false);
    setIsAuth(true);
    setUserToken(res.token);
    navigate("/Product");
  };

  return (
    <Form name="basic" onFinish={onFinish} autoComplete="off">
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
