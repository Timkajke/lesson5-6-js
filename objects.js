// Способы объявления объекта
// Вариант 1
let student = new Object();
student['Name'] = 'Vasya';
student['Age'] = '22';
console.log(student);

// Вариант 2
let firm = {};
firm.CompanyName = 'Audi';
firm.Address = 'France';
firm['Phone Number'] = '+7123423423452';

// Вариант 3
const novosibirsk = {
    'population' : 1500000,
    'mayor' : {
        'current' : 'Lokot',
        'last' : 'Familiya'
    }
};

console.log(novosibirsk);
delete novosibirsk['mayor']; // удаляем ключ значение из объекта
console.log(novosibirsk); // {    "population": 1500000    }

// Проверка на существование ключа
const exists = 'mayor' in novosibirsk;
console.log(exists ? ('Exists') : ('Not exists'));

console.log(novosibirsk.mayor.last);