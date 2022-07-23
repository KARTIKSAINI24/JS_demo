document.getElementById('button1').addEventListener('click',loadcustomer);
document.getElementById('button2').addEventListener('click',loadcustomers);

function loadcustomer(e){
    const xhr =new XMLHttpRequest;
    xhr.open('GET','loadingjson.JSON',true);

    xhr.onload=function(){
        if (this.status === 200){
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText)

            const output =`
            <ul>
               <li>ID :  ${customer.id} </li>
               <li>Name :  ${customer.Name} </li>
               <li>Company:  ${customer.company} </li>
               <li>Phone :  ${customer.phone} </li>
            </ul>

            `;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();

}


//LOad customers


function loadcustomers(e) {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'loadingjson2.JSON', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText)

            let output='';

            customers.forEach(function(customer){
                output += `
            <ul>
               <li>ID :  ${customer.id} </li>
               <li>Name :  ${customer.Name} </li>
               <li>Company:  ${customer.company} </li>
               <li>Phone :  ${customer.phone} </li>
            </ul>

            `;
            })
           
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();

}