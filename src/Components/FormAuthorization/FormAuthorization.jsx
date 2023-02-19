import { Input, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "../Spinner/Spinner";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../Redux/slices/modalSlice";
import { setUser } from "../../Redux/slices/userSlice";
import { authorization } from "../../Redux/thunk";

//код самой формы авторизации
function FormAuthorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    mutateAsync: mutateAuthorization,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: (values) => dispatch(authorization(values)),
  });

  // Результат обработки формы авторизации, результат обновляет данные в контексте
  const onFinish = async (values) => {
    const res = await mutateAuthorization(values);
    console.log(res);
    dispatch(changeModalState(false));
    dispatch(setUser(res));
    navigate("/Product");
  };

  if (isLoading) return <Spinner />;

  if (isError) return <p>Error happend: {error.message}</p>;

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
