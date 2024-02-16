import Template from "./Template.js";

export default class Nav extends Template {
  constructor(template) {
    super(template);
  }

  createElement(navItem) {
    const button = this.template.querySelector('.header__button').cloneNode(true);
    const link = button.querySelector('.header__link');
    const text = button.querySelector('.header__text');

    text.textContent = navItem.name;
    link.href = '#' + navItem.anchor;

    return button;
  }
}