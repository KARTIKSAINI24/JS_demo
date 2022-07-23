document.querySelector('.get-jokes').addEventListener('click',getJokes)


function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;
    // console.log(number)

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true)

    xhr.onload = function(){
        if(this.status === 200){
            response = JSON.parse(this.responseText);
            console.log(response)

            let output ='';

            if (response.type==="success"){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            }else{
                    output = "something went wrong";

            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}