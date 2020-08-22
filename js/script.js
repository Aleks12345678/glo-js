'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,  
    income = 'Фриланс', // дополнительный доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммунальные, бензин, интернет'), // доп. расходы бензин, интернет, ком. услуги
    deposit = confirm('Есть ли у вас депозит в банке?'), //булевое значение
    // expenses1 = prompt('Введите обязательную статью расходов?', 'бензин'),
    // amount1 = +prompt('Во сколько это обойдется?', 1000),
    // expenses2 = prompt('Введите обязательную статью расходов?', 'интернет'),
    // amount2 = +prompt('Во сколько это обойдется?', 3000),
    mission = 50000, //накопление суммы
    period = 6; //период

    let start = function() {
        do{
            money = prompt('Ваш месячный доход?');
        }
        while(!isNumber(money))
    };
    // (isNaN(money) || money.trim() === '' || money === null)
    start();
    // вывод типа значений
    function showTypeOf() {
        console.log('money :', typeof (money));
        console.log('income :', typeof (income));
        console.log('deposit :', typeof (deposit));
    }
    showTypeOf();

    //массив addExpenses
    console.log(addExpenses.split(','));


let expenses1, expenses2;

                        // сумма обязательных платежей
let getExpensesMonth = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', 'бензин');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?', 'бензин');
        }
        sum += +prompt ('Восколько это обойдется?', 2000);
        
    }
    //проверка что введённые данные являются числом
    console.log( 'Введённые данные являются числом', isFinite(sum) );

    console.log(sum);
    return sum;
};
let expensesAmount = getExpensesMonth();
    console.log('сумма обязательных расходов: ', expensesAmount); 


                        //считаем накопления за месяц
function getAccumulatedMonth() {
    return money - expensesAmount;
};
    //присвоение результата вызова функции getAccumulatedMonth
    let accumulatedMonth = getAccumulatedMonth(); 
    console.log('Накопления за месяц: ', accumulatedMonth); 

                        //за какой период достигнута цель
function getTargetMonth() {
    return mission / accumulatedMonth;

}

    if (getTargetMonth() >= 0) {
        console.log('Цель будет достигнута за :', Math.ceil(getTargetMonth()), 'месяцев');   
    }else {
    console.log('Цель не будет достигнута');
    }
     

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

