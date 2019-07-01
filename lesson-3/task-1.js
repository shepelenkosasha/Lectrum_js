/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение

let date = new Date();
console.log(date.getMonth());
console.log(date.getDate());

if (date.getMonth() == 0 || date.getMonth() == 2 || date.getMonth() == 4 || date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 9 || date.getMonth() == 11) {
	if (date.getDate() <= 11) {
		person.salary = console.log(`good salary`);
	} else {
		person.salary = console.log(`bad salary`);
	}
} else if(date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) {
	if (date.getDate() <= 10) {
		person.salary = console.log(`good salary`);
	} else {
		person.salary = console.log(`bad salary`);
	}
} else if(date.getMonth() == 1) {
	if (date.getDate() <= 8) {
		person.salary = console.log(`good salary`);
	} else {
		person.salary = console.log(`bad salary`);
	}
};

person.salary; // good salary

exports.person = person;