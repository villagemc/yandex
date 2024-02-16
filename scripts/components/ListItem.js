import List from "./List.js";

export default class ListItem extends List {
  constructor(template, items) {
    super(template, items);
  }

  createElement(countIndex) {
    const list = this.create();

    typeof countIndex === 'number'
      ? list.style.backgroundImage =
        `url(./images/tourney/cards/tour${countIndex}.png)`
      : list.style.backgroundImage =
        'url(./images/tourney/card/tour.png)';

    return list;
  }
}