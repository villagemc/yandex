import Template from "./Template.js";

export default class Block extends Template {
  constructor(template) {
    super(template);
  }

  createElement(descText, countIndex) {
    const block = this.template.querySelector('.tourney__block').cloneNode(true);
    const count = block.querySelector('.tourney__count');
    const desc = block.querySelector('.tourney__desc');

    count.textContent = countIndex;
    desc.textContent = descText;

    return block;
  }
}