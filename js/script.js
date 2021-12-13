// 1
const name = 'Генератор защитного поля';
const price = 1000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов` )

// 2
const total2 = 100;
const ordered = 500;
if (ordered > total2) {
    console.log('На складе недостаточно товаров')
} else {
    console.log('Заказ оформлен, с вами свяжется менеджер')
}

// 3
const ADMIN_PASSWORD = '12345';
let message = prompt('Введите пароль');
if (message === null){
    alert('Отменено пользователем')
} else if (message === ADMIN_PASSWORD) {
    alert('Добро пожаловать')
} else {
    alert('Доступ запрещен, неверный пароль!')
}

// 4
const credits = 23580;
const pricePerDroid = 3000;
let message4 = prompt('Какое количество дроидов Вы хотите купить?');
const totalPrice = message4 * pricePerDroid
if (message4 === null){
    alert('Отменено пользователем')
} else if (totalPrice > credits) {
    alert('Недостаточно средств на счету!')
} else {
    alert(`Вы купили ${message4} дроидов, на счету осталось ${credits - totalPrice}`)
}

// 5
let message5 = prompt('Укажите страну');
let cost;
switch (message5.toLowerCase()) {
    case 'китай':
        cost = 100;
        break;

    case 'чили':
        cost = 250;
        break;

    case 'австралия':
        cost = 170;
        break;

    case 'индия':
        cost = 80;
        break;

    case 'ямайка':
        cost = 120;
        break;

    default:
        alert ('В вашей стране доставка не доступна')
}
alert (cost);


// 6
let input = prompt('Введите число');
let total6 = 0;

for (let i = 0; i < Infinity; i++) {
    if (input === null) {
        break;
    }
    input = prompt('Введите число');

    if (input !== null && input.length) {
        let inputNumber = Number(input)

        if (Number.isNaN(inputNumber)) {
            alert('Было введено не число, попробуйте еще раз');
        } else {
            total6 += Number(input)
        }
    }
    } alert(`Общая сумма чисел равна ${total6}`)



