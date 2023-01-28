import { Input, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
import ModalPortal from "..//ModalPortal/ModalPortal";

//код самой формы авторизации
function FormAuthorization({ onFinish }) {
  const navigate = useNavigate();
 
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button
        type="primary"
        htmlType="button"
        onClick={() => {
          const isOpen = false
          navigate("signup");
          ModalPortal(isOpen);
        }}
      >
        Зарегестрироваться
      </Button>
      </Form.Item>
    </Form>
    
  );
}

export default FormAuthorization;
