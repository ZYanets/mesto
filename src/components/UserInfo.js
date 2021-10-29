export default class UserInfo {
  constructor({ name, about, avatar, id }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this._id = document.querySelector(id);
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      about: this._about.textContent,
    }
    return data;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }
}
