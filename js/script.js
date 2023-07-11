// 1st step: taking reference
const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkBtn = document.querySelector('#check-btn');
const errorMessage = document.querySelector('#error-message');

const changeTable = document.querySelector('.change-table');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const availNotes = [2000, 500, 100, 20, 10, 5, 1];

// 2nd step: add event listener
checkBtn.addEventListener('click', clickHandler);

// 3rd step: function of clickHandler
function clickHandler() {
    const bill = billAmount.value;
    const cash = cashGiven.value;
    errorMessage.style.display = 'none';
    
    if (bill > 0) {
        if (cash >= parseInt(bill)) {
            const returnAmount = cash - bill;
            returnChangeLogic(returnAmount) // process: return the change logic 
            // console.log('thanks for shopping! this is your change.');
        } else {
            showErrorMsg('Do You wanna wash our dishplate?');
        }
    } else {
        showErrorMsg('Invalid Bill Amount! bill is always greater than zero');
    }

    // html table logic
    changeTable.style.display = 'block';
}

// 4th step: function of show error message
function showErrorMsg(msg) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = msg;
}

// 5th step: main logic how many note gave to return back to customer
function returnChangeLogic(balanceAmount) {
    for (let i = 0; i < availNotes.length; i++) {
        const giveNote = Math.trunc(balanceAmount / availNotes[i]);

        balanceAmount = balanceAmount % availNotes[i];

        noOfNotes[i].innerText = giveNote;
    }
}