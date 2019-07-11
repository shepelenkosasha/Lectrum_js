/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

// const array = [1, 2, 'a', 3, 4];
const array = [1, 2, 3];
// Решение

const required = () => {throw new Error('required parameter')};

const forEach = (array = required(), callback = required()) => {
	if (Array.isArray(array) && typeof(callback) === 'function') {
 	for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
	} else if (!Array.isArray(array)) {
		throw new Error ('first argument must be an array');
	} else if (typeof(callback) !== 'function') {
		throw new Error ('second argument must be a function');
	}; 
};

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;