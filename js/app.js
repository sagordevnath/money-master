function getIncomeTotal () {
    const incomeInput = document.getElementById ('income-input');
    const incomeTotal = parseFloat (incomeInput.value);
    
    if (incomeTotal > 0 || incomeTotal == 'number') {
        return incomeTotal;
    }
    else {
        return alert ('please enter');
        
    }
    
    // return incomeTotal;
}

function getExpensesTotal () {
    const foodInput = document.getElementById ('food-input');
    const foodTotal = parseFloat (foodInput.value);
    const rentInput = document.getElementById ('rent-input');
    const rentTotal = parseFloat (rentInput.value);
    const clothesInput = document.getElementById ('clothes-input');
    const clothesTotal = parseFloat (clothesInput.value);
    
    const expensesTotal = foodTotal + rentTotal + clothesTotal;
    return expensesTotal;  
   
        
}

document.getElementById ('calculate-btn').addEventListener ('click', function (){
    
    
    const expensesField = document.getElementById ('expenses-field');
    expensesField.innerText = getExpensesTotal ();

    const balanceField = document.getElementById ('balance-field');
    const balanceTotal = getIncomeTotal () - getExpensesTotal ();
    balanceField.innerText = balanceTotal;
    
});

document.getElementById ("save-btn").addEventListener ('click', function () {
    const savingsPercentageInput = document.getElementById ('savings-percentage');
    const savingsPercentageValue = parseFloat(savingsPercentageInput.value);
    const savingsPercentage = savingsPercentageValue / 100;


    const savingsAmount = document.getElementById ('savings-amount');
    const savingsTotal = getIncomeTotal () * savingsPercentage;
    savingsAmount.innerText = savingsTotal;   


    const balanceField = document.getElementById ('balance-field');
    const balanceTotal = getIncomeTotal () - getExpensesTotal ();
    balanceField.innerText = balanceTotal;

    if (savingsTotal > balanceTotal) { 
        alert ('Insufficient balance for savings');
        savingsAmount.innerText = '';
        remainingBalance = ''   ;
    }


    const remainingBalance = document.getElementById ('remaining-balance');
    remainingBalance.innerText = balanceTotal - savingsTotal;


})