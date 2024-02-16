import Template from "./Template.js";

export default class Member extends Template {
  constructor(template) {
    super(template);
  }

  createElement(member) {
    const card = this.template.querySelector('.member__card').cloneNode(true);
    const title = card.querySelector('.member__title');
    const subtitle = card.querySelector('.member__subtitle');
    const image = card.querySelector('.member__image');
    const link = card.querySelector('.member__link');

    title.textContent = member.title;
    subtitle.textContent = member.subtitle;
    image.alt = member.title;
    image.src = member.image;
    link.href = member.link;

    return card;
  }
}