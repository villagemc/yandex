export default class Template {
  constructor(template) {
    this.template = document.querySelector(template).content;
  }
}