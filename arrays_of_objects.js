// Работа с массивом объектов

// filter
const cart = [
    {
        name: 'Drink', price: 3.22
    },
    {
        name: 'Pie', price: 15.56
    },
    {
        name: 'Bread', price: 8.14
    },
];

let drinkOrders = cart.filter(function(obj) { //создаёт новый массив со всеми элементами,
    // прошедшими проверку, задаваемую в передаваемой функции.
    return obj.name === 'Drink';
});
console.log(drinkOrders); // {    "name": "Drink", "price": 3.22    }

drinkOrders = cart.filter (obj => obj.name === 'Drink');
console.log(drinkOrders); // {    "name": "Drink", "price": 3.22    }

// Примечание:
// есть метод, схожий с filter, но который возвращает один объект, а не массив
// это метод find ()
// Пример:
drinkOrders = cart.find(x => x.name === 'Drink');
console.log(drinkOrders); // {    "name": "Drink", "price": 3.22    }

// Оба вариант поиска пирога больше 5 сработают,
// но первый способ гораздо предпочтительнее
let pieOrdersWithOverTenDollars = cart.filter(x => x.name === 'Pie' && x.price > 5);
console.log(pieOrdersWithOverTenDollars);
pieOrdersWithOverTenDollars = cart.filter(x => x.name === 'Pie').filter(x => x.price > 5);
console.log(pieOrdersWithOverTenDollars);

// parseInt(x.price) за парсИнтить только числа. отбросив доллары, рубли и тд

// метод map = перебирает массив, возвращая новый массив

const data = [
    { id: 1, name: "Soda", price: 7.12, cost: 1.04, size: "4oz", },
    { id: 2, name: "Beer", price: 6.50, cost: 2.45, size: "8oz" },
    { id: 3, name: "Margarita", price: 12.99, cost: 4.45, size: "12oz" }
];

let drinkMenu = data.map(x => ({ name: x.name, price: x.price, size: x.size }));
console.log(drinkMenu);

console.log(drinkMenu.sort((a,b) => a.price - b.price));