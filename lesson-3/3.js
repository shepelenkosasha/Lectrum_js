/*
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входного параметра на тип number.
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

/* не удалять 
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

export { f };
не удалять 
```
*/

let f = function(num1, num2, num3) {
	if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        return console.log((num1 - num2) / num3);
    } else {
        throw new Error('all parameters type should be a Number');
    }
}

f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number