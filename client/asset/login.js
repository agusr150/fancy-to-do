$(`#login-form`).submit(function (event){
    event.preventDefault()
    let email= $(`#email-login`).val()
    let password = $(`#password-login`).val()
        console.log("masukkk")
        $.ajax({
            type: "POST", 
            url: "http://localhost:3000/user/login", 
            data: {
                email: email,
                password: password
            },
            success: function(result){
                console.log('login sukses')  
                localStorage.setItem('token',result.token)         
                $(`#error`).empty()
                $(`#login`).hide()
                $(`#todos`).show()
                console.log(result)
            },
            error: function(err){
                console.log(err)
                $(`#error`).empty()
                $(`#error`).append(`Error : ${JSON.stringify(err)}`)
            }
        })
    
})