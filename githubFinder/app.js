const github = new Github
const ui = new UI
//taking input
const searchUser= document.getElementById('username')

//search for name
searchUser.addEventListener('keyup',(e)=>{
    const userText = e.target.value;

    if(userText!= ''){
    
        //make http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found', 'alert alert-danger')
                console.log('not found');

            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                console.log(data);

            }
        })
    }else{
        //clear Profile
        ui.clearProfile();
    }
})

