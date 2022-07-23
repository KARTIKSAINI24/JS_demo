document.getElementById('loan-form').addEventListener('submit',function(e)
{
//hide results
document.getElementById('results').style.display = 'none'

//show loader
document.getElementById('loader').style.display = 'block'
setTimeout(calculateresults, 1000)

e.preventDefault();
});

//calculating results
function calculateresults(){
console.log('calculating.....')

//UI vars
const amount=document.getElementById('amount')
const interest=document.getElementById('interest')
const years=document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

// Compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest) / (x - 1);

if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    document.getElementById('results').style.display = 'block'
    document.getElementById('loader').style.display = 'none'


} else {
    showError('Please check your numbers');
}

}

// showerror function
function showError(error)
{
    document.getElementById('results').style.display = 'none'
    document.getElementById('loader').style.display = 'none'

    //creating element
    const errordiv =document.createElement('div');
    //get elements
    const heading =  document.querySelector('.heading')
    const card = document.querySelector('.card')
    //adding class(bootstrap)
    errordiv.className= 'alert alert-danger';
    //create text node and append to div
    errordiv.appendChild(document.createTextNode(error))
    
    //adding error before the haeding
    card.insertBefore(errordiv,heading)

    //clear error after 3 seconds
    setTimeout(clearerror, 2000)

    function clearerror(){
        document.querySelector('.alert').remove();
    }

}