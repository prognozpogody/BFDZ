class Api {
  constructor(groupId) {
    this.url = "https://api.react-learning.ru/";
    this.groupId = groupId;
  }
  // Регистрация
  registration() {}

  // Авторизация
  authorization(values) {
    return fetch(`${this.url}signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  }

  // Получение всех юзеров
  getAllUsers(token) {
    return fetch(`${this.url}${this.groupId}signin`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer" + token,
      },
    });
  }

  // получение информации о пользователе по токену в заголовках
  getMeInfo(token) {
    return fetch(`${this.url}/v2/${this.groupId}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  }

  // получение всех товаров
  getProducts(token) {
    return fetch(`${this.url}/products`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  }
}

const api = new Api("9-gr");

export { api };
