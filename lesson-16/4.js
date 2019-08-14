/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer {
    reverse (string) {
        return string.split('').reverse().join('');
    };

    uppercaseFirst (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    uppercaseAll (string) {
        const delim = string.split(' ');
        const upperFirst = delim.map(element => element.charAt(0).toUpperCase() + element.slice(1));
        return upperFirst.join(' ');
    };
};

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;