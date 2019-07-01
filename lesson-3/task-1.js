/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

let date = new Date();
console.log(date.getDate());
if (date >= 10) {
	person.salary = console.log(`good salary`);
} else {
	person.salary = console.log(`bad salary`);
}

// Решение

person.salary; // good salary

exports.person = person;