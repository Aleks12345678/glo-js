'use strict';

let money = Number(prompt('Ваш месячный доход?'));
// let income = '500000'; // дополнительный доход
let addExpenses = Number(prompt('Перечислите возможные расходы за рассчитываемый период через запятую')); // доп. расходы бензин, интернет, ком. услуги
let deposit = confirm('Есть ли у вас депозит в банке?'); //булевое значение
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 50000; //накопление суммы
let period = 6; //период



 
console.log(money);
//console.log(income);
console.log(deposit);
console.log(expenses1);
console.log(expenses2);
console.log(amount1);
console.log(amount2);
let budgetMount = money - ((amount1)+(amount2));
let budgetDay = budgetMount / 30; //доход за день
 //console.log(addExpenses.length);
 console.log('Период равен', period, 'месяцев');
 console.log('Цель заработать', mission, 'рублей');
// console.log(Number((addExpenses.toLowerCase()).split(', ')));
console.log('Бюджет на месяц', (Number(budgetMount)), 'рублей');
//console.log('Бюджет на день', (Math.floor(budgetDay)), 'рублей');
console.log ('Цель будет достигнута за', (Math.ceil(mission / budgetMount)), 'месяцев');

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (600 <= budgetDay >= 1200) {
    console.log('У вас средний уровень дохода');
} else if (0 === budgetDay <= 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}






