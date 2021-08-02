// 1 Переменные
// camelCase - (стайлгайд) - способ применения имени переменной через большую букву следующего слова в имени
// const firstName = 'Arsen'
// const age = 25  //number - тип данных
// const isProgrammer = true  // boolean - тип данных

// name = 'Anton'
// console.log(isProgrammer)

// синтаксис объявления переменных
// const if = 'qwer' - err
// const 5firstName = 'Arsen' - err
// const _ = '5'
// console.log(5)

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2021
// const birthYear = 1995
// const age = currentYear - birthYear

// const a = 20
// const b = 5
// let c = 32

// c += a // c = c + a (текущее состояние переменной "с" равно с плюс "а")
// c -= a // c = c - a
// c /= a // c = c / a
// c *= a // c = c * a

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const firstName = 'Arsen'
// const age = 26
// let x
// null

// Примитивные типы данных
// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// Приоритет операторов
// const fullAge = 25
// const birthYear = 1995
// const currentYear = 2021

// const isFullAge = currentYear - birthYear >= fullAge
// const num = 3;
// alert(num);

// const a = 10;

// const b = 2;
// console.log(a * b);
// console.log(a / b);
// console.log(a + b);
// console.log(a - b);

// const a = 10;
// const b = 2;

// const c = 5;

// const result = a + b + c;
// console.log(result);
// const a = 17;
// const b = 10;
// const c = a - b;
// const d = 7;
// const result = c + d;
// console.log(result);

// const str = 'Привет, Мир!';
// console.log(str);

// const str1 = 'Привет, ';
// const str2 = 'Мир!';

// const name = 'Arsen';
// console.log('Привет, ' + name);
// const age = 25;
// console.log(`Мне ${age} лет!`);

// const name = prompt('Ваше имя');
// alert(`Ваше имя ${name}`);

// const num = prompt('Введите число');

// alert(Math.pow(num, 2));

// const str = abcde;
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);
// function getShippingCost(country) {
//   let message;
// Change code below this line
//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

// Change code above this line
//   console.log(message);
// }
// function formatMessage(message, maxLength) {
//   let result;
// Change code below this line
//   if (message.length < maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }

/// Change code above this line
//   return result;
// }

// Задача модуля №1 под номером 36
// function checkForSpam(message) {
//   let result;
// Change code below this line
//   message = message.toLowerCase();

//   if (message.includes('sale') || message.includes('spam')) {
//     result = true;
//   } else {
//     result = false;
//   }
// Change code above this line
//   return result;
// }
// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }
// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }
// const target = 5;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// const stack = [];

// Добавляем элементы в конец массива
// stack.push(125);
// console.log(stack); // [1]
// stack.push(5);
// console.log(stack);
// stack.push(13);
// console.log(stack);

// stack.pop();
// console.log(stack);

// !!--Masive
// const toSplice = [1, 5, 18, 45];
// console.log(toSplice);
// toSplice.splice(1, 3, 19); где 1 - место примененния "по индексу 1 (число 5)"; "начиная с него"
//   3 - количество удаляемых элементов "от первого индекса"
//   19 - добавленый элемент в массив
// console.log(toSplice);
// function f() {
//   return Array.from(arguments);
// }

// f(1, 2, 3);
// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//   } else {
//     console.log('Операция снятия средств проведена.');
//   }
// };
// withdraw(0, 300);
// Change code below this line
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   }
// }
// checkStorage(100, 50);
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   } else if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';

//   // Change code above this line
// }
// // checkStorage(100, 50);
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElementIndex);
// console.log(lastElement);
// const array = [4, 18, 22, 16, 47, 48];
// let splice = array.shift(0);
// let splice2 = array.shift(array.length - 1);
// // console.log([splice, splice2]);
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElements = array[0];
//   const lastElements = array[array.length - 1];
//   const objOutput = { [firstElements]: [lastElements] };
//   return objOutput;

//   // Change code above this line
// }
// getExtremeElements[(12, 21, 18.4888, 13)];
// console.log(getExtremeElements);

// function firstAndLast(array) {
//   var firstItem = array[0];
//   var lastItem = array[array.length - 1];

//   var objOutput = [firstItem, lastItem];

//   return objOutput;
// }

// firstAndLast(['dkflk', 'sdjjfjo', 'koodsko']);
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElements = array[0];
//   const lastElements = array[array.length - 1];
//   const myArray = [firstElements, lastElements];
//   return myArray;

//   // Change code above this line
// }

// ! Нахождение цены за слово в массиве

// const message = 'koo fjeio llsppe kycyd';
// const splitMessage = message.split(' ');
// console.log(splitMessage);
// const quantityWords = splitMessage.length;
// console.log(quantityWords);
// const pricePerWord = 50;

// const totalPrice = pricePerWord * quantityWords;
// console.log(totalPrice);

// function slugify(title) {
//   // Change code below this line

//   const toLowerTitle = title.toLowerCase();
//   const toSplitTitle = toLowerTitle.split(' ');
//   const slug = toSplitTitle.join('-');
//   return slug;

//   // Change code above this line
// }
// const title = 'Arrays for begginers';
// let slug;
// let toLowerTitle;
// let toSplitTitle;

// toLowerTitle = title.toLowerCase();
// console.log(toLowerTitle);
// toSplitTitle = toLowerTitle.split(' ');
// console.log(toSplitTitle);

// slug = toSplitTitle.join('-');
// console.log(slug);cin
// const firstArray = ['Mango'];
// const secondArray = ['Ajax', 'Chelsea', 'Poly', 'Houston'];
// const maxLength = 3;
// let newArray = firstArray.concat(secondArray);
// console.log(newArray);
// newArray = newArray.slice(0, maxLength);
// console.log(newArray);
// const order = [15, 20, 15];
// let total = 0;
// for (let i = total; i < order.length; i += 1) {
//   total += i;
// }
// console.log(total);

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// const str = 'May the force be with you';
// const toArray = str.split(' ');
// console.log(toArray);
// for (let i = 0; i < toArray.length; i += 1) {
//   let wordLength;
//   let longestWord;

//   wordLength = arrStr[1].length;

//   if (arrStr[i].length > wordLength) {
//     longestWord = arrStr[i];

//     console.log(longestWord);
//   }
// }

// !Функция для нахождения самого длинного слова в строке (с проверкой посторонних символов)
// const findLongestWord = function (str) {
//   if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
//     return 'содержит посторонние символы!';
//   }
//   let arrStr = str.split(' ');
//   let longestWord = arrStr[0];
//   for (let i = 1; i < arrStr.length; i++) {
//     if (arrStr[i].length > longestWord.length) {
//       longestWord = arrStr[i];
//     }
//   }
//   return longestWord;
// };

// !Функция создания массива от min до max, где указывается два числа (начало массива мин и конец массива мац)
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     let arrayOfNumbers = numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// function filterArray(numbers, value) {
//    // Change code below this line
//  let newArray = [];
//   for (let i = 0; i < numbers.length; i+=1) {
//     if (numbers[i] > value) {
//       newArray = numbers.push[i];

//     }
//       return newArray;

//   }

//   // Change code above this line
// }
// const numbers = [25, 13, 58, 44, 46];
// const value = 12;
// let newArray = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     newArray.push(numbers[i]);
//   }
// }
// console.log(newArray);
// let newArray = [];

//   // Change code above this line
// };

// const fil1 = filterArray([35, 12, 10], 10);
// console.log(fil1);
// console.log(newArray);
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const fruit = 'apple';
// c
// !Функция нахождения общих значений переменных из 2 массиво и запись их в третий массив
// const array1 = [1, 2, 3];
// const array2 = [2, 1, 17, 19];
// const newArray = array1.concat(array2);
// // console.log(newArray);
// let array3 = [];
// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//     array3.push(array1[i]);
//   }
// }

// console.log(array3);

// const includes = function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return;
//     }
//     return;
//     // Change code above this line
//   }
// };
// const add = function (x, y) {
//   return x + y;
// };
// const rezult = add(10, 15);
// console.log(rezult);

// const filterArray = function (numbers, value) {
//   let newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// };

// const rezult = filterArray([12, 34, 24], 10);
// console.log(rezult);

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   }
//   return message;
// }
// const rezult = checkStorage(18);
// console.log(rezult);
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line
// console.log(lastTag);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };
// console.log(apartment);

// Модуль 3 задача №10 - "Получение массива ключей и получение масива значений ключей через цикл for...in"
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
// }
// console.log(keys);

// for (const value in apartment) {
//   values.push(apartment[value]);
// }
// console.log(values);

// !Функция находжения самого длинного слова в строке
// const string = 'jijijdi jki kow0opdoo0od0 js o';
// const findLongestWord = function (string) {

//   let stringSplit = string.split(' ');
//   let longestWord = stringSplit[0];

//   for (let i = 0; i < stringSplit.length; i += 1) {
//     if (stringSplit[i].length > longestWord.length) {
//       longestWord = stringSplit[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord(string));

// // !Модуль №3 Задача №12 - нахождения суммы количества свойст объекта
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       propCount += Object.keys(object).length;

//       // Change code above this line
//       return propCount;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({}));

// Модуль 3 задача №13(вроде) - позволяет создать массив из свойст ключей объекта
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// 3.18(модуль 3 задача 18) - наполнение нового массива значениями свойст объекта
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// !3.18 Поиск объекта по значению свойства
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const name of products) {
//     if (productName === name.name) {
//       return name.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Grip'));

// !3.19 Функция для нахождения значений свойств по ключу
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrayValues = [];
//   for (const product of products) {
//     const keys = Object.keys(product);

//     if (keys.includes(propName)) {
//       arrayValues.push(product[propName]);
//     }
//   }
//   return arrayValues;
// }

// console.log(getAllPropValues('quantity'));

// ! 3.20 Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     const value = Object.values(product);

//     if (value.includes(productName)) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//     return totalPrice;
//   }
// }

// console.log(calculateTotalPrice('Radar'));

// !3.31 Функция возврата нового обьекта из параметра
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   const object = { completed, category, priority, ...data };
//   // Change code below this line
//   return object;
//   // Change code above this line
// }

// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   })
// );,

// !3.31 Функция нахождения суммы элементов любого количества параметров
// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total;

// Change code above this line
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 1, 10));

// Change code below this line
// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }

//   return total;
// Change code above this line
// }
// console.log(addOverNum(5, 2, 34, 17));

// Change code below this line
// function findMatches(values, ...args) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < args.length; i += 1) {
//     if (values.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// !Модуль 3 задача 35 - замена элемента свойства пр  помощи метода массива
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const oldBookIndex = this.books.indexOf(oldName);
//     this.books.splice(oldBookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// !Модуль 3 задача 41 - полный капец
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName.name) {
        return `Potion ${potionName.name} is already equipped!`;
      }
    }
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      if (potionName === name) {
        console.log(`Нашли ${potionName}, удаляю`);
        potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');

console.table(atTheOldToad.potions);
