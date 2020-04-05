function addopen(){
    $(`#errormodaladd`).empty()
    $(`#add-form`)[0].reset()
}

$(`#add-form`).submit(function (event){
    event.preventDefault()
    console.log('masuk add')
    let token= localStorage.getItem('token')
    let title = $(`#title-add`).val()
    let description= $(`#description-add`).val()
    let status = false
    let due_date = $(`#due_date-add`).val()
    let a = new Date(due_date)
    let b = new Date()
    if (a<b){
        $(`#errormodaladd`).empty()
        $(`#errormodaladd`).append(`Due date shall be in future`)
    } else {
        $.ajax({
            type: "POST", 
            url: "https://boiling-taiga-85460.herokuapp.com/todos", 
            headers: {token: token},
            data: {
                title: title,
                description: description,
                status: status,
                due_date: due_date
            },
            success: function(result){
                console.log('okkkk')
                $(`#errormodaladd`).empty()
                $(`#add-form`)[0].reset()
                $(`#modalAdd`).modal('hide')
                $(`#todos`).show()
                todoshow()
            },
            error: function(err){
                console.log(err)
                $(`#errormodaladd`).empty()
                $(`#errormodaladd`).append(`Error : ${err.responseJSON}`)
            }
        })
    }
})