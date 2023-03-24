import axios from "axios";

const getContentType = () => ({
  "Content-Type": "application/json",
});

export default axios.create({
  baseURL: "https://api.react-learning.ru/",
  headers: getContentType(),
});
