import { useActions } from "../../hooks/useActions";
import { Input, Form, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export type FinishValuesType = {
  email: string;
  password: string;
};

export const FormAuthorization = () => {
  const { authorization } = useActions();
  const navigate = useNavigate();

  const onFinish = async (values: FinishValuesType) => {
    await authorization(values);
    navigate("products");
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
};
