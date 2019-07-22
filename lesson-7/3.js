/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const required = () => {throw new Error('required parameter')};

const createArray = (value = required(), quantity = required()) => {

    if (!Array.isArray(value) && typeof(value) !== 'number' && typeof(value) !== 'string' && typeof(value) !== 'object') {

        throw new Error('invalid first value');

    } else if (typeof(quantity) !== 'number') {

        throw new Error('second parametr must be a number');

    } else {

        let array = [];

        for (let i = 0; i < quantity; i++) {

            array.push(value);

        }

        return array;
        
    }
    
};

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;