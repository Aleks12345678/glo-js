
'use strict';

let start = document.getElementById('start');

let btnPlusIncome = document.getElementsByTagName('button')[0];
let btnPlusExpenses = document.getElementsByTagName('button')[1];

let depositCheck = document.querySelector('#deposit-check');

let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];

let salaryAmount = document.querySelector('input.salary-amount');
let incomeTitle = document.querySelector('input.income-title');
let expensesTitle = document.querySelector('input.expenses-title');
// let expensesAmount = document.querySelector('input.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
let additionalExpensesItem = document.querySelector('input.additional_expenses-item');
let targetAmount = document.querySelector('input.target-amount');
let periodSelect = document.querySelector('input.period-select');
let incomeItem = document.querySelectorAll('.income-items');
// let periodAmount = document.querySelector('.period-amount').innerHTML; 

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    budget:0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth:0,
    income:{},
    incomeMounth:0,
    addIncome: [],
    expenses:{},
    addExpenses:[],
    deposit: false,
    percentDeposit:0,
    moneyDeposit:0,
    start: function() {
        
        appData.budget = +salaryAmount.value;
        
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.calcInput();
        appData.calcPeriod();

        appData.showResult();
    

    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value =  appData.addIncome.join(', ');
        targetMonthValue.value =  Math.ceil(appData.getTargetMonth());

    },
    addExpensesBlock: function(){

        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpenses);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            btnPlusExpenses.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
           let itemExpenses = item.querySelector('.expenses-title').value;
            let cachExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cachExpenses !== ''){
                appData.expenses[itemExpenses] = cachExpenses;
            }
        });
    },
    addIncomeBlock: function(){
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncome);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            btnPlusIncome.style.display = 'none';
        }
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cachIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cachIncome !== ''){
                appData.income[itemIncome] = cachIncome;
            }
        });

        for(let key in appData.income){
            appData.incomeMounth += +appData.income[key];
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(', ');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },

   
    getExpensesMonth:function () {
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    //считаем накопления за месяц(за день)
    getBudget: function () {
        appData.budgetMonth = appData.budget +appData.incomeMounth - appData.expensesMonth; 
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
       //за какой период достигнута цель
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth; 
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

    calcPeriod: function(){
        let periodAm = Number(document.querySelector('.period-amount').innerHTML);

         incomePeriodValue.value = appData.budgetMonth * periodAm;


    },

    calcInput:function(){
        let halfBox = document.querySelector('.period-amount');
        let slideCalc = periodSelect.value;
        halfBox.innerHTML = slideCalc;
    },

    ucFirst:function (str) {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
      },
      
};

    start.addEventListener('click', appData.start);

    function codeAddress() {
        if(salaryAmount.value === ''){
            start.setAttribute('disabled', 'disabled');
        } 
    }
    window.onload = codeAddress;

    salaryAmount.addEventListener('change', function(){
        if(salaryAmount.value === ''){
            start.setAttribute('disabled', 'disabled');
        } else {
            start.removeAttribute('disabled', 'disabled');
        }
    });

    btnPlusIncome.addEventListener('click', appData.addIncomeBlock);
    btnPlusExpenses.addEventListener('click', appData.addExpensesBlock);
    periodSelect.addEventListener('input', appData.calcInput);
    periodSelect.addEventListener('input', appData.calcPeriod);
    
    
   

    for (let key in appData.addExpenses) {
        appData.ucFirst(appData.addExpenses[key].trim());
        appData.addExpenses[key] = appData.ucFirst(appData.addExpenses[key].trim());
      }


     










