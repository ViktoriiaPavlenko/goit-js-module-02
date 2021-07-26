// ------- массивы
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// console.log(friends[2]);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// ------- переопределение
// friends[1] = 'qwe';
// console.table(friends);


// ------- передача по значению
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);


// ------- передача по ссылке
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);
// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);


// // ------- Перебор (итерация) массива
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// // ---for (если нужно получить доступ к индексу или изменить значение елемента)
// // const lastIndex = friends.length - 1;

// // for (let i = 0; i <= lastIndex; i += 1) {
// //     console.log(friends[i]);
// // }

// // ---for...of
// for (const friend of friends) {
//     console.log(friend);
// }



//  ------- Посчитать общую сумму покупок в корзине 
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// вариант с for

// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);

//     total += cart[i];
// }

// вариант с for of
// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);


// ------- Напиши скрипт который подсчитывает сумму всех четных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// // 1 переменная тотал
// let total = 0;

// 2 перебрать массив

// вариант с for

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);

//     // 3 на каждой итерации проверить елемент на четность
//     if (number % 2 === 0) {
//         console.log('Четное!!!');

//         // 4 если четный плюсуем к тотал
//         total += number
//     }
// }


// вариант с for...of

// for (const number of numbers) {
//     console.log(number);


//     if (number % 2 === 0) {
//         console.log('Четное!!!');

//         total += number
//     }
// }


// 2й вариант с for...of  Логика от обратного (если не - пропускаем)

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('Эту итерацию нужно пропустить', number);
//         continue;
//     }

//     console.log(`${number} - четное!!!`);
//     total += number
// }
// console.log('Total: ', total);



// ------- Напиши скрипт поиска логина
// -Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// -Если нашли логин, вывести сообщение 'Пользователь [логин] не найден.'

// const logins = ['mango4', 'kiwi3', 'polysss', 'ajaxxxxx'];
// const loginToFind = 'polysss';


// let message = `Пользователь ${loginToFind} не найден.`;
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`
//         break;
//     }
// }
// console.log(message);


// 2й вариант с for...of

// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {
//     if (login === loginToFind) {

//         message = `Пользователь ${loginToFind} найден.`
//         break;
//     }
// }
// console.log(message);



// 3й вариант - метод includes() с тернарним оператором

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`

// console.log(message);
 


// ------- Напиши скрипт поиска самого маленького числа в массиве,
// про условии что числа уникальные (не повторяються).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallest number: ', smallestNumber);


// та же задача, только самое большое число
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log('biggest number: ', biggestNumber);



// ------- Напиши скрипт, который обьединяет все елементы массива 
// в одно строковое значение. Элементов может быть произвольное количество.
// Пусть елементы массива в строке будут разделены запятой. 

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// через for
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1)

// console.log(string);



// через join()
// const string = friends.join(', ');
// console.log(string);




//  ------- Напиши скрипт, который заменяет регистр каждого символа
// в строке на противоположный. 
// Например если строка "JavaScript", то на выходе должна быть строка
// "jAVAsCRIPT"

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);


// 1й вариант

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log('Эта буква в нижнем регистре!!! - ', letter);

//         invertedString += letter.toUpperCase();
//     } else {
//         console.log('Эта буква в верхнем регистре!!! - ', letter);
//         invertedString += letter.toLowerCase();
//     }
// }



// 2й вариант
// for (const letter of letters) {
//     console.log(letter);

//     const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual
//         ? letter.toUpperCase()
//         : letter.toLowerCase()
    
// }


// console.log('Inverted string: ', invertedString);




// ------- Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов
// Нормализируем строку 
// Разбиваем по словам 
//  Сшиваем в строку с разделителями
//  Должно получиться top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// то же самое в одной строке
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);



// ------- Напиши скрипт который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);



// ------- Работаем с коллекцией карточек в trello
// Метод splice()
// Удалить
// Добавить
// Обновить

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
]

console.table(cards);

// Удаление (по индексу), метод indexOf()

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// Добавление (по индексу)
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// Обновление (по индексу)
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);

cards.splice(index, 1, 'Обновленная карточка-4');
console.table(cards);