$(`#register-form`).submit(function (event){
    event.preventDefault()
    let username = $(`#username-reg`).val()
    let email= $(`#email-reg`).val()
    let password = $(`#password-reg`).val()
    let repassword = $(`#repassword-reg`).val()
    if (password!==repassword){
        $(`#error`).empty()
        $(`#error`).append(`Please input the same password!`)
    } else {
        console.log({username, email, password})
        $.ajax({
            type: "POST", 
            url: "http://localhost:3000/user/register", 
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function(result){
                console.log('okkkk')
                $(`#error`).empty()
                $(`#login-form`)[0].reset()
                $(`#register`).hide()
                $(`#login`).show()
            },
            error: function(err){
                console.log(err)
                $(`#error`).empty()
                $(`#error`).append(`Error : ${err.responseJSON}`)
            }
        })
    }
})