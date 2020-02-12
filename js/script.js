'use strict';

/*===2===*/
let money = prompt("Ваш бюджет на месяц?", "200");
console.log("money: " + money);

let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-02");
console.log("time: " + time);


/*===3===*/
let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


/*===4===*/
let question1_a = prompt("Введите обязательную статью расходов в этом месяце", "еда"),
    question1_b = Number(prompt("Во сколько обойдется?", "600")),
    question2_a = prompt("Введите обязательную статью расходов в этом месяце", "связь"),
    question2_b = Number(prompt("Во сколько обойдется?", "60"));
console.log(typeof (question1_b));
console.log(typeof (question2_b));

appData.expenses[question1_a] = question1_b;
appData.expenses[question2_a] = question2_b;

let totalCost = (question1_b + question2_b) / 30;
console.log("бюджет на 1 день: " + totalCost);
