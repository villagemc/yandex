import Template from './Template.js';

export default class Circle extends Template {
  constructor(template) {
    super(template)
  }

  createElement(index) {
    const circle = this.template.querySelector('li').cloneNode(true);
    const circleButton = circle.querySelector('.slide__circle');

    if (index === 0) circleButton.classList.add('slide__circle_active');

    return {
      circleButton: circleButton,
      circleElement: circle
    };
  }
}