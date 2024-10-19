// Script to manage account creation, deposits, withdrawals, and transfers
let accounts = {};

function updateBalance() {
    const balanceElement = document.getElementById('account-balance');
    if (accounts['user']) {
        balanceElement.textContent = `Balance: $${accounts['user'].balance.toFixed(2)}`;
    } else {
        balanceElement.textContent = 'Balance: $0.00';
    }
}

// Create Account
document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountName = document.getElementById('account-name').value;
    const initialDeposit = parseFloat(document.getElementById('initial-deposit').value);

    // Validate account name and initial deposit
    if (!accountName) {
        alert("Please enter an account name.");
        return; // Exit if account name is empty
    }

    if (isNaN(initialDeposit) || initialDeposit < 1000) {
        alert("Initial deposit must be at least $1000.");
        return; // Exit if the initial deposit is less than $1000
    }

    // Create a new account if validation passes
    accounts['user'] = {
        name: accountName,
        balance: initialDeposit
    };

    // Show success message and update balance
    document.getElementById('account-success').classList.remove('hidden');
    updateBalance();
});

// Function to update the displayed balance
function updateBalance() {
    const balanceDisplay = document.getElementById('account-balance');
    balanceDisplay.textContent = accounts['user'].balance.toFixed(2); // Update balance display
}

// Deposit Money
document.getElementById('deposit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    
    if (depositAmount > 0 && accounts['user']) {
        accounts['user'].balance += depositAmount;
        document.getElementById('deposit-success').classList.remove('hidden');
        updateBalance();
    }
});

// Withdraw Money
document.getElementById('withdraw-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);

    // Validate withdraw amount
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid withdrawal amount greater than zero.");
        return; // Exit if the withdrawal amount is invalid
    }

    if (withdrawAmount > accounts['user'].balance) {
        alert("Withdrawal amount cannot exceed your current balance.");
        return; // Exit if the withdrawal amount exceeds the balance
    }

    // Proceed with withdrawal if validation passes
    accounts['user'].balance -= withdrawAmount;
    document.getElementById('withdraw-success').classList.remove('hidden');
    updateBalance();
});

// Function to update the displayed balance
function updateBalance() {
    const balanceDisplay = document.getElementById('account-balance');
    balanceDisplay.textContent = accounts['user'].balance.toFixed(2); // Update balance display
}


// Fund Transfer
document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const transferAmount = parseFloat(document.getElementById('transfer-amount').value);
    const receiverName = document.getElementById('receiver-name').value;

    // Validate transfer amount
    if (isNaN(transferAmount) || transferAmount <= 0) {
        alert("Please enter a valid transfer amount greater than zero.");
        return; // Exit if the transfer amount is invalid
    }

    if (transferAmount > accounts['user'].balance) {
        alert("Transfer amount cannot exceed your current balance.");
        return; // Exit if the transfer amount exceeds the balance
    }

    // Proceed with transfer if validation passes
    accounts['user'].balance -= transferAmount;

    // Simple transfer simulation (you may add recipient logic in real projects)
    alert(`Successfully transferred $${transferAmount.toFixed(2)} to ${receiverName}.`);

    document.getElementById('transfer-success').classList.remove('hidden');
    updateBalance();
});

// Function to update the displayed balance
function updateBalance() {
    const balanceDisplay = document.getElementById('account-balance');
    balanceDisplay.textContent = accounts['user'].balance.toFixed(2); // Update balance display
}

