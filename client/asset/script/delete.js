function deltodo(id){
    console.log('masuk delete')
    let token= localStorage.getItem('token')
    $.ajax({
        type: "DELETE", 
        url: `http://localhost:3000/todos/${id}`, 
        headers: {token: token},
        success: function(result){
            console.log(result)
            $(`#error`).empty()
            $(`#todos`).show()
            todoshow()
        },
        error: function(err){
            console.log(err)
            $(`#error`).empty()
            $(`#error`).append(`Error : ${err.responseJSON}`)
        }
    })
}