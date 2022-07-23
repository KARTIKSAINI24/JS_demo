document.getElementById('btn').addEventListener('click',loadData);
btnvalue = document.getElementById('btn')
function loadData(){
    // creating xhr Object
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET', 'loadingTExt.txt', true);
    console.log('ready state', xhr.readyState);




    // optional for putting spinner and loaders
    xhr.onprogress= function(){
        console.log('ready state', xhr.readyState);

    }



    xhr.onload = function(){
        // console.log('ready state', xhr.readyState);//state 4
        if (this.status===200){       //200 - http request that everything is alright  
            btnvalue.value=`${this.responseText}`
        console.log(this.responseText)
        }
    }

    // old syntax
    // xhr.onreadystatechange = function(){
    //     console.log('ready state', xhr.readyState);//state 2,3,4

    //     if(this.status === 200 && this.readyState==4){
    //         console.log(this.responseText)
    //     }
    // }

    xhr.onerror=function(){ //if something goes wrong
        console.log('request error')
    }



    xhr.send()
}

// ready state values
// 0:request not initialised
// 1:server connection established
// 2:request recieved
// 3:processing request
// 4:request finished and response is ready



