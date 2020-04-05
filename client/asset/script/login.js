$(`#login-form`).submit(function (event){
    event.preventDefault()
    let email= $(`#email-login`).val()
    let password = $(`#password-login`).val()
        console.log("masukkk")
        $.ajax({
            type: "POST", 
            url: "https://boiling-taiga-85460.herokuapp.com/user/login", 
            data: {
                email: email,
                password: password
            },
            success: function(result){
                localStorage.setItem('token',result.token)         
                $(`#error`).empty()
                $(`#login-form`)[0].reset()
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
    
})