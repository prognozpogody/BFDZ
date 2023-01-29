import { useContext } from "react";
import { Descriptions } from "antd";

import { UserContext } from "../Context/Context";

function UserPage() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <Descriptions title="User Info">
      <Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
      <Descriptions.Item label="about">{user.about}</Descriptions.Item>
      <Descriptions.Item label="avatar">{user.avatar}</Descriptions.Item>
      <Descriptions.Item label="_id">{user._id}</Descriptions.Item>
      <Descriptions.Item label="email">{user.email}</Descriptions.Item>
    </Descriptions>
  );
}

export default UserPage;
