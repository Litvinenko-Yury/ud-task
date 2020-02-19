
'use strict';

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
    expenses: {}, // объект
    optionalExpenses: {},  // объект
    income: [], // массив; доп.доход, который можно получить.
    savings: true,
    chooseExpenses: function () { // метод объекта, т.е. функция, опрашивающая пользователя, с проверкой введенных данных
        for (let i = 0; i < 2; i++) {
            //console.log("i: " + i);

            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = Number(prompt("Во сколько обойдется?", ""));
            //console.log("статья расходов: " + a + ", " + typeof (a));
            //console.log("сумма: " + b + " , это " + typeof (b));

            /*проверка введенных данных на разные условия*/
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                //console.log("done!");
                appData.expenses[a] = b; //пара ключ-значение
            } else { //если проверка не пройдена, вернуться к вопросу заново
                //console.log("bad result...");
                i--;
            }
        }
    },

    detectDayBudget: function () { // метод объекта, т.е. функция, вычисляющая дневной бюджет 
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    calcLevel: function () { // метод объекта, т.е. функция, вычисляющая уровень достатка человека в зависимости ежедневного бюджета
        if (appData.moneyPerDay < 100) {
            console.log('минимальный уровень');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('средний уровень');
        } else if (appData.moneyPerDay > 2000) {
            console.log('высокий уровень');
        } else {
            console.log('произошла ошибка');
        }
    },

    checkSavings: function () { // метод объекта, т.е. функция, вычисляющая накопления с депозита, если он есть (депозит)
        if (appData.savings == true) {
            let save = Number(prompt("Какова сумма накоплений?")),
                persent = Number(prompt("Под какой процент?"));

            appData.monthIncome = save / 100 / 12 * persent;
            alert("Доход в месяц с депозита: " + appData.monthIncome.toFixed(2));
        }
    },

    chooseOptExpenses: function () { // метод объекта, т.е. функция, вычисляющая ...
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },

    chooseIncome: function () {

        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет доп.доход? (Перечислите через запятую)", ""); // здесь получаем от пользователя "строку";
            if (typeof (items) === 'string' && items != "" && typeof (items) != null) {
                appData.income = items.split(",");
            } else {  //если проверка не пройдена, вернуться к вопросу заново
                i--;
            }
        }

        for (let j = 0; j < 1; j++) {
            let items_add = prompt("Может что-то еще?", ""); // получаем от пользователя строку
            if (typeof (items_add) === 'string' && items_add != "" && typeof (items_add) != null) {
                appData.income.push(items_add); // добавление в массив income элемента в конец массива;
            } else {  //если проверка не пройдена, вернуться к вопросу заново
                j--;
            }
        }

        appData.income.sort(); // сортировка элементов массива income, как строчных;

        appData.income.forEach(function (item, i) {
            console.log(i, + ": " + item);
        });

        for (let key in appData) {
            console.log("Наша программа включает в себя данные: " + key)
        }
    }
};
