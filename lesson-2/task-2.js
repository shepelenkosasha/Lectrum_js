/*
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

/* не удалять
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

export { f }; не удалять */

let f = function(num) {
	if (typeof num !== 'number') {
		throw new Error('all parameters should be a Number type');
 } else {
		let sum = 0;
		for (let i = 0; i < arguments.length; i++) {
				console.log(typeof(arguments));
				sum += arguments[i];
		}
  return console.log(sum);
 }
}

f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4);
f('1',2,'s',4);