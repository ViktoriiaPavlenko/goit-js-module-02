// ------- FUNCTION EXPRESSION
// myFunc() // нельзя вызывать до объявления
const myFunc = function (param1, param2) {

  console.log(`Это функциональное выражение с параметрами ${param1} ${param2}`)
}


// ------- FUNCTION DECLARATION
// myFuncDecl() // можно вызвать до объявления
function myFuncDecl(param) {
  console.log(`Это декларативное объявление`)
}


// ------- ARROW FUNCTION - ES6
// myArrowFunc() // нельзя вызывать до объявления
const myArrowFunc = (param1) => {
  
  console.log(`Это стрелочная функция`)
}

myFunc('Hello', 'World')
myFuncDecl()
myArrowFunc()


// ------- PARAMS & ARGUMENTS

// function toSayHello(userName = 'User') {
//   alert(`${userName}, рады вас приветствовать!!!`)
// }
// toSayHello('Viktoriia')


// function showInfo(userName, userAge) {

//     console.log(`Hello, my name is ${userName}. I am ${userAge} years old`);
// }

// showInfo('Viktoriia', 23)


// ------- ARGUMENTS & ...args
function getResult(...allParams) {
    console.log(arguments)
    console.log('allParams', allParams)
  for (let elem of arguments) {
    console.log(elem)
  }
  
  //   Преобразование псевдомассива в массив
  const myArgs = Array.from(arguments)
    console.log(myArgs)
  myArgs.push(7)
    console.log(myArgs)
}
getResult(0, 1, 2, 3, 4, 5, 6)

const getArrayRes = (...allParams) => {
  //   console.log(arguments)
    console.log(allParams)
}
getArrayRes(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)



// ------- Guard Clause

//  какое число отсутствует в массиве

function getValue(array, value) {
    console.log(array)
  for (let i = 0; i < array.length; i += 1) {
    // console.log(`iteration-${i + 1}`)
    if (array[i] === value) return `Значение ${value} есть в массиве`
  }
  return `Значение ${value} отсутствует в массиве`
}
let result = getValue([1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1], 1)
console.log(result)
result = getValue([1, 2, 3, 4, 5, 6, 7], 8)
console.log(result)


// есть ли спам в тексте

function getSpam(text, words) {
  //   console.log(text)
  //   console.log(words)
  
  for (let word of words) {
    
    if (text.includes(word)) return `spam`
    }
    
  return text
}
const arr = ['dolor', 'amet']
let value = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, eum.`
console.log(getSpam(value, arr));


// ------- ARRROW FUNCTION & RETURN

// 1й вариант
// const getTotal = (a, b) => {
//   return a + b
// }

// 2й вариант
const getTotal = (a, b) => a + b

console.log(getTotal(2, 5))



// const greet = user => `Hello ${user}`
const greet = (user) => `Hello ${user}`  //тот же вариант только со скобками (оба варианта правильные)
console.log(greet('Viktoriia!'))


// ------- Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

  function checkYear(year) {
  let condition = year % 4 === 0
  if (condition) return `${year} високосный`
  return `${year} не високосный`
}
console.log(checkYear(2024))


// ------- Написати програму де компютер загадає число від 1 до 10 і
//   запропонує користувачу вгадати його. Користувач вводить свій
//   варіант і отримує результат (Виграв чи ні). Вивести результат в
//   форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви
//   програли, компютер загадав (тут варіант компютера)"

function game() {
  let comp = Math.ceil(Math.random() * (10 - 1) + 1)
  let user = prompt('Введите число от 1 до 10')
  console.log(comp, user)
  
  if (comp == user) return 'You won'
  return `You lose`
}

// console.log(game())


// ------- Написати програму яка буде знаходити суму, різницю, добуток,
// частку двох чисел. Користувач вводить 2 числа потім вводить знак
// операції і отримує результат в форматі "Сума чисел a i b =
// результат" (такий шаблон для кожної відповіді)

function getMathResult() {
  let num1 = prompt('Enter the first number')
  let num2 = prompt('Enter the second number')
  let symbol = prompt('Enter the symbol')
    let total = 0
    
    console.log(num1, num2, symbol)
    
  switch (symbol) {
    case '+':
      total = Number(num1) + Number(num2)
      break

    case '-':
      total = num1 - num2
      break

    case '*':
      total = num1 * num2
      break
    case '/':
      total = num1 / num2
      break

    default:
      console.error(`ERROR`)
  }
  return total
}

console.log('result', getMathResult())




