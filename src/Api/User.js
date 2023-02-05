import axios from "axios";
import { API_URL, TOKEN } from "../constants/constants";

axios.defaults.baseURL = API_URL;

export const UserApi = {
  // Информация о юзере
  async getInfoUser() {
    return await axios
      .get("users/me", {
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};
