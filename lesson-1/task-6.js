/*# Задача 6

Написать код который посчитает сумму всех элементов в массиве.

Использовать встроенные методы массивов — нельзя.

```js
const array = [1, 2, 3, 4];
```*/

const arr = [1,2,3,4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum);