/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

//const array = [1, 2, -4, 3, -9, -1, 7];

// Решение

/* не удалять 
isPositive(-3); // false
isPositive(3); // true
isPositive('s'); // Error: parameter type is not a Number

export { isPositive };
не удалять */

const array = [1, 2, -4, 3, -9, -1, 7];

let isPositive = function (num) {
	if (typeof num === 'number') {
		if (num > 0) return console.log(true);
		else return console.log(false);
 } else {
  throw new Error('parameter type is not a Number');
 }
}

let f = function (array) {
	if (array !== []) {
		for (let i = 0; i < array.length; i++) {
			isPositive(array[i]);
			array.push(i);
	 }
	 return console.log(array);
	} 
 // } else if (array === []) {
 // 	throw new Error(`parameter can't be an empty`);
 // } else {
 //  throw new Error('parameter type should be an array');
 // }
}

f(array);

// isPositive(-3); // false
// isPositive(3); // true
// isPositive('s'); // Error: parameter type is not a Number