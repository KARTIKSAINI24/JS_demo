//gaem values
let min=1,
    max=10,
    winningNum=2,
    guessLeft=3;
//UI elements

const game= document.querySelector('#game'),
    minNum= document.querySelector('#min-num'),
    maxNum= document.querySelector('#max-num'),
    guessinput= document.querySelector('#guess-input'),
    guessbtn= document.querySelector('#guess-btn'),
    message = document.querySelector('#message');

//Assign UI text min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event handler
game.addEventListener('mousedown',function(e){
    if (e.target.classList.contains('play-again') )
        window.location.reload();
        console.log('1')

    })





//adding event listener to guess button
guessbtn.addEventListener('click',function(){
    let guess = parseInt(guessinput.value)

    //validate the input
    if(isNaN(guess) || guess>max || guess <min){ //can't do guess === Nan
        setMessage(`Please the enter the number between ${min} and ${max}`, 'red')
    }

    //if input is valid
    //winning situtaion
    else{
        if(guess == winningNum){
            // guessinput.disabled = true;
            // guessinput.style.borderColor ='green';
            // setMessage(`${winningNum} is correct, You Win`, 'green');
            gameover(true, `${winningNum} is correct, You Win`)
        }
        //incorrect guess
        else{
            if(guessLeft>1)
            {
            guessLeft = guessLeft - 1;
            setMessage(`Wrong Number ,You have ${guessLeft} guesses left`, 'red')
            guessinput.style.borderColor = 'red';
            //clear input
            guessinput.value='';
            }
            //game lost
            else{
                gameover(false, `Game Over, You lost.The correct Number is ${ winningNum }`)

        }}
    }
})

//Game over 
function gameover(won,msg){
    let color;
    won == true?color='green':color='red';
    guessinput.style.borderColor = color;
    guessinput.disabled = true;
    setMessage(msg,color);

    guessbtn.value = 'Play Again';
    guessbtn.classList.add('play-again');
    // guessbtn.className += ' play-again' //it will keep appending
    // console.log(guessbtn.className)
}

function setMessage(msg, color){
message.style.color = color;
message.textContent=msg;
}