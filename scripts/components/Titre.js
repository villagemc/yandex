import Template from "./Template.js";

export default class Titre extends Template {
  constructor(template) {
    super(template);
  }

  createElement(titreText) {
    const titre = this.template.querySelector('.titre__item').cloneNode(true);
    const paragraph = titre.querySelector('.titre__paragraph');

    paragraph.textContent = titreText;

    return titre;
  }
}