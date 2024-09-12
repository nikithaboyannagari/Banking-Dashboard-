
// Initialize balance
// Initial balance set to $1,000
let balance = 1000;

// Function to update balance display
function updateBalance(amount) {
    const balanceDisplay = document.getElementById('balance');
    balanceDisplay.textContent = `Current Balance: $${amount}`;
}

// Deposit function
function depositAmount() {
    const depositInput = document.getElementById('deposit');
    const depositAmount = parseFloat(depositInput.value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount.');
    } else {
        balance += depositAmount;
        updateBalance(balance);
    }

    // Clear input field after deposit
    depositInput.value = '';
}

// Withdraw function
function withdrawAmount() {
    const withdrawalInput = document.getElementById('withdrawal');
    const withdrawalAmount = parseFloat(withdrawalInput.value);

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert('Please enter a valid withdrawal amount.');
    } else if (withdrawalAmount > balance) {
        alert('Insufficient funds. Withdrawal amount exceeds current balance.');
    } else {
        balance -= withdrawalAmount;
        updateBalance(balance);
    }

    // Clear input field after withdrawal
    withdrawalInput.value = '';
}

// Event listeners for deposit and withdraw buttons
document.getElementById('depositButton').addEventListener('click', depositAmount);
document.getElementById('withdrawButton').addEventListener('click', withdrawAmount);
document.getElementById('deposit').addEventListener('keypress', (e)=>{if(e.key==="Enter"){depositAmount()}});
document.getElementById('withdrawal').addEventListener('keypress',(e)=>{if(e.key==="Enter"){ withdrawAmount()}});

// Initial call to display the balance
updateBalance(balance);
