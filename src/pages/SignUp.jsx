import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { registration, authorization } from "../Redux/slices/thunk";

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

  const onFinish = async (values) => {
    const resReg = await dispatch(registration(values));
    console.log(resReg);
    if (!resReg.error) {
      await dispatch(
        authorization({
          email: values.email,
          password: values.password,
        })
      );
    }
  };

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
