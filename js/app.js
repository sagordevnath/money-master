// function to get the total income
function getIncomeTotal () {
    const incomeInput = document.getElementById ('income-input');
    const incomeTotal = parseFloat (incomeInput.value);
    
    // error handling
    if (incomeTotal > 0 || incomeTotal == 'number') {
        return incomeTotal;
    }
    else {
        alert ('Please enter a valid number!');        
    }
}

// function to get the total expenses
function getExpensesTotal () {
    const foodInput = document.getElementById ('food-input');
    const foodTotal = parseFloat (foodInput.value);
    const rentInput = document.getElementById ('rent-input');
    const rentTotal = parseFloat (rentInput.value);
    const clothesInput = document.getElementById ('clothes-input');
    const clothesTotal = parseFloat (clothesInput.value);    

    // total expenses
    const expensesTotal = foodTotal + rentTotal + clothesTotal;
    return expensesTotal;        
}

    // handeling calculate button
document.getElementById ('calculate-btn').addEventListener ('click', function (){    
    const expensesField = document.getElementById ('expenses-field');
    expensesField.innerText = getExpensesTotal ();

    // balance total
    const balanceField = document.getElementById ('balance-field');
    const balanceTotal = getIncomeTotal () - getExpensesTotal ();
    balanceField.innerText = balanceTotal;

    // error handeling
    if (getIncomeTotal () < getExpensesTotal () ) {
        alert ('Sorry! You are in debt..');
        balanceField.innerText = '';
    }
    
});

document.getElementById ("save-btn").addEventListener ('click', function () {
    const savingsPercentageInput = document.getElementById ('savings-percentage');
    const savingsPercentageValue = parseFloat(savingsPercentageInput.value);
    const savingsPercentage = savingsPercentageValue / 100;

    // savings total
    const savingsAmount = document.getElementById ('savings-amount');
    const savingsTotal = getIncomeTotal () * savingsPercentage;
    savingsAmount.innerText = savingsTotal;   

    // balance total
    const balanceField = document.getElementById ('balance-field');
    const balanceTotal = getIncomeTotal () - getExpensesTotal ();
    balanceField.innerText = balanceTotal;    

    // remaining balance
    const remainingBalance = document.getElementById ('remaining-balance');
    remainingBalance.innerText = balanceTotal - savingsTotal;

    // error handling
    if (savingsTotal > balanceTotal) { 
        alert ('Insufficient balance for savings!');
        savingsAmount.innerText = '';
        remainingBalance.innerText = ''   ;
    }

})