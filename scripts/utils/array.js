export const initialHiddens = new Array(false, true);

export const initialNavs = [
  {
    name: 'Поддержать шахматную мысль',
    anchor: 'idea'
  },
  {
    name: 'Подробнее о турнире',
    anchor: 'tourney'
  }
];

export const initialTitres = [
  'Дело помощи утопающим — дело рук самих утопающих!',
  'Шахматы двигают вперед не только культуру, но и экономику!',
  'Лед тронулся, господа присяжные заседатели!'
];

export const initialTables = [
  {
    name: 'Место проведения:',
    desc: 'Клуб «Картонажник»' 
  },
  {
    name: 'Дата и время мероприятия:',
    desc: '22 июня 1927 г. в 18:00' 
  },
  {
    name: 'Стоимость входных билетов:',
    desc: '20 коп.' 
  },
  {
    name: 'Плата за игру:',
    desc: '50 коп.' 
  },
  {
    name: 'Взнос на телеграммы:',
    desc: '21 руб. 16 коп.',
    rebate: '100 руб.' 
  }
];

export const initialCards = [
  'Строительство железнодорожной магистрали Москва-Васюки',
  'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',
  'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
  'Строительство дворца для турнира',
  'Размещение гаражей для гостевого автотранспорта',
  'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов',
  'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн'
];

export const initialMembers = [
  {
    title: 'Хозе-Рауль Капабланка',
    subtitle: 'Чемпион мира по шахматам',
    image: './images/member/member.png',
    link: '/'
  },
  {
    title: 'Эммануил Ласкер',
    subtitle: 'Чемпион мира по шахматам',
    image: './images/member/member.png',
    link: '/'
  },
  {
    title: 'Александр Алехин',
    subtitle: 'Чемпион мира по шахматам',
    image: './images/member/member.png',
    link: '/'
  },
  {
    title: 'Арон Нимцович',
    subtitle: 'Чемпион мира по шахматам',
    image: './images/member/member.png',
    link: '/'
  },
  {
    title: 'Рихард Рети',
    subtitle: 'Чемпион мира по шахматам',
    image: './images/member/member.png',
    link: '/'
  },
  {
    title: 'Остап Бендер',
    subtitle: 'Гроссмейстер',
    image: './images/member/member.png',
    link: '/'
  }
];

export const initialWidthMembers = [
  {
    index: 1,
    width: {
      min: 0,
      max: 824
    }
  },
  {
    index: 2,
    width: {
      min: 824,
      max: 1280
    }
  },
  {
    index: 3,
    width: {
      min: 1280,
      max: Infinity
    }
  }
];