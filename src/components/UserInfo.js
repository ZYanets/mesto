export default class UserInfo {
  constructor({ username, occupation }) {
    this._username = document.querySelector(username);
    this._occupation = document.querySelector(occupation);
  }

  getUserInfo() {
    const data = {
      username: this._username.textContent,
      occupation: this._occupation.textContent
    }
    return data;
  }

  setUserInfo(data) {
    this._username.textContent = data.username;
    this._occupation.textContent = data.about;
  }
}
