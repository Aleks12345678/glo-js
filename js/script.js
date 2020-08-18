'use strict';

let money = +prompt('Ваш месячный доход?', 15000),
    income = 'Фриланс', // дополнительный доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммунальные, бензин, интернет'), // доп. расходы бензин, интернет, ком. услуги
    deposit = confirm('Есть ли у вас депозит в банке?'), //булевое значение
    expenses1 = prompt('Введите обязательную статью расходов?', 'бензин'),
    amount1 = +prompt('Во сколько это обойдется?', 1000),
    expenses2 = prompt('Введите обязательную статью расходов?', 'интернет'),
    amount2 = +prompt('Во сколько это обойдется?', 3000),
    mission = 50000, //накопление суммы
    period = 6; //период

    // вывод типа значений
    function showTypeOf() {
        console.log('money :', typeof (money));
        console.log('income :', typeof (income));
        console.log('deposit :', typeof (deposit));
    }
    showTypeOf();

    //массив addExpenses
    console.log(addExpenses.split());




                        // сумма обязательных платежей
function getExpensesMonth() {
    return amount1 + amount2;
}
    console.log('сумма обязательных расходов: ', getExpensesMonth()); 

                        //считаем накопления за месяц
function getAccumulatedMonth() {
    return money - getExpensesMonth();
};
    //присвоение результата вызова функции getAccumulatedMonth
    let accumulatedMonth = getAccumulatedMonth(); 
    console.log('Накопления за месяц: ', accumulatedMonth); 

                        //за какой период достигнута цель
function getTargetMonth() {
    return mission / accumulatedMonth;
}
    console.log('Цель будет достигнута за :', Math.ceil(getTargetMonth()), 'месяцев'); 

                    //доход за день
    let budgetDay = accumulatedMonth / 30;

    console.log('Доход за день составляет:', Math.floor(budgetDay), 'рублей');

    function getStatusIncome() {
        if (budgetDay >= 1200) {
            console.log('У вас высокий уровень дохода');
        } else if (budgetDay >= 600) {
            console.log('У вас средний уровень дохода');
        } else if (budgetDay >= 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else {
            console.log('Что то пошло не так');
        }
    }
    getStatusIncome();

