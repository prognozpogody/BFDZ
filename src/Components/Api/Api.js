class Api {
  constructor(groupId) {
    this.url = "https://api.react-learning.ru/";
    this.groupId = groupId;
  }

  registration() {}

  authorization(values) {
    return fetch(`${this.url}${this.groupId}signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  }

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
}

const api = new Api("9-gr");

export { api };
