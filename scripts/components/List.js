import Template from "./Template.js";

export default class List extends Template {
  constructor(template, items) {
    super(template);
    this.ul = this.template.querySelector(items);
  }

  create() {
    return this.ul.cloneNode(true);
  }

  createElement(isHidden) {
    const list = this.create();
    
    list.setAttribute('aria-hidden', isHidden);

    return list;
  }
}