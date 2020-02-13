'use strict';

/*===2===*/
let money = Number(prompt("Ваш бюджет на месяц?", "")),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-02");
console.log("money: " + money + " , это " + typeof (money));
console.log("time: " + time);


/*===3===*/
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


/*===4===*/
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = Number(prompt("Во сколько обойдется?", ""));
    console.log("сумма: " + b + " , это " + typeof (b));

    /*проверка введенных данных на разные условия*/
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.lenght < 50) {
        console.log("done");
        appData.expenses[a] = b; //пара ключ-значение
    } else {
        //если проверка не пройдена, вернуться к вопросу заново
        console.log("bad result");
        i--;
    }
}

appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

/*в зависимости ежедневного бюджета выводим уровень достатка человека*/
if (appData.moneyPerDay < 100) {
    console.log('минимальный уровень');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('средний уровень');
} else if (appData.moneyPerDay > 2000) {
    console.log('высокий уровень');
} else {
    console.log('произошла ошибка');
}