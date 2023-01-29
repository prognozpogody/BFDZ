class ApiRegistration {
  constructor(groupId) {
    this.url = "https://api.react-learning.ru/";
    this.groupId = groupId;
  }
  // Регистрация
  async registration() {}

  async authorization(values) {
    try {
      const response = await fetch(`${this.url}signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.status !== 200) {
        throw  console.log(`Ошибка HTTP: ${response.status} ${response.message}`); 
        
      } else return response.json();
    } catch (error) {
      throw alert (`Ошибка HTTP: ${error}`)
    }
  }

  // Получение всех юзеров
  async getAllUsers(token) {
    try {
      const response = await fetch(`${this.url}${this.groupId}signin`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "Bearer" + token,
        },
      });
      if (response.status !== 200) {
        throw new Error(`Error! status: ${response.status}`);
      } else return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  // получение информации о пользователе по токену в заголовках
  async getMeInfo(token) {
    try {
      const response = await fetch(`${this.url}/v2/${this.groupId}/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (response.status !== 200) {
        throw new Error(`Error! status: ${response.status}`);
      } else return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  // получение всех товаров
  async getProducts(token) {
    try {
      const response = await fetch(`${this.url}/products`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
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

const apiRegistration = new ApiRegistration("9-gr");

export { apiRegistration };
