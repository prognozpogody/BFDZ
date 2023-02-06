import { useContext, useEffect, useState } from "react";
import { Descriptions } from "antd";
import { UserContext } from "../Context/Context";

function UserPage() {
  const { user } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    setUserInfo(user);
  }, [user]);
  return (
    <Descriptions title="User Info">
      <Descriptions.Item label="UserName">{userInfo?.name}</Descriptions.Item>
      <Descriptions.Item label="about">{userInfo?.about}</Descriptions.Item>
      <Descriptions.Item label="avatar">{userInfo?.avatar}</Descriptions.Item>
      <Descriptions.Item label="_id">{userInfo?._id}</Descriptions.Item>
      <Descriptions.Item label="email">{userInfo?.email}</Descriptions.Item>
    </Descriptions>
  );
}

export default UserPage;
