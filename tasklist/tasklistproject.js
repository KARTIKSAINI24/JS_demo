const form = document.querySelector('#task-form')
const tasklist = document.querySelector('.collection')
const clearbtn = document.querySelector('.clear-tasks')
const filtr = document.querySelector('#filter')
const taskinput = document.querySelector('#task')

loadEventlisteners();

function loadEventlisteners(){
    //load contentsnfrom local storage
    document.addEventListener('DOMContentLoaded', gettasks);
    //add task event
    form.addEventListener('submit', addtask);
    //remove task event
    tasklist.addEventListener('click', removetasks);
    // clear all events
    clearbtn.addEventListener('click', cleartasks)
    //filter tasks
    filtr.addEventListener('keyup', filtertasks)
}

/////////////////////function for getting tasks for local storage
function gettasks(e){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';

        li.appendChild(document.createTextNode(task))
        // //create new link item
        const link = document.createElement('a');
        // //add class
        link.className = 'delete-item secondary-content';
        // //adding link
        link.innerHTML = '<i class = "fa fa-remove"></i>'
        // //append link to li
        li.appendChild(link);
        //append li to ul
        tasklist.appendChild(li);
    })
    
}


///////////////////function for adding tasks
function addtask(e){
    if(taskinput.value === ''){
        alert('Add a task');
    }
    //create a list item
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskinput.value))
    // //create new link item
    const link = document.createElement('a');
    // //add class
    link.className = 'delete-item secondary-content';
    // //adding link
    link.innerHTML='<i class = "fa fa-remove"></i>'
    // //append link to li
    li.appendChild(link);
    
    //append li to ul
    tasklist.appendChild(li);

    // calling function for storing in local storage
    storetask(taskinput.value);
    // console.log(li)
    // clear input
    taskinput.value='';
    e.preventDefault()
}

//function for storing in local storage
function storetask(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


///////////function for removing
function removetasks(e){
    // if(e.target.parentElement.classList.contains('delete-item'))P{
    // console.log(e.target)
    e.target.parentElement.parentElement.remove();
    //removing from LS calling function
    removingtaskfromls(e.target.parentElement.parentElement)
    }


function removingtaskfromls(taskitem){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskitem.textContent===task){
        tasks.splice(index, 1);
    }
    })

    localStorage.setItem('tasks',JSON.stringify(tasks))
}
// function for removing tasks
function cleartasks(e){
    // tasklist.innerHTML= ' ';

    // faster method to remove every task
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }
    //removing from LS calling function
    cleartasksfromls()

}

//clear from local storage
function cleartasksfromls(){
    localStorage.clear()
}

function filtertasks(e){
    const text =e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'
        }
        else{
            task.style.display = 'none'

        }

    })
}
