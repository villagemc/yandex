import Template from "./Template.js";

export default class Table extends Template {
  constructor(template) {
    super(template);
  }

  createElement(tableItem) {
    const table = this.template.querySelector('.idea__table').cloneNode(true);
    const main = table.querySelector('.idea__paragraph_main');
    const desc = table.querySelector('.idea__paragraph_desc');

    main.textContent = tableItem.name;
    desc.textContent = tableItem.desc;

    return {
      elementDesc: desc,
      elementTable: table
    };
  }
}