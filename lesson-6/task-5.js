/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

const required = () => {throw new Error('required parameter')};

const reduce = (array = required(), callback = required(), number = required()) => {
	if (Array.isArray(array) && typeof(callback) === 'function' && typeof(number) === 'number') {
		let result = number;
 	for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
    	result = callback(result, array[index], index, array);
    };
  } return result;
	} else if (!Array.isArray(array)) {
		throw new Error ('first argument must be an array');
	} else if (typeof(callback) !== 'function') {
		throw new Error ('second argument must be a function');
	} else if (typeof(number) !== 'number') {
		throw new Error ('third argument must be a number');
	};
};

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;