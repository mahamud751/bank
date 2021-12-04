function getInput(inputID) {
    const input = document.getElementById(inputID);
    const inputText = input.value;
    const inputTag = parseFloat(inputText);
    input.value = '';
    return inputTag;
}

function getUpdateInput(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.innerText;
    const inputTag = parseFloat(inputText);
    return inputTag;
}

function getUpdateInputBalance(updateInput, tk) {
    const previousBalance = getUpdateInput(updateInput);
    const newBalance = previousBalance + tk;
    document.getElementById(updateInput).innerText = newBalance;
}

function updateTotal(tk, add) {
    const previousBalance = getUpdateInput('balance-total');
    let newBalance;
    if (add == true) {
        newBalance = previousBalance + tk;
    }
    else {
        newBalance = previousBalance - tk
    }
    document.getElementById('balance-total').innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('3333');
    const amount = getInput('deposit-input');
    // console.log(amount);
    if (amount > 0) {
        getUpdateInputBalance('deposit-total', amount)
        updateTotal(amount, true);
    }
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('3333');
    const amount = getInput('withdraw-input');
    // console.log(amount);
    const balance = getUpdateInput('balance-total');
    if (amount > 0 && amount < balance) {
        getUpdateInputBalance('withdraw-total', amount);
        updateTotal(amount, false);
    }
})
function getInput(inputID) {
    const input = document.getElementById(inputID);
    const inputText = input.value;
    const inputTag = parseFloat(inputText);
    input.value = '';
    return inputTag;
}

function getUpdateInput(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.innerText;
    const inputTag = parseFloat(inputText);
    return inputTag;
}

function getUpdateInputBalance(updateInput, tk) {
    const previousBalance = getUpdateInput(updateInput);
    const newBalance = previousBalance + tk;
    document.getElementById(updateInput).innerText = newBalance;
}

function updateTotal(tk, add) {
    const previousBalance = getUpdateInput('balance-total');
    let newBalance;
    if (add == true) {
        newBalance = previousBalance + tk;
    }
    else {
        newBalance = previousBalance - tk
    }
    document.getElementById('balance-total').innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('3333');
    const amount = getInput('deposit-input');
    // console.log(amount);
    if (amount > 0) {
        getUpdateInputBalance('deposit-total', amount)
        updateTotal(amount, true);
    }
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('3333');
    const amount = getInput('withdraw-input');
    // console.log(amount);
    const balance = getUpdateInput('balance-total');
    if (amount > 0 && amount < balance) {
        getUpdateInputBalance('withdraw-total', amount);
        updateTotal(amount, false);
    }
})