// Login Button functionality
document.getElementById('loginButton').addEventListener('click',function(e){
    e.preventDefault()

    const mobileNumber = 12345678910
    const pinNumber = 1234

// user number
    //get input field values
    const mobileNumberValue = document.getElementById('mobile-number').value
    //convert the fatched input from input from string to integer
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    //user pin
//get input field values
    const pinNumberValue = document.getElementById('pin-number').value
 //convert the fatched input from input from string to integer
    const pinNumberValueConverted = parseInt(pinNumberValue)

    //set the condition to wheather the typed input number and password matched with the saved password
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){

        //to redirect to the dashboard means another page
        window.location.href ="./home.html"

    }
    else{
        // console.log('invalid')

        //show invalid by using alert
        alert('Invalid');
    }
})