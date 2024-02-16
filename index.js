import Nav from "./scripts/components/Nav.js";
import Table from "./scripts/components/Table.js";
import TableDiscount from "./scripts/components/TableDiscount.js";
import List from "./scripts/components/List.js";
import Titre from "./scripts/components/Titre.js";
import Block from "./scripts/components/Block.js";
import ListItem from "./scripts/components/ListItem.js";
import Circle from "./scripts/components/Circle.js";
import Member from "./scripts/components/Member.js";
import {
  initialCards,
  initialHiddens,
  initialMembers,
  initialNavs,
  initialTables,
  initialTitres,
  initialWidthMembers,
} from "./scripts/utils/array.js";
import {
  count,
  headerButtons,
  sectionButtonMemberBack,
  sectionButtonMemberForward,
  sectionButtonTourneyBack,
  sectionButtonTourneyForward,
  sectionCircls,
  sectionCount,
  sectionLimit,
  sectionMember,
  sectionReview,
  sectionTables,
  sectionTitres
} from "./scripts/utils/constants.js";

const nav = new Nav('.template-links');
const titreList = new List('.template-titres', '.titre__items');
const cardsList = new List('.template-cards', '.tourney__cards');
const blockList = new ListItem('.template-card', '.tourney__card');
const titre = new Titre('.template-titre');
const table = new Table('.template-table');
const block = new Block('.template-block');
const member = new Member('.template-member');
const circle = new Circle('.template-circle');
const tableDiscount = new TableDiscount('.template-table-discount');

// Генерация навигационных кнопок (ссылок):
initialNavs.forEach(navItem =>
  headerButtons.append(
    nav.createElement(navItem)
  )
);

// Генерация титров:
initialHiddens.forEach(isHidden =>
  sectionTitres.forEach(sectionTitre => {
    const elementTitres = titreList.createElement(isHidden);

    initialTitres.forEach(titreItem =>
      elementTitres.append(
        titre.createElement(titreItem)
      )
    );

    sectionTitre.append(elementTitres);
  })
);

// Генерация таблицы:
initialTables.forEach(tableItem => {
  const { elementDesc, elementTable } = table.createElement(tableItem);

  if (tableItem.rebate) elementDesc.prepend(
    tableDiscount.createElement(tableItem.rebate)
  );

  sectionTables.append(elementTable);
});

// Генерация списка карточек:
const [ cardsPersonal, cardsMobile ] = initialHiddens
  .map(isHidden => cardsList.createElement(isHidden));

// Генерация списка карточек (десктоп):
initialCards.forEach((card, index) => {
  const elementIndex = ++index;

  const elementBlock = block.createElement(card, elementIndex);
  const elementList = blockList.createElement(elementIndex);

  elementList.append(elementBlock);
  cardsPersonal.append(elementList);
});

// [[1, 2], [3], [4, 5], [6], [7, ..], ...]:
const initialNewCards = initialCards
  .reduce((array, _, index) => {
    index % 3 === 0
      ? array.push({
          items: [index, index + 1],
          cards: [
            initialCards[index],
            initialCards[index + 1]
          ]
        })
      : (index - 1) % 3 !== 0
        ? array.push({
            items: [index],
            cards: [
              initialCards[index]
            ]
          })
        : null;

    return array;
  }, []);

// Генерация списка карточек (мобайл):
initialNewCards.forEach((element) => {
  const elementList = blockList.createElement();

  element.cards.forEach((card, index) => {
    if (card === undefined) return;

    const elementIndex = ++element.items[index];
    const elementBlock = block.createElement(card, elementIndex);

    elementList.append(elementBlock);
  });

  cardsMobile.append(elementList);
});

// Генерация непосредственно карточек:
sectionReview.prepend(cardsMobile);
sectionReview.prepend(cardsPersonal);

// Массив кружков для слайда:
const circlesMobile = [...cardsMobile.children]
  .map((cardElement, index) => ({
    ...circle.createElement(index),
    cardElement
  }));

// Транслирование слайдов:
const transformElement = (countIndex) => {
  countIndex > 0
    ? sectionButtonTourneyBack.removeAttribute('disabled')
    : sectionButtonTourneyBack.setAttribute('disabled', 'true');

  countIndex !== circlesMobile.length - 1
    ? sectionButtonTourneyForward.removeAttribute('disabled')
    : sectionButtonTourneyForward.setAttribute('disabled', 'true');

  circlesMobile.forEach(({ circleButton, cardElement }) => {
    cardElement.style.transform = `translateX(${-100 * countIndex}%)`;
    circleButton.classList.remove('slide__circle_active');
  });

  circlesMobile[countIndex].circleButton.classList.add('slide__circle_active');
}

// Генерация кружков и навешивание события:
circlesMobile.forEach(({ circleElement, circleButton }, index) => {
  sectionCircls.append(circleElement);

  if (index > 0)
    sectionButtonTourneyForward.removeAttribute('disabled');

  circleButton.addEventListener('click', () => 
    transformElement(count.card = index)
  );
});

// Слайдер (турнир) назад:
sectionButtonTourneyBack.addEventListener('click', () => 
  transformElement(--count.card)
);

// Слайдер (турнир) вперед:
sectionButtonTourneyForward.addEventListener('click', () =>
  transformElement(++count.card)
);

// Общее количество карточек с участниками:
sectionLimit.textContent += initialMembers.length;

// Генерация карточек с участниками:
const transformMember = () => {
  sectionMember.innerHTML = '';

  const { index } = initialWidthMembers
    .find(({ width }) => 
      window.innerWidth > width.min &&
      window.innerWidth < width.max
    );

  const newInitialMembers = initialMembers
    .reduce((array, _, arrayIndex) => {

      if (arrayIndex % index === 0)
        array.push(
          initialMembers.slice(
            arrayIndex,
            arrayIndex + index
          )
        );

      return array;
    }, []);

  if (count.member < 0)
    count.member = newInitialMembers.length - 1;

  if (count.member > newInitialMembers.length - 1)
    count.member = 0;

  sectionCount.textContent = index + index * count.member;

  newInitialMembers[count.member]
    .forEach((user) => 
      sectionMember.append(
        member.createElement(user)
      )
    );
}


// При загрузке страницы: генерировать карточки с участниками:
window.addEventListener('DOMContentLoaded', () => {
  count.member = 0;
  transformMember();
});

// При масштабированиии страницы генерировать те же карточки:
window.addEventListener('resize', () => {
  count.member = 0;
  transformMember();
});

// Листаем назад карточки с участниками:
sectionButtonMemberBack.addEventListener('click', () => {
  count.member -= 1;
  transformMember();
});

// Листаем вперед карточки с участниками:
sectionButtonMemberForward.addEventListener('click', () => {
  count.member += 1;
  transformMember();
});

// Каждые 4 секунды (с учетом задержек)
// Пролистываем карточки вперед (рекурсия):
const setTime = (time, delay) => {
  const realTime = new Date().getTime();

  setTimeout(() => {
    count.member += 1;
    transformMember();

    const delay = new Date()
      .getTime() - realTime - time;

    setTime(time, delay);
  }, time - delay);
}

setTime(4000, 0);