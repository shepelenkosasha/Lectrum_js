/**
 * Задача 6.
 *
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 *
 * Заметки:
 * - Чётные числа могут делится на 2 без остатка.
 */

// Решение

/* не удалять 
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number

export { isEven };
не удалять */

let isEven = function(num) {
	if (typeof num === 'number') {
		if (num % 2 === 0) return console.log(true);
		else return console.log(false);
 } else {
  throw new Error('parameter type is not a Number');
 }
}

isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number
