// Способы объявления массива
// Вариант 1

const students = new Array(42); // в этой ситуации мы зададим длину (length) массива
console.log(students);

// Вариант 2
const firms = [42]; // в этом случае 42 будет под 0 индексом в массиве 
console.log(firms);

const cities = ['Moscow', 'Kazan', 'Yaroslavl', 'Omsk'];
console.log(cities[2]); // Yaroslavl
console.log(cities);

// Удаление элемента массива
delete cities[3]; // Удаление элемента массива оставляет дырку
console.log(cities); // ['Moscow', 'Kazan', 'Yaroslavl', empty]
// Примечание: .length после удаления не поменяется, т.е. будет = 4
// Потому что длина - это не количество элементов, а индекс +1