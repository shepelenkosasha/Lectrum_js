/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

const required = () => {throw new Error('required parameter')};

const bind = function(func = required(), obj = required()) {

    if (typeof(func) === 'function' && typeof(obj) === 'object' && !Array.isArray(obj)) {

        let arr = [];
        let args = arr.slice.call(arguments, 2);

        return function () {

            let functionArgs = arr.slice.call(arguments);

            let result = func.apply(obj, args.concat(functionArgs));

            return result;

        };

    } else if (typeof(func) !== 'function') {

        throw new Error ('first parameter must be a function !');

    } else if (typeof(obj) !== 'object') {

        throw new Error ('second parameter must be an object !');

    } else if (Array.isArray(obj)) {

        throw new Error ('second parameter should not be array !');

    };

};

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;