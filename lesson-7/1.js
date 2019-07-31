/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 * 
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
  false,
  'Привет.',
  2,
  'Здравствуй.',
  [],
  'Прощай.',
  {
    name: 'Уолтер',
    surname: 'Уайт',
  },
  'Приветствую.',
];


// Решение

const required = () => {throw new Error('required parameter')};

const inspect = (array = required()) => {

  if (Array.isArray(array)) {

    const filterArray = array.filter(item => typeof(item) === 'string');

    return filterArray.map(elem => elem.length);

  } else if (!Array.isArray(array)) {

    throw new Error ('argument must be an array');

  }

};

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;