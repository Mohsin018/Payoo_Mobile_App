// Add money button setting up

const validPin = 2222;


document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()

    //access bank
    const bank = document.getElementById('bank').value;

    //access a/c number
    const accountNumber = document.getElementById('account-number').value;

    //access amount also converting it to string to integer
    const amount = parseInt(document.getElementById('add-amount').value);

    //access pin
    const pin = parseInt(document.getElementById('add-pin').value);


    //access the current available balance
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length <11){
        alert("please provide valid account number")
        return;

    }

    if(pin.length <4){
        alert("Please provide 4 digit pin number");
        return;

    }
    if(pin !== validPin){
        alert("Please provide valid pin number");
        return;

    }


    //sum the current balance and added amount
    const totalNewAvailableBalance = amount + availableBalance;

    // now display the updated balance
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})


// Toggle feature od add money and cash out
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "none"
    document.getElementById('add-money-parent').style.display = "block";
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "none"
    document.getElementById('cash-out-parent').style.display = "block";
})