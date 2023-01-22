class ApiProducts {
  constructor(groupId) {
    this.url = "https://api.react-learning.ru/";
    this.groupId = groupId;
  }

  // получение всех товаров
  async getProducts() {
    try {
      const response = await fetch(`${this.url}products`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.status !== 200) {
        throw new Error(`Error! status: ${response.status}`);
      } else return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const apiProducts = new ApiProducts("9-gr");

export { apiProducts };
