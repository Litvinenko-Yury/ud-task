//'use strict';

/*объявляем глобальные переменные*/
let money,
    time;

/*функция, опрашивающая пользователя, с проверкой введенных данных*/
function start() {
    money = Number(prompt("Ваш бюджет на месяц?", ""));
    console.log("money: " + money + ", " + typeof (money));

    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-02");
    console.log("time: " + time);

    //проверка данных money, вводимых пользователем:
    // - на наличие введенных данных, т.е. строка не пустая, money == "";
    // - то, что введено - цифры,  isNaN();
    //- не мог отменить этот prompt(), money == null;
    while (isNaN(money) || money == "" || money == null) {
        money = Number(prompt("Ваш бюджет на месяц?", ""));
    }
}
start(); // вызов функции


/*===3===*/
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


/*функция, опрашивающая пользователя, с проверкой введенных данных*/
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        console.log("i: " + i);

        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = Number(prompt("Во сколько обойдется?", ""));
        console.log("статья расходов: " + a + ", " + typeof (a));
        console.log("сумма: " + b + " , это " + typeof (b));

        /*проверка введенных данных на разные условия*/
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done!");
            appData.expenses[a] = b; //пара ключ-значение
        } else {
            //если проверка не пройдена, вернуться к вопросу заново
            console.log("bad result...");
            i--;
        }
    }
}
chooseExpenses(); // вызов функции


appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

/*в зависимости ежедневного бюджета выводим уровень достатка человека*/
function calcLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('минимальный уровень');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('средний уровень');
    } else if (appData.moneyPerDay > 2000) {
        console.log('высокий уровень');
    } else {
        console.log('произошла ошибка');
    }
}
calcLevel();

/*========================================*/
/*рассчет накопления с депозита, если он есть*/
function checkSavings() {
    if (appData.savings == true) {
        let save = Number(prompt("Какова сумма накоплений?")),
            persent = Number(prompt("Под какой процент?"));

        appData.monthIncome = save / 100 / 12 * persent;
        alert("Доход в месяц с депозита: " + appData.monthIncome.toFixed(2));
    }
}
checkSavings();