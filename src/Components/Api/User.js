class ApiUser {
  constructor(groupId) {
    this.url = "https://api.react-learning.ru/";
    this.groupId = groupId;
  }
  
  async getInfoUser() {
    
    try {
      const response = await fetch(`${this.url}users/me`, {
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

const apiUser = new ApiUser("9-gr");

export { apiUser };
