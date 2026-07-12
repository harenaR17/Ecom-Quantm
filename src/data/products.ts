// Define types for the product structure
export interface Product {
  ID: string;
  title: string;
  price: number;
  mainImage: string;
  otherImages: string;
  body: string;
  inventoryQuantity: string;
  category?: string;
}

// Parse the product database
export const products: Product[] = [
  {
    "ID": "2",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Поредица: Художествена литература [/series/49/]</li>\n<li>Страници: 368</li>\n<li>Дата на издаване: 26.05.2026</li>\n<li>ISBN: 9786192742980</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.35 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Български автори [/category/213] , Художествена литература\n[/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 9.6,
    "title": "Глина – мека корица, второ издание",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1447/thumbs/Glina_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "3",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Страници: 8</li>\n<li>Цветни страници</li>\n<li>Дата на издаване: 10.11.2024</li>\n<li>ISBN: 9786192740498</li>\n<li>Размер: 280x210</li>\n<li>Тегло: 0.225 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: За най-малките [/category/120] , Коледни книги [/category/225]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 7.82,
    "title": "Коледа по света",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1898/thumbs/Christmas-All-Around-the-World_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "4",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Поредица: Художествена литература [/series/49/]</li>\n<li>Страници: 368</li>\n<li>Твърди корици</li>\n<li>Дата на издаване: 12.04.2021</li>\n<li>ISBN: 9786191516735</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.45 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Български автори [/category/213] , СОФТПРЕС [/category/232] ,\nХудожествена литература [/category/153] , Чети като за световно!\n[/category/227]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 9.81,
    "title": "Глина – твърда корица",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1476/thumbs/Glina_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "5",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Милена Илиева</li>\n<li>Поредица: Хит трилър [/series/23/]</li>\n<li>Страници: 320</li>\n<li>Дата на издаване: 12.03.2021</li>\n<li>ISBN: 9786191516643</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.3 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Трилъри [/category/207] , Художествена литература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "Списъкът",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1468/thumbs/Spisak_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "6",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Страници: 96</li>\n<li>Цветни страници</li>\n<li>Дата на издаване: 11.03.2021</li>\n<li>ISBN: 9786191516629</li>\n<li>Размер: 212x280</li>\n<li>Тегло: 0.55 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Български автори [/category/213] , Приказки и легенди\n[/category/122] , СОФТПРЕС [/category/232]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 9.2,
    "title": "Приказки за гугулета",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1461/thumbs/Prikazki_za_gugleta_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "7",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Габриела Кожухарова</li>\n<li>Поредица: Художествена литература [/series/49/]</li>\n<li>Страници: 392</li>\n<li>Дата на издаване: 26.02.2021</li>\n<li>ISBN: 9786191516551</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.375 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Исторически романи [/category/229] , Художествена литература\n[/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.74,
    "title": "Парижката библиотека",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1457/thumbs/Parizhkata_biblioteka_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "8",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Нели Лозанова, Кристина Димитрова</li>\n<li>Поредица: Инспектор Гамаш [/series/41/]</li>\n<li>Страници: 464</li>\n<li>Дата на издаване: 17.12.2020</li>\n<li>ISBN: 9786191516377</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.45 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: 16 + години [/category/164] , 18 + години [/category/165] ,\nКриминални романи [/category/209] , Художествена литература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "Час за разплата",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1452/thumbs/Chas_za_razplata_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "9",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Страници: 152</li>\n<li>Цветни страници</li>\n<li>Дата на издаване: 11.12.2020</li>\n<li>ISBN: 9786191516315</li>\n<li>Размер: 165x235</li>\n<li>Тегло: 0.4 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Български автори [/category/213] , Нехудожествена литература\n[/category/200]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "Пътешествия за мечтатели",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1450/thumbs/Pyteshestviq_za_mechtateli_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "10",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Марин Загорчев</li>\n<li>Страници: 800</li>\n<li>Твърди корици</li>\n<li>Дата на издаване: 01.12.2020</li>\n<li>ISBN: 9786191516353</li>\n<li>Размер: 153х234</li>\n<li>Тегло: 1 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: 16 + години [/category/164] , 18 + години [/category/165] ,\nБиографии [/category/214] , Нехудожествена литература [/category/200] ,\nПодаръчни книги [/category/148]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 20.25,
    "title": "Обетована земя",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1448/thumbs/Barak_Obama_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "11",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Любомир Николов</li>\n<li>Художник: Джана Mатиа</li>\n<li>Страници: 64</li>\n<li>Цветни страници</li>\n<li>Твърди корици</li>\n<li>Дата на издаване: 27.10.2020</li>\n<li>ISBN: 9786191516186</li>\n<li>Размер: 170x230</li>\n<li>Тегло: 0.36 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Детски книги [/category/149] , За най-малките [/category/120] ,\nПриказки и легенди [/category/122]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "Натали Портман разказва в рими басни",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1436/thumbs/Natali_Portman_basni_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "12",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Богдан Русев</li>\n<li>Поредица: Хит трилър [/series/23/]</li>\n<li>Страници: 280</li>\n<li>Дата на издаване: 05.08.2020</li>\n<li>ISBN: 9786191515677</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.25 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Трилъри [/category/207] , Художествена литература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "Осем перфектни убийства",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1411/thumbs/8_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "13",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Художник: Полона Ловшин</li>\n<li>Поредица: Моето семейство [/series/87/]</li>\n<li>Страници: 28</li>\n<li>Цветни страници</li>\n<li>Дата на издаване: 31.07.2020</li>\n<li>ISBN: 9786191515639</li>\n<li>Размер: 215x215</li>\n<li>Тегло: 0.125 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: За най-малките [/category/120]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 2.3,
    "title": "Татко",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1414/thumbs/Tatko_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "14",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Нели Лозанова, Росица Тодорова</li>\n<li>Поредица: Инспектор Гамаш [/series/41/]</li>\n<li>Страници: 456</li>\n<li>Дата на издаване: 21.05.2020</li>\n<li>ISBN: 9786191515493</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.43 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: 16 + години [/category/164] , 18 + години [/category/165] ,\nКриминални романи [/category/209] , Художествена литература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "Природата на звяра",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1395/thumbs/Gamash_11_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "15",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Калина Лазарова</li>\n<li>Поредица: Художествена литература [/series/49/]</li>\n<li>Страници: 360</li>\n<li>Дата на издаване: 10.02.2020</li>\n<li>ISBN: 9786191515233</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.325 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Трилъри [/category/207]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "55",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1382/thumbs/55_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "16",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Нели Лозанова</li>\n<li>Поредица: Инспектор Гамаш [/series/41/]</li>\n<li>Страници: 424</li>\n<li>Дата на издаване: 28.11.2019</li>\n<li>ISBN: 9786191515158</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.4 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: 16 + години [/category/164] , 18 + години [/category/165] ,\nКриминални романи [/category/209] , Художествена литература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 8.28,
    "title": "Дългият път към дома",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1371/thumbs/Gamash_10_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "17",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Художник: Гергана Грънчарова</li>\n<li>Поредица: Художествена литература [/series/49/]</li>\n<li>Страници: 232</li>\n<li>Дата на издаване: 23.11.2019</li>\n<li>ISBN: 9786191515134</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.2 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Български автори [/category/213] , Коледни книги [/category/225] ,\nПриказки и легенди [/category/122] , СОФТПРЕС [/category/232] , Художествена\nлитература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 6.9,
    "title": "Приключение в Долната земя. Коледари срещу хали",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1365/thumbs/Koledari_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "18",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Художник: Полона Ловшин</li>\n<li>Поредица: Моето семейство [/series/87/]</li>\n<li>Страници: 28</li>\n<li>Цветни страници</li>\n<li>Дата на издаване: 08.02.2019</li>\n<li>ISBN: 9786191514618</li>\n<li>Размер: 215x215</li>\n<li>Тегло: 0.1 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: За най-малките [/category/120]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 2.3,
    "title": "Моят дядо",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1318/thumbs/Moyat_dyado_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "19",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Художник: Полона Ловшин</li>\n<li>Поредица: Моето семейство [/series/87/]</li>\n<li>Страници: 28</li>\n<li>Цветни страници</li>\n<li>Дата на издаване: 08.02.2019</li>\n<li>ISBN: 9786191514625</li>\n<li>Размер: 215x215</li>\n<li>Тегло: 0.1 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: За най-малките [/category/120]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 2.3,
    "title": "Моята баба",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1319/thumbs/Moyata_baba_cov_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "20",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Преводач: Калина Лазарова</li>\n<li>Поредица: Инспектор Гамаш [/series/41/]</li>\n<li>Страници: 448</li>\n<li>Дата на издаване: 13.12.2018</li>\n<li>ISBN: 9786191514601</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.45 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: 16 + години [/category/164] , 18 + години [/category/165] ,\nКриминални романи [/category/209] , Художествена литература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 10.79,
    "title": "Красива мистерия",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1314/thumbs/Beautiful_mystery_web_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  },
  {
    "ID": "21",
    "body": "<p>ИНФОРМАЦИЯ</p>\n<ul>\n<li>Поредица: Художествена литература [/series/49/]</li>\n<li>Страници: 344</li>\n<li>Дата на издаване: 13.12.2018</li>\n<li>ISBN: 9786191514595</li>\n<li>Размер: 130x200</li>\n<li>Тегло: 0.35 кг</li>\n<li>Наличност: Да</li>\n<li>Категории: Български автори [/category/213] , Дамска проза [/category/205] ,\nИсторически романи [/category/229] , Съвременна проза [/category/204] ,\nХудожествена литература [/category/153]</li>\n</ul>\n<p>ДОБАВИ В ЛЮБИМИ</p>\n<p>ПРЕМАХНИ ОТ ЛЮБИМИ</p>\n<p>СПОДЕЛИ</p>",
    "price": 7.82,
    "title": "Бал в Мулен Руж",
    "category": "FOR SLEEP",
    "mainImage": "https://www.soft-press.com/uploads/products/book1315/thumbs/Mulen_Ruj_web_316x.jpg",
    "otherImages": "",
    "inventoryQuantity": "993"
  }
];