/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

const truncate = (string, maxLength) => {
	if (typeof(string) === 'string' && typeof(maxLength) === 'number') {
		if (string.length > maxLength) {
			return console.log(string.slice(0, maxLength) + '...');
		} else if (string.length <= maxLength) {
			return console.log(string);
		}
	} else {
		throw new Error('first parameter type should be a String and second parameter type should be a Number');
	}
};

truncate('lorem lorem', 15);
truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;