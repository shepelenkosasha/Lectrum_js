/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

const required = () => {throw new Error('required parameter')};

const every = (array = required(), callback = required()) => {
	if (Array.isArray(array) && typeof(callback) === 'function') {
 	for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index, array)) {
    	return false;
    };
  } return true;
	} else if (!Array.isArray(array)) {
		throw new Error ('first argument must be an array');
	} else if (typeof(callback) !== 'function') {
		throw new Error ('second argument must be a function');
	}; 
};

const result = every(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

exports.every = every;