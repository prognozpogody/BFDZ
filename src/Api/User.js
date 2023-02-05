import axios from "axios";
// class ApiUser {
//   constructor(groupId) {
const API_URL = "https://api.react-learning.ru/";
axios.defaults.baseURL = API_URL;

// const groupId = groupId;
//   }

//   async getInfoUser() {
//     try {
//       const response = await fetch(`${this.url}users/me`, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });
//
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// }

export const UserApi = {
  async getInfoUser() {
    return await axios
      .get("users/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Error! status: ${response.status}`);
        } else return response.data;
      });
  },
};
