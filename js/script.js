let money = 900000; //доход за месяц
let income = '500000'; // дополнительный доход
let addExpenses = ('Бензин, интернет, Ком. услуги'); // доп. расходы бензин, интернет, ком. услуги
let deposit = true; //булевое значение
let mission = 5000000; //накопление суммы
let period = 6; //период
let budgetDay = money / 30; //доход за день

console.log(money);
console.log(income);
console.log(deposit);
console.log(addExpenses.length);
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей');
console.log((addExpenses.toLowerCase()).split(', '));
console.log (budgetDay);