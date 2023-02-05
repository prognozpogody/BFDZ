import axios from "axios";

const API_URL = "https://api.react-learning.ru/";
axios.defaults.baseURL = API_URL;

export const UserApi = {
  // Информация о юзере
  async getInfoUser() {
    return await axios
      .get("users/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};
