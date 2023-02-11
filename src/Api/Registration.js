import axios from "axios";
import { API_URL } from "../constants/constants";

axios.defaults.baseURL = API_URL;

export const RegistrationApi = {
  // Регистрация
  async registration(values) {
    return await axios.post("signup", values).then((response) => {
      return response.data;
    });
  },
  // Авторизация
  async authorization(values) {
    return await axios.post("signin", values)
  },
};
