/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

const postpone = (start, end, delay) => {

    if (typeof start === `number` && typeof end === `number` && typeof delay === `number`) {

        const count = () => {

            if (start <= end) {

                for (let i = start; i <= end; i++) {

                    console.log(i);
    
                }

            } else if (start > end) {

                for (let i = start; i >= end; i--) {

                    console.log(i);
    
                }

            }

        };

        setTimeout (count, delay);

    } else throw new Error (`all parameter must be a number!`);

};

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;