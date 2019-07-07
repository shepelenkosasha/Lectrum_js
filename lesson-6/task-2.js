/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

const required = () => {throw new Error('required parameter')};

const filter = (array = required(), callback = required()) => {
	if (Array.isArray(array) && typeof(callback) === 'function') {
		let result = [];
 	for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
    	result.push(array[index]);
    };
  } return result;
	} else if (!Array.isArray(array)) {
		throw new Error ('first argument must be an array');
	} else if (typeof(callback) !== 'function') {
		throw new Error ('second argument must be a function');
	}; 
};

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;