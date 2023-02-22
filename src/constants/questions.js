export const QUESTIONS = [
  {
    id: '1',
    t: 'Кто из водителей правильно остановился для высадки пассажиров?',
    i: '1.png',
    v: [
      {
        id: 'e7cf8456-1702-578c-8935-d232229b462a',
        t: 'Только водитель автомобиля А',
        a: 'Верно! Вы, наверное, и сами неплохо водите!',
        isCorrect: true,
      },
      {
        id: '6a5ae284-4c41-5ed1-98b0-d1dc6bd601ec',
        t: 'Только водитель автомобиля В',
        a: 'Ошибка. Правильный вариант остановки только — А',
        isCorrect: false,
      },
      {
        id: 'a5455ed4-09c6-5db2-9a19-ed3093fc2fb4',
        t: 'Водители автомобилей А и Б',
        a: 'Ошибка. Правильный вариант остановки только — А',
        isCorrect: false,
      },
      {
        id: '7b0fe901-dc7c-521b-87ee-c376065eb483',
        t: 'Водители автомобилей А и В',
        a: 'Ошибка. Правильный вариант остановки только — А',
        isCorrect: false,
      },
    ],
    isActive: true,
  },
  {
    id: '2',
    t: 'Какой из этих фактов ложный?',
    i: '2.png',
    v: [
      {
        id: '8129fdea-bd17-5ec6-bdad-a549c42a126e',
        t: 'Закон Австралии обязывает водителей такси всегда возить с собой сноп сена',
        a: 'Не угадали! Это — правда. А вот самое дорогое такси в Великобритании. Закон в Австралии остался со времен, когда извозчики должны были кормить свою лошадь, а скидка для одиноких женщин в Венеции, кстати, 10%.',
        isCorrect: false,
      },
      {
        id: 'f9d04e23-f0d7-53b0-8e5b-911006332c83',
        t: '30% водителей такси в Китае — женщины',
        a: 'Не угадали! Это — правда. А вот самое дорогое такси в Великобритании. Закон в Австралии остался со времен, когда извозчики должны были кормить свою лошадь, а скидка для одиноких женщин в Венеции, кстати, 10%.',
        isCorrect: false,
      },
      {
        id: '4f3b2317-8e59-59dc-8e05-5df0f911a7ec',
        t: 'Самое дорогое такси — в США',
        a: 'Угадали! Самое дорогое такси не в США, а в Великобритании. А вот закон в Австралии остался со времен, когда извозчики должны были кормить свою лошадь, скидка для одиноких женщин в Венеции, кстати, 10%.',
        isCorrect: true,
      },
      {
        id: '329d80f9-e112-5af9-9969-1f57d16fbc60',
        t: 'В Венеции есть скидка на водное такси для одиноких женщин',
        a: 'Не угадали! Это — правда. А вот самое дорогое такси в Великобритании. Закон в Австралии остался со времен, когда извозчики должны были кормить свою лошадь, а скидка для одиноких женщин в Венеции, кстати, 10%.',
        isCorrect: false,
      },
    ],
    isActive: false,
  },
  {
    id: '3',
    t: 'Сколько было разбито машин в фильме «Такси»?',
    i: '3.png',
    v: [
      {
        id: 'b0905f33-44e4-5d60-983b-7970ff288768',
        t: '10',
        a: 'Не верно. 38 машин было разбито до состояния, в котором они уже не подлежали восстановлению и еще штук двадцать были сильно повреждены.',
        isCorrect: false,
      },
      {
        id: '6d8c2156-343a-528b-95fc-d21d1a42e268',
        t: '25',
        a: 'Не верно. 38 машин было разбито до состояния, в котором они уже не подлежали восстановлению и еще штук двадцать были сильно повреждены.',
        isCorrect: false,
      },
      {
        id: '6f2ae922-0f80-58a0-9b2d-09fe8d02d72c',
        t: '38',
        a: 'Угадали! 38 машин было разбито до состояния, в котором они уже не подлежали восстановлению и еще штук двадцать были сильно повреждены.',
        isCorrect: true,
      },
      {
        id: 'fb0dc0ec-00d4-5175-8c84-cbc88459a636',
        t: '100',
        a: 'Не верно. 38 машин было разбито до состояния, в котором они уже не подлежали восстановлению и еще штук двадцать были сильно повреждены.',
        isCorrect: false,
      },
    ],
    isActive: false,
  },
  {
    id: '4',
    t: 'Какой штраф предусмотрен за перегруз пассажиров в легковом автомобиле?',
    i: '4.png',
    v: [
      {
        id: 'bbf496f3-c3d3-582d-b38b-d5d280b5d5d7',
        t: '500 рублей',
        a: 'Верно! Всего 500 рублей. Но мы всё равно не рекомендуем вам нарушать правила.',
        isCorrect: true,
      },
      {
        id: '4942c75c-2065-5db6-ab82-1e7058569947',
        t: '1000 рублей',
        a: 'Не угадали. Штраф составит всего 500 рублей! Но мы всё равно не рекомендуем вам нарушать правила.',
        isCorrect: false,
      },
      {
        id: 'acd86533-9975-5abb-b54c-a5e9f102a0e2',
        t: '1500 рублей',
        a: 'Не угадали. Штраф составит всего 500 рублей! Но мы всё равно не рекомендуем вам нарушать правила.',
        isCorrect: false,
      },
      {
        id: '00e5f192-805c-5397-94c7-3259ba988aa4',
        t: '2000 рублей',
        a: 'Не угадали. Штраф составит всего 500 рублей! Но мы всё равно не рекомендуем вам нарушать правила.',
        isCorrect: false,
      },
    ],
    isActive: false,
  },
  {
    id: '5',
    t: 'Из какого фильма этот таксист?',
    i: '5.png',
    v: [
      {
        id: '822b2e3b-7999-5f33-931c-f7526b198a57',
        t: '«Любовь и голуби»',
        a: 'Ошибка! Это кадр из фильма «Бриллиантовая рука». Таксистов в фильме было несколько, но такой тоже был.',
        isCorrect: false,
      },
      {
        id: '1470eaef-586f-5b63-9586-af056ff74fb8',
        t: '«Семнадцать мгновений весны»',
        a: 'Ошибка! Это кадр из фильма «Бриллиантовая рука». Таксистов в фильме было несколько, но такой тоже был.',
        isCorrect: false,
      },
      {
        id: '1fe8bbae-ce76-5f63-b2b5-b1258de92b75',
        t: '«Кавказская пленница»',
        a: 'Ошибка! Это кадр из фильма «Бриллиантовая рука». Таксистов в фильме было несколько, но такой тоже был.',
        isCorrect: false,
      },
      {
        id: 'a5d52efe-dc2c-5b42-91ca-389b9d2e9ee8',
        t: '«Бриллиантовая рука»',
        a: 'Правильный ответ! Вот это у вас память на лица, это ведь далеко не основной герой в фильме.',
        isCorrect: true,
      },
    ],
    isActive: false,
  },
  {
    id: '6',
    t: 'Из какой страны это такси?',
    i: '6.png',
    v: [
      {
        id: '83e9af29-4efe-50eb-bf28-5c475ff0df15',
        t: 'Австрия',
        a: 'Не угадали! Это типичное такси в Германии. Честно сказать, угадать здесь можно было только по марке машины.',
        isCorrect: false,
      },
      {
        id: '1e9e5b2b-1633-5f60-80ce-3b47c87b6668',
        t: 'Германия',
        a: 'Верно! Честно сказать, угадать здесь можно было только по марке машины.',
        isCorrect: true,
      },
      {
        id: '739fde8f-68b9-5544-aeac-597b2e13d280',
        t: 'Канада',
        a: 'Не угадали! Это типичное такси в Германии. Честно сказать, угадать здесь можно было только по марке машины.',
        isCorrect: false,
      },
      {
        id: '7ea6084a-2f5b-5964-bfaf-6bfde6a552c5',
        t: 'Ирландия',
        a: 'Не угадали! Это типичное такси в Германии. Честно сказать, угадать здесь можно было только по марке машины.',
        isCorrect: false,
      },
    ],
    isActive: false,
  },
  {
    id: '7',
    t: 'Кто из этих людей никогда НЕ работал таксистом?',
    i: '7.png',
    v: [
      {
        id: '802ddb40-9325-5bba-be33-32f44a7aa8e0',
        t: 'Алексей Лысенков',
        a: 'Не угадали! Из всех перечисленных героев только актер Константин Хабенский не работал таксистом. Был такой опыт и у свахи Розы Сябитовой на розовой «Оке», и в студенчестве у суперзвезды Светланы Лободы.',
        isCorrect: false,
      },
      {
        id: 'cfdc576b-fa41-5f1d-bd01-049e45116fd2',
        t: 'Константин Хабенский',
        a: 'Верно! Из всех перечисленных героев только актер Константин Хабенский не работал таксистом. Был такой опыт и у свахи Розы Сябитовой на розовой «Оке», и в студенчестве у певицы Светланы Лободы.',
        isCorrect: true,
      },
      {
        id: '25d87645-cf5c-5379-b30f-fb9808406a7a',
        t: 'Роза Сябитова',
        a: 'Не угадали! Из всех перечисленных героев только актер Константин Хабенский не работал таксистом. Был такой опыт и у свахи Розы Сябитовой на розовой «Оке», и в студенчестве у суперзвезды Светланы Лободы.',
        isCorrect: false,
      },
      {
        id: '7f428f5f-06fc-5208-aa06-14978967dd27',
        t: 'Светлана Лобода',
        a: 'Не угадали! Из всех перечисленных героев только актер Константин Хабенский не работал таксистом. Был такой опыт и у свахи Розы Сябитовой на розовой «Оке», и в студенчестве у суперзвезды Светланы Лободы.',
        isCorrect: false,
      },
    ],
    isActive: false,
  },
  {
    id: '8',
    t: 'Этот фрагмент плаката призывает водителей…',
    i: '8.png',
    v: [
      {
        id: '2de7c77c-cf9e-5c64-a176-d3cf12aefae5',
        t: 'Не сбивать собак',
        a: 'Не верно! Этот плакат призывает не переписываться в мессенджерах за рулём. Подпись под ним гласит «Вы видите либо собаку, либо букву». И если вы переписываетесь и видите буквы на своем экране, то собаку на дороге вы не увидите.',
        isCorrect: false,
      },
      {
        id: '2bb76109-98d8-5984-8241-c9a5fcfaa1db',
        t: 'Не перевозить крупных собак на переднем сидении ',
        a: 'Не верно! Этот плакат призывает не переписываться в мессенджерах за рулём. Подпись под ним гласит «Вы видите либо собаку, либо букву». И если вы переписываетесь и видите буквы на своем экране, то собаку на дороге вы не увидите.',
        isCorrect: false,
      },
      {
        id: '04101d10-0f8f-51ea-b908-9c0b1a7a8f21',
        t: 'Не отвлекаться на биллборды и экраны вдоль дороги',
        a: 'Не верно! Этот плакат призывает не переписываться в мессенджерах за рулём. Подпись под ним гласит «Вы видите либо собаку, либо букву». И если вы переписываетесь и видите буквы на своем экране, то собаку на дороге вы не увидите.',
        isCorrect: false,
      },
      {
        id: 'dbf0c7fb-40a9-5ac2-b9a1-b797fb8b2e90',
        t: 'Не переписываться за рулем',
        a: 'Все правильно! Подпись под этим плакатом гласит «Вы видите либо собаку, либо букву». И если вы переписываетесь и видите буквы на своем экране, то собаку на дороге вы не увидите.',
        isCorrect: true,
      },
    ],
    isActive: false,
  },
  {
    id: '9',
    t: 'Кто поет песню «Усталое такси»?',
    i: '9.png',
    v: [
      {
        id: 'e6c3345b-8f13-5f2b-92db-7636468b31c7',
        t: 'Крис Кельми',
        a: 'Верно! Удивительно, что вы это помните!',
        isCorrect: true,
      },
      {
        id: '237973fe-21ce-53d8-ba7f-b72099419eee',
        t: 'Александр Градский',
        a: 'Неверно! Эту популярную в 1989 году песню исполнял Крис Кельми.',
        isCorrect: false,
      },
      {
        id: '3788f87f-4ef3-51f9-bb84-d6e196a4d8a4',
        t: 'Павел Смеян',
        a: 'Неверно! Эту популярную в 1989 году песню исполнял Крис Кельми.',
        isCorrect: false,
      },
      {
        id: '27f93af8-9e44-5cc4-a4b0-5568ff5b7af2',
        t: 'Андрей Макаревич',
        a: 'Неверно! Эту популярную в 1989 году песню исполнял Крис Кельми.',
        isCorrect: false,
      },
    ],
    isActive: false,
  },
  {
    id: '10',
    t: 'Сколько будет стоить поездка в Яндекс.Такси в будний день без пробок днем от МЕГИ до станции метро «Парк культуры»?',
    i: '10.png',
    v: [
      {
        id: 'd8cfbe1b-ad3b-52a0-833f-d45ef7528052',
        t: '300 рублей',
        a: '<p>Мимо. <br/>Вы, наверное, знаете по собственному опыту? Но теперь, если совершить покупки в МЕГЕ на сумму от 3000 рублей, можно сэкономить и на этом! Достаточно показать чеки своих покупок на стойке информации. Подробнее об акции <a href="https://mega.ru/events/2021/34613/nn/" target="_blank" class="result-link">тут</a>.</p>',
        isCorrect: false,
      },
      {
        id: 'b4157ad2-d6e0-52ca-8538-4b13368c1e65',
        t: '415 рублей',
        a: '<p>В точку! <br/>Вы, наверное, знаете по собственному опыту? Но теперь, если совершить покупки в МЕГЕ на сумму от 3000 рублей, можно сэкономить и на этом! Достаточно показать чеки своих покупок на стойке информации. Подробнее об акции <a href="https://mega.ru/events/2021/34613/nn/" target="_blank" class="result-link">тут</a>.</p>',
        isCorrect: true,
      },
      {
        id: 'e2c8b4ab-94a4-5de9-958c-b020ae977237',
        t: '500 рублей',
        a: '<p>Мимо. <br/>Вы, наверное, знаете по собственному опыту? Но теперь, если совершить покупки в МЕГЕ на сумму от 3000 рублей, можно сэкономить и на этом! Достаточно показать чеки своих покупок на стойке информации. Подробнее об акции <a href="https://mega.ru/events/2021/34613/nn/" target="_blank" class="result-link">тут</a>.</p>',
        isCorrect: false,
      },
      {
        id: '92743aa6-d14f-5f52-8bc3-fe32360e0c7e',
        t: '650 рублей',
        a: '<p>Мимо. <br/>Вы, наверное, знаете по собственному опыту? Но теперь, если совершить покупки в МЕГЕ на сумму от 3000 рублей, можно сэкономить и на этом! Достаточно показать чеки своих покупок на стойке информации. Подробнее об акции <a href="https://mega.ru/events/2021/34613/nn/" target="_blank" class="result-link">тут</a>.</p>',
        isCorrect: false,
      },
    ],
    isActive: false,
  },
];