/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение

/* не удалять 
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
не удалять */

let f = function(num) {
	if (typeof num !== 'number') {
		throw new Error('Error: parameter type is not a Number');
 } else if(num < 1 || num > 7) {
  throw new Error('Error: parameter should be in the range of 1 to 7');
 } else {
  if(num === 1) return console.log('Воскресенье');
		else if(num === 2) return console.log('Понедельник');
		else if(num === 3) return console.log('Вторник');
		else if(num === 4) return console.log('Среда');
		else if(num === 5) return console.log('Четверг');
		else if(num === 6) return console.log('Пятница');
		else if(num === 7) return console.log('Суббота');
 }
}

f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number