// income inputs - доходы
const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra_1 = document.getElementById('income-extra-1'),
      incomeExtra_2 = document.getElementById('income-extra-2');

// costs inputs - расходы
const costsFlat = document.getElementById('costs-flat'),
      costsHouseServices = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transport'),
      costsCredit = document.getElementById('costs-credit');

// total inputs
const totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

// moneybox - копилка
const MoneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation'),
      spendMoney = document.getElementById('spend');

let accumulation = 0;
let totalPercents = 0;

// Получаем все input при создании псевдо-массива

const inputs = document.querySelectorAll('.input');
// Выводим inputs в консоль

console.log(inputs);
// Пробегаемся по input с помощью цикла for

for (input of inputs){
    console.log(input);
    input.addEventListener('input', () => {
        console.log('run');
        countingAvailableMoney()
        calculationPercents()
    });
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
  const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra_1) + strToNum(incomeExtra_2);
  console.log(typeof incomeSalary.value + incomeFreelance.value);
  console.log(totalPerMonth);
  const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);
  console.log(totalCosts);
  totalMonth = totalPerMonth - totalCosts;
  console.log(totalMonth)
  totalMonthInput.value = totalMonth;
}

MoneyBoxRange.addEventListener('input', e => {
    const totalPercentElement = document.getElementById('total-precents');
    totalPercents = e.target.value;
    totalPercentElement.innerHTML = totalPercents;
    calculationPercents()
})

const calculationPercents = () => {
    accumulation = ((totalMonth * totalPercents) / 100).toFixed();
    console.log(totalMonth);
    console.log(accumulation);
    accumulationInput.value = accumulation;
    spendMoney.value = totalMonth - accumulation;
    totalDay = (spendMoney.value / 30).toFixed();
    totalDayInput.value = totalDay;
    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}