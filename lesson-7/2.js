/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * 
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

const required = () => {throw new Error('required parameter')};

const collect = (array = required()) => {
	if (Array.isArray(array)) {
		
		let flatArray = array => {
			
			return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatArray(val)) : acc.concat(val), []);

		};

		if (flatArray(array).length !== 0) {

			return flatArray(array).reduce((sum, elem) => sum + elem);

		} else return 0;		

	} else if (!Array.isArray(array)) {

		throw new Error ('argument must be an array');

	}
};

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;