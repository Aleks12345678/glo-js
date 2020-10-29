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
    percentDeposit:0,
    moneyDeposit:0,
    mission:50000,
    period:6,
    asking: function(){

    if(confirm('Есть ли у Вас дополнительный источник заработка?')) {
        let itemIncome, 
            start3 = function() {
                do {
                    itemIncome = prompt('Какой у вас есть дополнительный заработок?');
                }
                while((!isNaN(itemIncome) || itemIncome.trim() === '' || itemIncome === null))
            };
            start3();
        // let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
        // let cashIncome = +prompt('Какую сумму вы зарабатываете на этом в месяц?', 10000);
        let cashIncome, 
            start2 = function() {
                do {
                    cashIncome = prompt('Какую сумму вы зарабатываете на этом в месяц?');
                }
                while((isNaN(cashIncome) || cashIncome.trim() === '' || cashIncome === null))
            };
            start2();
        appData.income[itemIncome] = cashIncome;
        
    }
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммунальные, бензин, интернет');
        appData.addExpenses = addExpenses.toLowerCase().split(',');   
        // appData.deposit = confirm('Есть ли у вас депозит в банке?');

        

        for (let i = 0; i < 2; i++) {
            let question,
                start4 = function() {
                    do {
                        question = prompt('Введите обязательную статью расходов?');
                    }
                    while((!isNaN(question) || question.trim() === '' || question === null))
                };
                start4();
                let answer,
                start5 = function() {
                    do {
                        answer = prompt('Восколько это обойдется?');
                    }
                    while((isNaN(answer) || answer.trim() === '' || answer === null))
                };
                start5();
            appData.expenses[question] = answer;
        }

        // for (let i = 0; i < 2; i++) {
        //     appData.expenses[prompt('Введите обязательную статью расходов?', 'бензин')] =   +prompt ('Восколько это обойдется?', 2000);
        // }
    },
    budget:money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth:0,
    getExpensesMonth:function () {
        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },
    //считаем накопления за месяц(за день)
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth; 
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
       //за какой период достигнута цель
    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth; 
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },
    getInfoDeposit: function(){
        if(confirm('Есть ли у вас депозит в банке?')){
            appData.percentDeposit = function(){
                do {
                    appData.percentDeposit = prompt('Какой годовой процент?');
                }
                while((isNaN(appData.percentDeposit) || appData.percentDeposit.trim() === '' || appData.percentDeposit === null))
            };
            appData.percentDeposit();
            appData.moneyDeposit = function(){
                do {
                    appData.moneyDeposit = prompt('Какая сумма заложена?');
                }
                while((isNaN(appData.moneyDeposit) || appData.moneyDeposit.trim() === '' || appData.moneyDeposit === null))
            };
            appData.moneyDeposit();
        }

    },
    // getInfoDeposit: function(){
    //     if(appData.deposit){
    //         appData.percentDeposit = prompt('Какой годовой процент?', '10');
    //         appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
    //     }
        
    // },
    calcSaveMoney: function(){
        return appData.budgetMonth * appData.period;
    },
    ucFirst:function (str) {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
      },

};

    
    appData.asking();
    appData.getInfoDeposit();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getStatusIncome();
    

    console.log('Расходы за месяц: ', appData.expensesMonth, 'рублей'); 
 
    if (appData.getTargetMonth() > 0) {
        console.log('Цель будет достигнута за :' + Math.ceil(appData.getTargetMonth()) + ' месяца(ев)');   
    }else {
    console.log('Цель не будет достигнута');
    }

    console.log(appData.getStatusIncome ());

    for (let key in appData){
        console.log('Наша программа включает в себя данные: свойство: ' + key + ' значение: '+ appData[key]);
        
    }
    for (let key in appData.addExpenses) {
        // appData.addExpenses[key]; 
        // appData.ucFirst(appData.addExpenses[key]);
        appData.ucFirst(appData.addExpenses[key].trim());
        appData.addExpenses[key] = appData.ucFirst(appData.addExpenses[key].trim());
      }

     
      

      console.log(appData.addExpenses.join(', '));
    // console.log(appData.addExpenses );
   