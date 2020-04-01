$(`#add-form`).submit(function (event){
    event.preventDefault()
    console.log('masuk add')
    let token= localStorage.getItem('token')
    let title = $(`#title-add`).val()
    let description= $(`#description-add`).val()
    let status = false
    let due_date = $(`#due_date-add`).val()
    console.log(due_date)
    let a = new Date(due_date)
    let b = new Date()
    if (a<b){
        $(`#error`).empty()
        $(`#error`).append(`Due date shall be in future`)
    } else {
        $.ajax({
            type: "POST", 
            url: "http://localhost:3000/todos", 
            headers: {token: token},
            data: {
                title: title,
                description: description,
                status: status,
                due_date: due_date
            },
            success: function(result){
                console.log('okkkk')
                $(`#error`).empty()
                $(`#add-form`)[0].reset()
                $(`#add`).hide()
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
})