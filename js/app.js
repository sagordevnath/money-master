document.getElementById ('calculate-btn').addEventListener ('click', function () {
    const incomeInput = document.getElementById ('income-input');
    const incomeTotal = parseFloat (incomeInput.value);
    
    const foodInput = document.getElementById ('food-input');
    const foodTotal = parseFloat (foodInput.value);
    const rentInput = document.getElementById ('rent-input');
    const rentTotal = parseFloat (rentInput.value);
    const clothesInput = document.getElementById ('clothes-input');
    const clothesTotal = parseFloat (clothesInput.value);
    
    const expensesTotal = foodTotal + rentTotal + clothesTotal;
    
    const expensesField = document.getElementById ('expenses-field');
    expensesField.innerText = expensesTotal;

    const balanceField = document.getElementById ('balance-field');
    const balanceTotal = incomeTotal - expensesTotal;
    balanceField.innerText = balanceTotal;
});

document.getElementById ("save-btn").addEventListener ('click', function () {
    const savingsPercentageInput = document.getElementById ('savings-percentage');
    const savingsPercentageValue = parseFloat(savingsPercentageInput.value);
    const savingsPercentage = savingsPercentageValue / 100;
    
    const incomeInput = document.getElementById ('income-input');
    const incomeTotal = parseFloat(incomeInput.value);    

    const savingsAmount = document.getElementById ('savings-amount');
    const savingsTotal = incomeTotal * savingsPercentage;
    savingsAmount.innerText = savingsTotal;

    const balanceField = document.getElementById ('balance-field');
    const balanceTotal = incomeTotal - expensesTotal;
    balanceField.innerText = balanceTotal;

    const remainingBalance = document.getElementById ('remaining-balance');
    remainingBalance.innerText = balanceTotal - savingsTotal;


})