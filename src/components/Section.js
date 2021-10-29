export default class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(data) {
    this.clear();
    data.forEach(item => {
      this._renderer(item);
    });
  }
}
