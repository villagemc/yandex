import Template from "./Template.js";

export default class TableDiscount extends Template {
  constructor(template) {
    super(template);
  }

  createElement(discountText) {
    const discount = this.template.querySelector('span');

    discount.textContent = discountText;

    return discount;
  }
}