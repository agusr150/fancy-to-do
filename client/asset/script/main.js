$(document).ready(function(){
    let token = localStorage.getItem('token')
    console.log(token)
    if(token) {
        $(`#error`).empty()
        $(`#todos`).show()
        todoshow()
    } else {
        $(`#error`).empty()
        $(`#login`).show()
        $(`#register`).hide()
    }
})

$(`#btn-register`).click(function(){
    $(`#error`).empty()
    $(`#login`).hide()
    $(`#register-form`)[0].reset()
    $(`#register`).show()
})

$(`#btn-login`).click(function(){
    $(`#error`).empty()
    $(`#register`).hide()
    $(`#login-form`)[0].reset()
    $(`#login`).show()
})

$(`#btn-add`).click(function(){
    $(`#error`).empty()
    $(`#todos`).hide()
    $(`#add`).show()
})

$(`#btn-cancel-add`).click(function(){
    $(`#error`).empty()
    $(`#add-form`)[0].reset()
    $(`#add`).hide()
    $(`#todos`).show()
})

$(`#btn-cancel-edit`).click(function(){
    $(`#error`).empty()
    $(`#edit`).hide()
    $(`#todos`).show()
})

$(`#btn-logout`).click(function(){
    $(`#error`).empty()
    $(`#usertodo`).empty()
    $(`#list-todos`).empty()
    $(`#todos`).hide()
    localStorage.removeItem('token')
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    $(`#login`).show()
})

function onSignIn(googleUser) {
    console.log("google ok")
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token)
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/user/googlelogin",
        data:{
            id_token
        },
        success:function(response ){
            console.log(response)
            localStorage.setItem("token",response.token)
            $(`#login`).hide()
            $(`#todos`).show()
            todoshow()
            
        },
        error: function(err){
            console.log(err)
            $(`#error`).empty()
            $(`#error`).append(`Error : ${JSON.stringify(err)}`)
        }
    })
  }