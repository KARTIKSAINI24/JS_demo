document.getElementById('btn1').addEventListener('click',getText);
document.getElementById('btn2').addEventListener('click',getJSON);
document.getElementById('btn3').addEventListener('click',getExternal);

// Get text
function getText(){
    fetch('fetchapi.txt')
    .then(function(res){
        return res.text()
    })
    .then(function(data){
        console.log(data);
        document.querySelector(".output").innerHTML=data;
    })
    .catch(function(err){
        console.log(err);
    })
}
// Get Json
function getJSON(){
    fetch('fetchapi.JSON')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let output=''
        data.forEach(function(post){
            output+=`<li>${post.title}</li>`
        })
        document.querySelector(".output").innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    })
}
// Get external API
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let output=''
        data.forEach(function(user){
            output+=`<li>${user.login}</li>`
        })
        document.querySelector(".output").innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    })
}


