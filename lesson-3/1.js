/*/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение

/* не удалять 
f(2); // 8
f('Content'); // Error: parameter is not a number type

export { f };
 не удалять */

const f = num => {
	if (typeof num === 'number') {
        return console.log(num ** 3);
    } else {
        throw new Error('parameter is not a number type');
    }
}

f(2);
f('Content');