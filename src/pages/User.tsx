import { getUserSelector } from "../Redux/slices/userSlice";
import { Descriptions } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const userInfo = useSelector(getUserSelector);
  return (
    <Descriptions title="User Info">
      <Descriptions.Item label="UserName">{userInfo?.name}</Descriptions.Item>
      <Descriptions.Item label="about">{userInfo?.about}</Descriptions.Item>
      <Descriptions.Item label="avatar">{userInfo?.avatar}</Descriptions.Item>
      <Descriptions.Item label="_id">{userInfo?._id}</Descriptions.Item>
      <Descriptions.Item label="email">{userInfo?.email}</Descriptions.Item>
    </Descriptions>
  );
};
