/* function discountPrices (prices, discount) {
    var discounted = [];
    for (let i = 0; i < prices.length; i++) {
        let discountPrice = prices[i] * (1 - discount);
        let finalPrice = Math.round(discountPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    //console.log(i);
    //console.log(discountPrice);
    //console.log(finalPrice);
    return discounted;
}
console.log(discountPrices([3.3, 4, 5, 190], 0.25));

const person = {
    // 2 : 'Gleb'
    'name' : 'Timofey'
};
// person[2] = 'Robert';
person.name = 'Andrey';
console.log(person); */

// global
// local function
// local

// приоритет объявления
// const -> не меняется, можно для массива использовать, если пушишь в него значения
// let -> в цикле выполняется, за ним - НЕТ, за функцией - НЕТ
// var вообще балдёж, везде выполняется

/* function getArguments() {
    console.log(arguments); // arguments - это объект, позволяющий доступ к параметрам
    // передаваемых в функцию
}

console.log(getArguments([1, 2, 3]));
console.log(getArguments('test')); */

// ЗАМЫКАНИЕ - это функция, у которой есть доступ к своей внешней функции по области видимости
// даже после того, как внешняя функция завершилась, т.е. замыкание может хранить
// и получать доступ к переменным и аргументам своей внешней функции даже после завершения

// Пример 1
/* function createCalc(n) {
    return function() { // функция замыкание
        console.log(1000 * n);
    }
}

const calc = createCalc(42);
console.log(calc); 
calc(); */

// Пример 2
/* function createIncrementor(n) {
    return function getInc(num) {
        return n + num;
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10)); // 11
console.log(addTen(40)); // 50 */

// Пример 3
/* function urlGenerator(domainZone) {
    return function (url) {
        return `https://${url}.${domainZone}`;
    }
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');


console.log(comUrl('google'));
console.log(ruUrl('yandex')); */