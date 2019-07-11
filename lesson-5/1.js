/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

const upperCaseFirst = (string) => {
	if (typeof(string) === 'string') {
		return console.log(string.charAt(0).toUpperCase() + string.slice(1));
	} else {
		throw new Error('all parameters type should be a String');
	}
};

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;