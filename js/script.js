'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let money,
    start = function() {
        do{
            money = prompt('Ваш месячный доход?');
        }
        while((isNaN(money) || money.trim() === '' || money === null))
    };
    start();

let appData = {
    income:{},
    addIncome: [],
    expenses:{},
    addExpenses:[],
    deposit: false,
    mission:50000,
    period:6,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммунальные, бензин, интернет');
        appData.addExpenses = addExpenses.toLowerCase().split(',');   
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введите обязательную статью расходов?', 'бензин')] =   +prompt ('Восколько это обойдется?', 2000);
        }
    },
    budget:money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth:0
    
};

    appData.asking();

    for (let key in appData.expenses){
        appData.expensesMonth += appData.expenses[key];
    }
    console.log('Расходы за месяц: ', appData.expensesMonth, 'рублей'); 

                        //считаем накопления за месяц
    appData.getBudget = () => {
        return money - appData.expensesMonth;
    };

    //присвоение результата вызова функции getAccumulatedMonth
    appData.budgetMonth = appData.getBudget; 
   
    //доход за день
    appData.budgetDay = appData.budgetMonth() / 30;

    //за какой период достигнута цель
    appData.getTargetMonth  = () => {
        return appData.mission / appData.budgetMonth(); 
    }
    if (appData.getTargetMonth() >= 0) {
        console.log('Цель будет достигнута за :', Math.ceil(appData.getTargetMonth()), 'месяца(ев)');   
    }else {
    console.log('Цель не будет достигнута');
    }
    // уровень дохода
    appData.getStatusIncome = () => {
        if (appData.budgetDay >= 1200) {
            console.log('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600) {
            console.log('У вас средний уровень дохода');
        } else if (appData.budgetDay >= 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else {
            console.log('Что то пошло не так');
        }
    }
    appData.getStatusIncome();

    for (let key in appData){
        console.log('Наша программа включает в себя данные: свойство: ' + key + ' значение: '+ appData[key]);
        
    }
    